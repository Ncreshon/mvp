const http = require('http');

const express = require('express');

const path = require('path');

const db = require('./db.js');

const app = express();

const Port = process.env.PORT || 3000;

http.createServer();

app.use(express.static(path.join(__dirname, '/public')))

app.listen(Port);

console.log(`server is listening to ${Port}`);
