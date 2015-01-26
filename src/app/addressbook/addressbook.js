(function() {
  'use strict';

  angular
    .module('app.addressbook')
    .controller('AddressBook', AddressBook);

  /* @ngInject */
  function AddressBook() {
    /*jshint validthis: true */
    var vm = this;
    vm.avengers = [];
    vm.title = 'AddressBook';

    activate();
    ///////////////////////

    function activate() {

    }
  }

})();
