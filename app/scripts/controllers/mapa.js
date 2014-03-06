'use strict';

angular.module('angularTranviaApp')
  .controller('MapaCtrl', function ($scope) {
        $scope.map = {
            center: {
                latitude: 41.64766841940498,
                longitude: -0.8854826846252308
              },
              zoom: 15
            };
        $scope.myMarkers = [
            {
                latitude:41.64766841940498,
                longitude:-0.8854826846252308
              }
            ];
        $scope.markers = $scope.myMarkers;
      });
