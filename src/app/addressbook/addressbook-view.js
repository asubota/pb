(function() {
  'use strict';

  angular
    .module('app.addressbook')
    .controller('AddressBookView', AddressBookView);

  /* @ngInject */
  function AddressBookView(dataservice, $routeParams) {
    /*jshint validthis: true */
    var vm = this;
    vm.title = 'AddressBookView';
    vm.id = '';
    vm.email = '';
    vm.firstName = '';
    vm.lastName = '';
    vm.lastName = '';
    vm.createdAt = '';
    vm.updatedAt = '';

    activate();

    ///////////////////////

    function activate() {
      return getAddress();
    }

    function getAddress() {
      var id = $routeParams.id;

      if (id) {
        dataservice.get(id).then(succeed);
      }

      function succeed(data) {
        ['id', 'email', 'firstName', 'lastName', 'createdAt', 'updatedAt'].forEach(function(key) {
          vm[key] = data[key];
        });
      }
    }
  }

})();
