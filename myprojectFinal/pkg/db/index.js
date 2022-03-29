const mongoose = require('mongoose');
// const config = require('../config');

let username = 'Dev';
let password = 'fOQjcCH8RUTqiuLt';
let host = 'nodetuts.ueesf.mongodb.net';
let dbname = 'semosdb';


let dsn = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Could not connect to DB:', err);
        }
        console.log('Successfully connected to db');
    }
);