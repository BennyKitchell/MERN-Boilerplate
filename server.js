import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

// Body Parser 
app.use(bodyParser.json());

const env = process.env.NODE_ENV || 5000;
const config = require('./config')[env];