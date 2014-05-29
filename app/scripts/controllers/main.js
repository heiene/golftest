'use strict';

angular.module('golfbookApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var golfRoundsInStore = localStorageService.get('golfRounds');

    $scope.golfRounds = golfRoundsInStore && golfRoundsInStore.split('\n') || [];

    $scope.$watch('golfRounds', function () {
      localStorageService.add('golfRounds', $scope.golfRounds.join('\n'));
    }, true);
    fdfd
    $scope.addGolfRound = function (id) {
    	$scope.golfRounds.push($scope.golfRound);
    	$scope.golfRound = '';
    	console.log(id);
    };
    $scope.removeGolfRound = function (index) {
		$scope.golfRounds.splice(index, 1);
 		console.log(index);
 		};
  });
