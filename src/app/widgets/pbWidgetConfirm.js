(function() {
  'use strict';

  angular.module('app.widgets')
    .directive('pbConfirm', pbConfirm);

  /* @ngInject */
  function pbConfirm($modal) {
    var directive = {
      restrict: 'A',
      scope: {
        pbConfirm:'&',
      },
      link: linkFunction
    };

    function linkFunction(scope, element, attrs) {
      element.bind('click', function() {
        var message = attrs.pbConfirmMessage || 'Are you sure ?';

        var modalInstance = $modal.open({
          templateUrl: 'app/widgets/pb-widget-confirm.html',
          size: 'sm',
          controllerAs: 'vm',
          controller: function() {
            var vm = this;
            vm.message = message;
            vm.ok = ok;
            vm.cancel = cancel;

            function ok() {
              modalInstance.close();
            }

            function cancel() {
              modalInstance.dismiss('cancel');
            }
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
