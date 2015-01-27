(function() {
  'use strict';

  angular
    .module('app.addressbook')
    .controller('AddressBook', AddressBook);

  /* @ngInject */
  function AddressBook(dataservice) {
    /*jshint validthis: true */
    var vm = this;
    vm.addresses = [];
    vm.title = 'AddressBook';

    activate();

    ///////////////////////

    function activate() {
      return getAddresses();
    }

    function getAddresses() {
      return dataservice.query().then(function(data) {
        vm.addresses = data;
        return vm.addresses;
      });
    }
  }

})();
