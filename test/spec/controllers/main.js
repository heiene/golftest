'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('golfbookApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no elements to start', function () {
    expect(scope.todo.length).toBe(0);
  });


 /* it('should have four elements to start', function () {
    expect(scope.todos.length).toBe(4);
  });*/
});
