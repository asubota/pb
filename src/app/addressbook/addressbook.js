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
    vm.remove = remove;
    vm.clear = clear;
    vm.search = '';
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

    function remove(id, $index) {
      return dataservice.remove(id).then(function() {
        vm.addresses.splice($index, 1);
      });
    }

    function clear() {
      return dataservice.clear().then(function(data) {
        vm.addresses = data;
      });
    }
  }

})();
