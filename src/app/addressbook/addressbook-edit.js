(function() {
  'use strict';

  angular
    .module('app.addressbook')
    .controller('AddressBookEdit', AddressBookEdit);

  /* @ngInject */
  function AddressBookEdit() {
    /*jshint validthis: true */
    var vm = this;
    vm.title = 'AddressBookEdit';

    vm.email = 'asubota@gmail.com';
    vm.firstName = 'Aleksandr';
    vm.lastName = 'Subota';

    vm.save = save;

    activate();
    ///////////////////////

    function activate() {

    }

    function save() {

    }
  }

})();
