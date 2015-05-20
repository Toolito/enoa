(function() {

    'use strict';

    angular
        .module('app.models')
        .factory('MessageModel', MessageModel);


    MessageModel.$inject = ['$modelFactory'];


    /**
     * Model Factory for Message
     */
    function MessageModel($modelFactory) {

        // see https://github.com/Swimlane/angular-model-factory/wiki/API
        // for documentation
        var model = $modelFactory('http://localhost:3001/messages');

        return model;

    }

})();
