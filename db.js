const mongoose = require('mongoose');

const path = require('path');

const server = require('./server.js');

mongoose.connect('mongodb://Ncreshon:Leesa1125@ds243085.mlab.com:43085/users', { useMongoClient: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connection successful'));

const reciepeSchema = mongoose.Schema({
  title: String,
  picture: String,
  url: String,
  favorite: Boolean,
  tried: Boolean,
});

const Reciepe = mongoose.model('Reciepe', reciepeSchema);
module.exports ={

 save: function(data){
   const favorite = new Reciepe(data);

   favorite.save((err, favorite) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    })
 },
 


}

// const Nik = new User({ username: 'Nik', password: 'stuff', firstName: 'Nicole' });

// Nik.save((err, Nik) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('success');
//   }
// });

