(function() {

    'use strict';

    angular
        .module('app.common.controllers')
        .controller('MainController', MainController);


    MainController.$inject = ['SidebarService'];

    /**
     * Common controller for all routes
     */
    function MainController(SidebarService) {

        var self = this;

        //
        _.extend(self, {
            sidebar         : SidebarService
        });


    }


})();
