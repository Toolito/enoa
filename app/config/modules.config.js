(function () {

    'use strict';

    angular.module('app.config', []);

    angular.module('app.common.controllers', []);
    angular.module('app.common.directives', []);
    angular.module('app.common.filters', []);
    angular.module('app.common.services', []);

    angular.module('app.models', []);

    angular.module('app.common', [
        'app.common.controllers',
        'app.common.directives',
        'app.common.filters',
        'app.common.services',

        'app.models'
    ]);

})();
