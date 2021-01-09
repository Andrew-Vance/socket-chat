const express = require('express');
const app = express();
const http = require('http').Server(app);
//const io = require('socket.io')(http);
const socket = require('socket.io');
const port = 3000;

app.use(express.static('client/dist'));

const io = socket(app.listen(port, () => {
  console.log(`listening on ${port}`);
}));

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('message', (message) => {
    console.log(message);
  });
});

// http.listen(port, () => {
//   console.log(`listening on ${port}`);
// });