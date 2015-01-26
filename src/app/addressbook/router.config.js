(function() {
  'use strict';

  angular.module('app.addressbook')
    .config(RouteConfig);

  /* @ngInject */
  function RouteConfig($routeProvider) {
    $routeProvider.
      when('/addressbook', {
        templateUrl: 'app/addressbook/addressbook.html',
        controller: 'AddressBook',
        controllerAs: 'vm'
      })
      .when('/addressbook/add', {
        templateUrl: 'app/addressbook/addressbook-form.html',
        controller: 'AddressBookEdit',
        controllerAs: 'vm'
      });
  }

})();
