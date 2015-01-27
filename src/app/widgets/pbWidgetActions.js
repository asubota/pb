(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('pbWidgetAddressActions', pbWidgetAddressActions);

  function pbWidgetAddressActions() {
    var directive = {
      replace: true,
      template: '<a class="btn btn-danger btn-xs" ng-click="vm.remove(a.id, $index)">X</a>'
    };

    return directive;
  }

})();
