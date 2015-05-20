(function() {

    'use strict';

    angular.module('app.routes.home', [])
        .config(RouteConfigurator);


    RouteConfigurator.$inject = ['$stateProvider'];

    /**
     *
     */
    function RouteConfigurator($stateProvider) {

        //
        var state = {
            name: 'home',
            url: '/',
            resolve: {
                messages : ['MessageModel', function(MessageModel) {
                    return MessageModel.query();
                }]
            },
            views: {
                'main@': {
                    templateUrl     : '/modules/home/controllers/home.html',
                    controller      : 'HomeController',
                    controllerAs    : 'home'
                }
            }
        };

        //
        $stateProvider
            .state(state);

    }

})();
