# Newsletter Sign-Up Project

This is a newsletter sign-up web application built as part of my portfolio to showcase my skills as a web developer.

## View the Project

You can view the live project here: [Newsletter Sign-Up Project on Vercel](https://vercel.live/link/newsletter-g1amdlfha-mohammed-alazamis-projects.vercel.app?via=deployment-domains-list-commit)

## About

This project allows users to subscribe to a newsletter by providing their first name, last name, and email address. The data is then sent to a Mailchimp list.

## How to Use

1. Visit the homepage.
2. Enter your first name, last name, and email address in the provided form.
3. Click on the "Subscribe" button.
4. You will see a success or failure message based on the subscription result.

## Technologies Used

- **Express.js:** A web application framework for Node.js.
- **body-parser:** Middleware to parse incoming request bodies.
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Mailchimp API:** Used to manage mailing lists and subscriptions.
- **Vercel:** A platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.

## Project Structure

- **app.js:** The main server file that handles routing and logic.
- **public:** Contains static assets like CSS files.
- **views:** Contains HTML files (`index.html`, `success.html`, `failure.html`).

## Deployment

This project is deployed on Vercel. Vercel provides seamless integration with GitHub for automatic deployments.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A Mailchimp account with an API key and a list ID.
- A Vercel account (optional for local deployment).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MohammedAzzami/news-letter.git
    ```

2. Navigate to the project directory:
    ```bash
    cd news-letter
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the application locally:
    ```bash
    node app.js
    ```
   The application will be available at `http://localhost:3000`.

### Environment Variables

Ensure you have a `.env` file in the root of your project with the following content (replace with your actual Mailchimp API key and list ID)
