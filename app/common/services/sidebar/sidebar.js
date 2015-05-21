(function() {
    'use strict';

    angular
        .module('app.common.services')
        .service('SidebarService', SidebarService);


    SidebarService.$inject = [];


    /**
     * Constructor
     */
    function SidebarService() {

        var self = this;


        /**
         *
         */
        var visible = true;



        //
        _.extend(self, {

            // Public Attributes
            visible             : visible,

            // Public Methods
            toggle              : toggle,
            isShown             : isShown

        });



        function toggle() {
            self.visible = !self.visible;
        }

        function isShown() {
            return self.visible;
        }

    }

})();
