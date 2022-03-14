const mongoose = require('mongoose');
const express = require('express');
const mainController = require('./controllers/main.controller');

const app = express();

const connectionString =
  "mongodb+srv://user23:9b5uxrgR8M6AkgV4@cluster0.5nsf7.mongodb.net/Banking?";

const connect = () => {return mongoose.connect(connectionString)};
app.use(express.json());
app.use('/',mainController);
app.listen(5000,async () => {
    try {
        console.log('listening on 5000');
        await connect();
    } catch (error) {
        console.log(error);
    }
})