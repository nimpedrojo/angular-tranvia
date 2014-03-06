'use strict';

angular.module('angularTranviaApp')
    .directive('tranvia', function () {
        return {
            templateUrl: 'views/partials/tranvia.html',
            restrict: 'E',
            scope: {
                'tranvia': '=ngModel',
                'verTodo': '&'
              },
              controller : function($scope) {
                $scope.verTodo = false;
              }
            };
      });