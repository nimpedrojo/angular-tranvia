'use strict';

angular.module('angularTranviaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/listado', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoCtrl'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MapaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
