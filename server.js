// Import modules
const express = require("express"); 
const path = require("path");
const api = require("../routes/index.js");

// Port used for Heroku
const PORT = process.env.PORT || 3001;

// Initialize express
const app = express();

// Middleware for parsing JSON + URL incoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

// Authroization to make it public
app.use(express.static("public"));

// Starts listening
app.listen(PORT, () => {
    console.log('Opened on ${PORT}')
})