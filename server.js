const http = require('http');

const express = require('express');

const path = require('path');

const config = require('./db.js');

const db = require('./db.js');

const app = express();

const key = require('./config.js');

const Port = process.env.PORT || 3000;

const url = 'http://food2fork.com/api/search';


http.createServer();
app.get('/search', (request, response) => {
  const options = {
    host: 'www.food2fork.com',
    path: `/api/search?key=be4fdec94f01657a3ae2d5f96ed2edf0&q=${request.headers.search}`,
    key: key.foodForkApiKey,
    q: request.headers.search,
  };
  http.get(options, (res) => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', (data) => {
      body += data;
    });
    res.on('end', () => {
      response.send(body);
    });
  });
});
app.post('/dbfavorite', (request, response) => {
  const data = request.query.data
 console.log(db);
 let fav = { 
   title: data.title,
   picture: data.image_url, 
   url: data.f2f_url,
   favorite: false,
   tried: false,
   
 };
 db.save(fav)



 response.end()
});
app.post("/dbtriedit", (request, response) => {
  console.log(request.query);
  response.end();
});
app.use(express.static(path.join(__dirname, '/public')));

app.listen(Port);

console.log(`server is listening to ${Port}`);
