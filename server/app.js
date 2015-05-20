// Use ES6 with Babel until Node has all features
import logger from 'morgan';
import cors from 'cors';
import http from 'http';
import express from 'express';
import errorhandler from 'errorhandler';
import bodyParser from 'body-parser';
import socketio from 'socket.io';
import messagesRest from './models/messages';

let app = express();
let server = http.createServer(app);
let io = socketio.listen(server);
let db = require('./config/connexion.js').messages;

app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.static('public'))
    .use(cors())
    .get('/messages', messagesRest.get)
    .get('/messages/:id', messagesRest.getById)
    .post('/messages', messagesRest.post)
    .put('/messages/:id', messagesRest.put)
    .delete('/messages/:id', messagesRest.delete)

    .use((err, req, res, next) => {
        if (err.name === 'StatusError') {
            res.status(err.status).send(err.message);
        } else {
            next(err);
        }
    });

if (process.env.NODE_ENV === 'development') {
    app.use(express.logger('dev'));
    app.use(errorhandler())
}

let port = process.env.PORT || 3001;

server.listen(port, (err) => {
    console.log('listening in http://localhost:' + port);
});



io.on('connection', (socket) => {
    socket.on('messages.add', (data) => {
        db.insert().into('messages').set(data).one()
            .then( (msg) => {
                io.emit('messages.new', msg);
            });
    });

    socket.on('messages.get', () => {
        db.select('content')
            .from('messages').all().then((msg) => {
                io.emit('messages.get', msg);
            })
    });

    socket.on('messages.delete', (id) => {
        db.record.delete('#'+id)
            .then((total) => {
                io.emit('messages.deleted', id);
            });
    })

});


export default app;