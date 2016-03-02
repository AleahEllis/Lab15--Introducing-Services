angular.module('modName')
	.controller("formcontr",function($scope, inputService){
  		$scope.save = function(){
  			inputService.setInput($scope.input)
  		};
  		
	});

// .controller("formcontr", function($scope){
//   console.log("yeah")
// });