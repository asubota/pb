(function() {
  'use strict';

  angular.module('app.core')
    .config(DataserviceConfig);

  /* @ngInject */
  function DataserviceConfig(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('pb');
  }

})();
