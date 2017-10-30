const http = require('http');

const express = require('express');

const app = express();

const Port = process.env.PORT || 3000;

http.createServer();

app.get('/', (req, res) => res.send('yep this server is working dude'));

app.listen(Port);

console.log(`server is listening to ${Port}`);
