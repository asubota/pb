(function() {
  'use strict';

  angular.module('app.addressbook')
    .config(RouteConfig);

  /* @ngInject */
  function RouteConfig($routeProvider) {
    $routeProvider
      .when('/addressbook', {
        templateUrl: 'app/addressbook/addressbook.html',
        controller: 'AddressBook',
        controllerAs: 'vm'
      })
      .when('/addressbook/edit/:id?', {
        templateUrl: 'app/addressbook/addressbook-edit.html',
        controller: 'AddressBookEdit',
        controllerAs: 'vm'
      })
      .when('/addressbook/:id', {
        templateUrl: 'app/addressbook/addressbook-view.html',
        controller: 'AddressBookView',
        controllerAs: 'vm'
      })
      ;
  }

})();
