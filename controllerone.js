var app = angular.module('modName');
	app.controller('routeCtrl',["$scope", "nounService", function($scope, nounService){

		$scope.save=function(){
			nounService.saveNoun($scope.noun); //noun1 should be blue error here
		};
	}]);