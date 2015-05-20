(function() {

    'use strict';

    angular
        .module('app.routes.home')
        .controller('HomeController', HomeController);


    HomeController.$inject = ['SocketService', 'messages'];

    /**
     * Controller for home route
     */
    function HomeController(SocketService, messages) {

        var self = this;

        var username = null;
        var newMsg = '';

        var authenticated = false;

        //
        _.extend(self, {
            messages        : messages,
            username        : username,
            authenticated   : authenticated,
            newMsg          : newMsg,

            authenticate    : authenticate,
            isAuthenticated : isAuthenticated,
            addMessage      : addMessage,
            deleteMessage   : deleteMessage
        });

        function authenticate() {
            self.authenticated = true;
        }

        function isAuthenticated() {
            if (self.username && self.username.length && self.authenticated)
                return true;
            else
                return false;
        }

        function addMessage() {
            if (self.newMsg.length) {
                var obj = {
                    username: self.username,
                    content: self.newMsg
                };

                SocketService.emit('messages.add', obj);
                self.newMsg = '';
            }
        }

        function deleteMessage(id) {
            var id = id.substr(1);
            SocketService.emit('messages.delete', id);
        }

        SocketService.on('messages.new', function(data) {
            self.messages.push(data);
        });

        SocketService.on('messages.deleted', function(data){
            self.messages = _.reject(self.messages, function(msg) {
                return msg['@rid'] === '#'+data;
            });
        });


    }

})();
