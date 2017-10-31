const http = require('http');

const express = require('express');

const path = require('path');

const db = require('./db.js');

const app = express();

const Port = process.env.PORT || 3000;

http.createServer();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'signup.html')));

app.listen(Port);

console.log(`server is listening to ${Port}`);
