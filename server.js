const http = require('http');

const express = require('express');

const path = require('path');

const config = require('./db.js');

const db = require('./db.js');

const app = express();

const key = require('./config.js');

const Port = process.env.PORT || 4500;

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
 
  const data = JSON.parse(request.query.data)

let fav = { 
  title: data.title,
  picture: data.image_url, 
  url: data.f2f_url,
  favorite: true,
  tried: false,
  
};
db.save(fav)
response.end()
});

app.post("/dbtriedit", (request, response) => {
   const data = JSON.parse(request.query.data);
  console.log('sup')
  db.update(data.f2f_url)
  response.end()

});

app.get("/dblistTried", (request, response) => {
  const data = request.query.data;
  db.listTried(function(err, tried){
    if (err) {
      console.error(err)
    } else {
      console.log(tried)

      response.send(tried)
    }
  })
});

  app.post("/dbdelete", (request, response) => {
    
  const data = JSON.parse(request.query.data);
db.deleteIt(data);
  
});


app.use(express.static(path.join(__dirname, '/public')));

app.listen(Port);

console.log(`server is listening to ${Port}`);
