(function() {

    'use strict';

    angular
        .module('app.common.controllers')
        .controller('MainController', MainController);


    MainController.$inject = [];

    /**
     * Common controller for all routes
     */
    function MainController() {

        var self = this;

        //
        _.extend(self, {
        });


    }


})();
