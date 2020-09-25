var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/audio.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
var msgList = [];
var name;
var names = [];
io.on('connection', (socket) => {
    socket.on('chat message', (msg, u) => {
        name = u;
        msgList.push(msg);
        names.push(name);

        io.emit('chat message', msg, {msgList}, {names});
    });
});

io.on('connection', (socket) => {
    io.emit('init', {msgList}, {names});
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
