(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('pbWidgetAddressView', pbWidgetAddressView);

  function pbWidgetAddressView() {
    var directive = {
      restrict: 'EA',
      replace: true,
      template: [
        '<li class="list-group-item" ng-hide="!value">',
          '<span class="pb-view-address-title">{{title}}:</span> {{value}}',
        '</li>'].join(''),
      scope: {
        'title': '@',
        'value': '='
      },
    };

    return directive;
  }

})();
