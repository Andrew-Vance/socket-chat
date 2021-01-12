const express = require('express');
const app = express();
const User = require('../database');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);
const mongo_URI = require('../database/config.js').MONGO_URI;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const port = process.env.port || 3000;

const store = new mongoDBStore({
  uri: mongo_URI,
  collection: 'sessions'
});

store.on('error', err => {
  console.log('error on store');
});

app.use(require('express-session')({
  secret: 'secret',
  cookie: {
    maxAge: 1000 * 10 * 1
  },
  store: store,
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static('client/dist'));
app.use('/login', express.static('client/dist'));
app.use('/register', express.static('client/dist'));



let connectedUsers = {};

app.get('/user/:id', (req, res) => {
  User.get(req.params.id)
    .then(user => {
      console.log(user);
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

app.post('/register', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.create({ username, password })
    .then(() => {
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

app.get('/lobby', (req, res) => {
  res.send(lobby);
});


const io = socket(app.listen(port, () => {
  console.log(`listening on ${port}`);
}));

io.on('connection', (socket) => {
  console.log('connected');
  socket.join('lobby');
  //console.log(socket.rooms);


  socket.on('message', (message) => {
    //console.log(message);
    io.in('lobby').emit('messages', message);
  });
});
