const mongo_URI = require('./config.js').MONGO_URI;
const Promise = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect(mongo_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to db');
});
db.once('open', () => {
  console.log('connected to db');
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

const get = (id) => {
  return User.find({_id: id});
};

const create = (user) => {
  return User.create(user);
};

module.exports = {
  get: get,
  create: create
};