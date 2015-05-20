(function() {

    'use strict';

    angular
        .module('app.config')
        .constant('_', _)
        .config(Configuration);


    Configuration.$inject = ['$urlRouterProvider', '$locationProvider', '$modelFactoryProvider'];

    /**
     *
     */
    function Configuration($urlRouterProvider, $locationProvider, $modelFactoryProvider) {

        // Remove hashtag navigation
        $locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('!');

        //Interceptors
        //$httpProvider.interceptors.push('HttpErrorInterceptor');

        //Modules providers configurations
        $modelFactoryProvider.defaultOptions.pk = '@rid';

        // Default route
        $urlRouterProvider.otherwise('/');
    }

})();
