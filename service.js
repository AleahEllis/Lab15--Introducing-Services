angular.module('modName')
	.factory('inputService', function(){
		var madLibs =[]  //{}
	return{

	getInput: function (){ //return the noun to the display controller
		return madLibs;
		
      
    },
    setInput : function(newInput){ //this tells the service to save the noun as newInput, which represents
    	madLibs.push(newInput.noun);
    	madLibs.push(newInput.noun2);
    	madLibs.push(newInput.noun3);
    	madLibs.push(newInput.verb1);
    	madLibs.push(newInput.verb2);
    	madLibs.push(newInput.adj1);
    	madLibs.push(newInput.adj2);


    	// madLibs.noun = newInput.noun;
    	// madLibs.noun2 = newInput.noun2;
    	// madLibs.noun3 = newInput.noun3;
    	// madLibs.verb1 = newInput.verb1;
    	// madLibs.verb2 = newInput.verb2;
    	// madLibs.adj1 = newInput.adj1;
    	// madLibs.adj2 = newInput.adj2;

      // console.log(noun) checked to see if it worked
    },
    resetInput: function(){
    	input = {};
    }
  };

});

	// return {
 //        getData: function () {
 //            //You could also return specific attribute of the form data instead
 //            //of the entire data
 //            return formData;
 //        },
 //        setData: function (newFormData) {
 //            //You could also set specific attribute of the form data instead
 //            formData = newFormData
 //        },
 //        resetData: function () {
 //            //To be called when the data stored needs to be discarded
 //            formData = {};
 //        }
 //    };