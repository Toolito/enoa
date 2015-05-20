/*var socket = io('http://localhost:3001/');
var element = document.getElementsByTagName('button')[0];
var messages = document.getElementById('messages');

element.addEventListener('click', function(event) {
    var message = document.getElementById('m').value;

    if (message.length) {
        socket.emit('chat:post', message);
        message.value = '';
        return false;
    }
});

socket.emit('chat:get');

socket.on('chat:post', function(msg) {
    var newElement = document.createElement('li');
    newElement.textContent = msg;
    messages.appendChild(newElement);
});

socket.on('chat:get', function(list) {
    deleteList();

    list.forEach(function(item) {
        var newElement = document.createElement('li');
        newElement.textContent = item.message;
        messages.appendChild(newElement);
    });
})

function deleteList() {
    var items = document.getElementsByTagName('li');
    if (items.length) {
        items.forEach(function(item) {
            item.parentNode.removeChild(item);
        });
    }
}
*/

