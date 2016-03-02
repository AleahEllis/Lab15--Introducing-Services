angular.module('modName')

.controller("displaycontr", function($scope, inputService){
  			$scope.specifyIndex= inputService.getInput();//no arguments 		
  // console.log("yeah")
  			
});

// var app = angular.module('modName');
// 	app.controller('routeCtrl',["$scope", "nounService", function($scope, nounService){

// 		$scope.save=function(){
// 			nounService.saveNoun($scope.noun); //noun1 should be blue error here
// 		};
// 	}]);