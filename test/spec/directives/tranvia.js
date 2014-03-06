'use strict';

describe('Directive: tranvia', function () {

  // load the directive's module
  beforeEach(module('angularTranviaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tranvia></tranvia>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tranvia directive');
  }));
});
