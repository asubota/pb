(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('pbWidgetAddressActions', pbWidgetAddressActions);

  function pbWidgetAddressActions() {
    var directive = {
      replace: true,
      template: '<a class="btn btn-danger btn-xs" ng-href="#/addressbook/delete/{{a.id}}">X</a>'
    };

    return directive;
  }

})();
