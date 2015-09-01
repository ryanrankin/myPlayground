// FizzBuzz
var FizzBuzz = (function() {
  'use strict';

  var results = [];

  var _print = function(){
	  var index = 0, total = results.length;
		while (index < total){
		  console.log(results[index]);
			index=index+1;
		}
	};

	var _doFizzBuzz = function(count, callback) {
    for (var i = 0; i <= count; i++) {
      if (i % 3 === 0 && i % 5 === 0) results.push("FizzBuzz");
      else if (i % 3 === 0) results.push("Fizz");
      else if (i % 5 === 0) results.push("Buzz");
      else results.push(i);
    }
		callback();
  };

  var FizzBuzz = {
    init: function(count) {
			if(!count || isNaN(count)) {
				var count = Math.floor(Math.random()*100);
				console.log('You failed to supply a number so I am picking ' + count + '. ' + 'We will iterate ' + count + ' times.');
			  _doFizzBuzz(count, _print);
			}	else _doFizzBuzz(count, _print);
    }
  };

  return FizzBuzz;
}());
