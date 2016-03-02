var app = angular.module('modName');

app.factory('nounService', function(){
  var userNoun = "";

  return {
    saveNoun: function (noun){
      userInput = noun;
    },
    getNoun : function(){
      return noun;
    }
  };

});