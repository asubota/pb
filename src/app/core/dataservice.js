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
          query: query,
          clear: clear
      };

      return service;

      ///////////////////////

      function save(item) {
        var id = (new Date()).getTime();
        item.id = id;

        return $q.when(localStorageService.set(id, item));
      }

      function _get(id) {
        return localStorageService.get(id);
      }

      function get(id) {
        return $q.when(_get);
      }

      function remove(id) {
        return $q.when(localStorageService.remove(id));
      }

      function query() {
        var data = localStorageService.keys().map(_get);

        return $q.when(data);
      }

      function clear() {
        localStorageService.clearAll();

        return $q.when(query);
      }
    }
})();
