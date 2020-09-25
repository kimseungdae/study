var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server,{
  pingTimeout: 1000,
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api', require('./routes/api'));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static(path.join(__dirname, '../','fe','dist')));

io.on('connection', function(socket){

  // 클라이언트로부터의 메시지가 수신되면
  socket.on('chat', function(data) {
    console.log('Message from %s: %s', data.name, data.msg);

    var msg = {
      from: {
        name: data.name,
      },
      msg: data.msg
    };

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    socket.broadcast.emit('chat', msg);
  });

  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const mongoose = require('mongoose');
const keyword = require('./models/keyword');
const simon = require('./models/simon');
const filelist = require('./models/filelist');
    mongoose.connect('mongodb://127.0.0.1:27017/nemv', {useNewUrlParser: true}, (err) =>{
  if(err)return console.error('==================err===============\n'+err)
  console.log('mongoose connected!')


  /*keyword.find()
      .then(r => console.log(r))
      .catch(e => console.error(e))*/

})
