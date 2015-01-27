(function() {
  'use strict';


  angular
    .module('app.core')
    .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($q, localStorageService) {
      var service = {
          save: save,
          get: get,
          remove: remove,
          query: query
      };

      return service;

      ///////////////////////

      function save(item) {
        var id = (new Date()).getTime();
        return localStorageService.set(id, item);
      }

      function get(id) {
        return localStorageService.get(id);
      }

      function remove(id) {
        return localStorageService.remove(id);
      }

      function query() {
        var ids = localStorageService.keys();
        var data = [];

        console.log(ids);
        return $q.when(data);
      }
    }
})();
