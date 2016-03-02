var app = angular.module('modName');

app.controller("showNoun", function($scope, nounService){
  $scope.displayNoun = nounService.getNoun();
});