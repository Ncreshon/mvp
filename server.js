var http = require('http');
var express = require('express');
var app = express();
const Port = process.env.PORT || 3000




http.createServer();

app.get('/', function(req, res){
    res.send('sup')
})





app.listen(Port);

console.log("server is listening to" + " " + Port);