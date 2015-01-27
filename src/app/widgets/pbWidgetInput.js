(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('pbWidgetInput', pbWidgetInput);

  function pbWidgetInput() {
    var directive = {
      replace: true,
      scope: {
        'model': '=',
        'field': '@',
        'type': '@'
      },
      link: function(scope /*, element */) {
        scope.id = scope.field.toLowerCase().replace(/[^\da-z]/g, '_');
        scope.type = scope.type ? scope.type : 'text';
      },
      templateUrl: '/app/widgets/widget-input.html',
      restrict: 'EA'
    };

    return directive;
  }

})();
