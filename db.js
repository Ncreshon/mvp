const mongoose = require('mongoose');

const path = require('path');

const server = require('./server.js');

mongoose.connect('mongodb://Ncreshon:Leesa1125@ds243085.mlab.com:43085/users', { useMongoClient: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connection successful'));

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model('User', userSchema);
