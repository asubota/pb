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
          controller: ModalInstance
        });

        modalInstance.result.then(function() {
          scope.pbConfirm();
        }, function() {

        });
      });
    }

    function ModalInstance($scope, $modalInstance) {
      $scope.ok = function() {
        console.log($scope);

        $modalInstance.close();
      };

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };
    }

    return directive;
  }

})();
