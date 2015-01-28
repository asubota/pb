(function() {
  'use strict';

  angular.module('app.layout')
    .directive('pbConfirm', pbConfirm);

  /* @ngInject */
  function pbConfirm($modal) {
    var directive = {
      restrict: 'A',
      scope: {
        pbConfirm:'&',
        item:'='
      },
      link: linkFunction
    };

    function linkFunction(scope, element, attrs) {
      element.bind('click', function() {
        var message = attrs.pbConfirmMessage || 'Are you sure ?';

        var modalInstance = $modal.open({
          templateUrl: '/app/layout/modal.html',
          size: 'sm',
          controllerAs: 'vm',
          controller: function() {
            var vm = this;

            vm.message = message;

            vm.ok = function() {
              modalInstance.close();
            };

            vm.cancel = function() {
              modalInstance.dismiss('cancel');
            };
          }
        });

        modalInstance.result.then(function() {
          scope.pbConfirm();
        }, function() {

        });
      });
    }

    return directive;
  }

})();
