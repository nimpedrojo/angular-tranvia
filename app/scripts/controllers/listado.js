'use strict';

angular.module('angularTranviaApp')
  .controller('ListadoCtrl', function ($scope, TranviasService) {
        $scope.tranvias = TranviasService.getTranvias();
      });


