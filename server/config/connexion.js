import oriento from 'oriento';

let db = oriento({
    host: 'localhost',
    port: 2424,
    name:'Chat',
    username: 'root',
    password: ''
});

let messages = db.use({
    'name': 'Chat',
    'username': 'admin',
    'password': 'admin'
});
exports.messages = messages;