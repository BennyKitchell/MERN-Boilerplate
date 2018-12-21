const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser 
app.use(bodyParser.json());

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;
const config = require('./config/config')[env];

// Db Config
const db = config.url;

// Connect to mong database
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => {
        console.log('Connected to mongo db.');
    })
    .catch((err) =>{
        console.log(err);
    });

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});