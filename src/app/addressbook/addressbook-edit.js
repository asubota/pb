(function() {
  'use strict';

  angular
    .module('app.addressbook')
    .controller('AddressBookEdit', AddressBookEdit);

  /* @ngInject */
  function AddressBookEdit(dataservice, $location, $routeParams) {
    /*jshint validthis: true */
    var vm = this;
    vm.title = 'AddressBookEdit';

    vm.id = '';
    vm.email = '';
    vm.firstName = '';
    vm.lastName = '';
    vm.createdAt = '';
    vm.save = save;

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
        ['id', 'email', 'firstName', 'lastName', 'createdAt'].forEach(function(key) {
          vm[key] = data[key];
        });
      }
    }

    function save() {
      var item = {
        id: vm.id,
        email: vm.email,
        firstName: vm.firstName,
        lastName: vm.lastName,
        createdAt: vm.createdAt
      };

      dataservice.save(item).then(succeed);

      function succeed() {
        $location.path('/addressbook');
      }
    }
  }

})();
