# Google Books Search

 Google Books Search is an application built on the MERN stack. It allows users to
 search for books from the Google Books API, and provides links to view the book, or save it
 in the application's database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To begin, clone this repository to your local system.

```shell script
git clone https://github.com/wparks08/google-books-search.git
```

You must also have the following installed on your system to run the application:

```text
Node
MongoDB
```

### Installing

First, install node packages.

```shell script
npm i
--or--
npm install
```

You will also need a Google Books API key. Check the link [here](https://developers.google.com/books/docs/v1/getting_started) for instructions on how to get one.

After you have the API key, create a file called `.env` in the root project folder. Enter your API key as follows:

```dotenv
GOOGLE_BOOKS_API_KEY=[your api key]
```

Once you have completed these steps, run `npm start` from the root directory. This will launch the Express server and React app concurrently.
Go to `localhost:3000` to access the app.

### Deployment

This app is set up to be deployed on Heroku. Using the Heroku CLI, follow these steps to deploy:

```shell script
heroku create
heroku addons:create mongolab
git push heroku master
```

## Built With

- [Node.js](https://www.nodejs.org) - JavaScript Runtime
- [NPM](https://npmjs.com) - Dependency Management
- [Express](https://www.npmjs.com/package/express) - Web framework for Node.js 
- [Mongoose](https://www.npmjs.com/package/mongoose) - ORM for MongoDB
- [Axios](https://www.npmjs.com/package/axios) - For asynchronous API calls
- [socket.io](https://socket.io/) - Notifications API
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [React](https://www.reactjs.org) - Front end library
- [Material UI](https://material-ui.com/) - Material Design UI Framework for React
- [React Router DOM](https://www.npmjs.com/package/react-router-dom) - For SPA routing

## Author

- **Will Parks** - *Full Stack* - [wparks08](https://www.github.com/wparks08)