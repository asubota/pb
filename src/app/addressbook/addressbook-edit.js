(function() {
  'use strict';

  angular
    .module('app.addressbook')
    .controller('AddressBookEdit', AddressBookEdit);

  /* @ngInject */
  function AddressBookEdit(dataservice, $location) {
    /*jshint validthis: true */
    var vm = this;
    vm.title = 'AddressBookEdit';

    vm.email = '';
    vm.firstName = '';
    vm.lastName = '';
    vm.save = save;

    activate();

    ///////////////////////

    function activate() {

    }

    function save() {
      var item = {
        email: vm.email,
        firstName: vm.firstName,
        lastName: vm.lastName
      };

      dataservice.save(item).then(function() {
        $location.path('/addressbook');
      });
    }
  }

})();
