angular.module('modName', ['ngRoute']) //dedclaring var=app is dated this a is the chaining version
//two ways for create modules, get and set. we are creating so we use the creating syntax ("",[dependency])
  .config(function($routeProvider) { //config takes only one argument and it must be a function,
    $routeProvider
      .when('/',
        {
          controller:'homecontr',
          templateUrl:'home.html'

        })
      .when('/form',//first argument is a string, shows up at the end of the url address
    	 {//second argument is an object
    		  controller: 'formcontr',
    		  templateUrl: 'form.html'
    	 })
      .when('/display',
        {
          controller: 'displaycontr',
          templateUrl: 'display.html'
        })
      .when('/heroData',
        {
          controller: 'displayhero',
          templateUrl: 'hero.html'
        })

    .otherwise({ redirectTo: '/' });
});
