(function() {
  'use strict';

  angular
    .module('app.addressbook')
    .controller('AddressBook', AddressBook);

  /* @ngInject */
  function AddressBook() {
    /*jshint validthis: true */
    var vm = this;
    vm.addresses = [];
    vm.title = 'AddressBook';

    activate();
    ///////////////////////

    function activate() {
      vm.addresses.push({
        id: 1,
        firstName: 'John',
        lastName: 'Papa',
        email: 'jpapa@gmail.com'
      });
    }
  }

})();
