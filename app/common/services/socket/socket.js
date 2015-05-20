(function() {
    'use strict';

    angular
        .module('app.common.services')
        .service('SocketService', SocketService);


    SocketService.$inject = ['socketFactory'];


    /**
     * Constructor
     */
    function SocketService(socketFactory) {


        return socketFactory({
            ioSocket: io.connect('http://localhost:3001')
        });


    }

})();
