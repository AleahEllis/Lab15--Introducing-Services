var app = angular.module('modName', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',
    	{
    		controller: 'controllerone',
    		templateUrl: 'display.html'
    	})
    .when('/form',
      {
        controller: 'controllertwo',
        templateUrl: 'form.html'
      })

    .otherwise({ redirectTo: '/' });
});
