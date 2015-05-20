(function() {

    'use strict';

    angular
        .module('app.config')
        .run(Bootstrap);



    Bootstrap.$inject = ['$state', '$rootScope'];

    /**
     * Bootstrap executed once at start
     */
    function Bootstrap($state, $rootScope) {

        $rootScope.$state = $state;

    }

})();
