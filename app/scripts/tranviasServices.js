'use strict';

angular.module('angularTranviaApp').service('TranviasService', function($resource) {
    var tranvias = $resource('http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/tranvia.json?start=0&rows=100&distance=500').get();

    return {
        'getTranvias' : function() {
            return tranvias;
          }
      };

  });
