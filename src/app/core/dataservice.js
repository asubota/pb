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
        var date = new Date();

        if (!item.id) {
          item.id = date.getTime();
        }

        if (!item.createdAt) {
          item.createdAt = date.getTime();
        }

        item.updatedAt = date.getTime();

        return $q.when(localStorageService.set(item.id, item));
      }

      function _get(id) {
        return localStorageService.get(id);
      }

      function get(id) {
        return $q.when(_get(id));
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
