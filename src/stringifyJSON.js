// problem set written by Hack Reactor. challenge files cloned on 3/31/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if(!obj && obj !== 0) return obj + '';

  switch(typeof obj){
  	case 'undefined' || 'function':
  		return;
	case 'string':
		return '"'+obj+'"';
	case 'object':
		if(Array.isArray(obj)) {
			return stringifyArray(obj);
		}
		else {
			return stringifyObject(obj);
		}
	default:
		return obj.toString(); 
  }

  function stringifyArray(arr, result) {
  	var result = result || [];
  	var copy = arr.slice();

  	if(!arr.length){
  		return '[' + result.join(',') + ']';
  	}
  	var value = copy.shift();
  	result.push(stringifyJSON(value));
  	return stringifyArray(copy, result);
  }

  function stringifyObject(obj) {
  	var result = [];
  	for(var key in obj) {
  		if(typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
  			result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  		}
  	}

  	return '{'+ result.join(',') + '}';
  }
};
