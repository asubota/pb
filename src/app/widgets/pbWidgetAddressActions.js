(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('pbWidgetAddressActions', pbWidgetAddressActions);

  function pbWidgetAddressActions() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/widgets/widget-actions.html',
    };

    return directive;
  }

})();
