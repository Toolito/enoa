(function() {

    'use strict';

    /**
     *
     */
    angular
        .module('app', [

            // Angular modules

            // Third party modules
            'ui.router',
            'modelFactory',
            'btford.socket-io',

            // Core area
            'app.config',
            'app.common',

            // Features area
            'app.routes'

        ]);

})();
