require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

//* make sure to require (path module) and type the next code *//
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const emailAddress = req.body.email;

    const jasonData = {
        members: [
            {
                email_address: emailAddress,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName,
                }
            }
        ]
    };

    const jasonFlat = JSON.stringify(jasonData);
    const url = "https://us22.api.mailchimp.com/3.0/lists/6b518e68e5";
    const options = {
        method: "POST",
        auth: `Mido:${process.env.MAILCHIMP_API_KEY}`,
    };

   
    const request = https.request(url, options, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data));
            console.log(response.statusCode);
            if (response.statusCode === 200) {
                res.sendFile(__dirname + "/success.html");
                
    
            } else {
                res.sendFile(__dirname + "/failure.html");
            };
        });
    });

    request.write(jasonFlat);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.post("/success", function(req, res) {
    res.redirect("/");
});

app.listen(port, function() {
    console.log("Server started on port 3000.");
})


