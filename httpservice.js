angular.module('modName')
.factory('dataPullService', function(){

	$http({
 	 	method: 'GET',
  		url: 'https://twlaas.herokuapp.com/'
	}).then(function successCallback(data) {//string | object
    	// this callback will be called asynchronously
   	 	// when the response is available
    	console.log(data)
  	}, function errorCallback(data) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  });

});