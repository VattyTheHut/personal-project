require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var session = require('express-session')
const massive = require('massive');

const app = express()
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))
app.use(express.static('assets'))
app.use(cors())
app.use(bodyParser.json())

massive('postgres://vatekehcorlon:Zelda64..@localhost/ppolychat').then(massiveInstance => {
   app.set('db', massiveInstance);
 })

// app.get('/messages', function (req, res, next) {
//   res.status(200).json({ messages: messages });
// });

app.post('/postMessage', (req, res, next) => {
  console.log('hitting postmessg endpoint')
  console.log("req.body is:", req.body)
  // messages.push({ message: req.body.message, time: new Date() });
  var instance = req.app.get('db')
  
  instance.postchat([req.body.newPost])
  .then(res => res.status(200).json(res))
  .catch(err => res.status(404).json(err))
 
});


app.post('/postNewUser', (req, res, next) => {
  arr = []
  arr.push(req.body.email)
  arr.push(req.body.password)
  arr.push(req.body.fname)
  arr.push(req.body.lname)
  arr.push(req.body.work)
  arr.push(req.body.Location)

  console.log('array pushed')

  var instance = app.get('db')
  console.log('linked to db')
  instance.postNewUser(arr)
  .then(response => {
    res.status(200).json(response)})
  .catch(err => {
    console.log(err)
    res.status(404).json(err)
  })

});



 var messages = []

io.on('connection', (socket) =>{

  //io.to(socket.id).emit('message history', messages)
  socket.on('chat message', (msg) =>{
      console.log(msg)
      messages.push(msg)
    io.emit('chat message', msg);
    
  });
});

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT, () => {
  console.log('listening on *:' + process.env.PORT);
})
