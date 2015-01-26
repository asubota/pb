(function() {
  'use strict';

  angular.module('app.core')
    .config(RouteConfig);

  /* @ngInject */
  function RouteConfig($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/addressbook'
      });
  }

})();
