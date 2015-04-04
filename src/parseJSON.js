// problem set written by Hack Reactor. challenge files cloned on 3/31/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian

// this is what you would do if you were one to do things the easy way:
var parseJSON = JSON.parse; // fix this

// but you're not, so you'll write it from scratch:

// douglas crockford implementation at https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
/*var parseJSON = function (json) {
  // regex group matches
  var quot = /^['"]([\s\S])*['"]/
  var obj = /^\{([\s\S]*)\}/
  var arr = /^\[([\s\S]*)\]/
  
  var copy = json.trim();

  // is true, false, null
  if(quot.test(copy)) {
  	  switch(copy.slice(1,-1)){
  	  	case 'true': return true;
  	  	case 'false': return false;
  	  	case 'null': return null;
  	  	default: return;
  	  }
  }

  // is array
  if(arr.test(copy)) return new Array(parseJSON(copy.slice(1,-1)));

  // is object
  if(obj.test(copy)) var elements = copy.slice(1,-1);

  if(obj.test(/,/)) elements = elements.split(',');

  var result = {};
  for(var i in elements){
  	var el = elements[i]
  	el = el.trim().split(':');
  	if(el && el.length === 2) {
  		if(quot.test(el[0])) el[0] = el[0].slice(1,-1);
  		if(quot.test(el[1])) el[1] = el[1].slice(1,-1);
  		result[el[0]] = parseJSON(el[1]);
  	}

  }


  return result;

};*/

/* NOTES -

check for:

{ new object
} close object
" string
: key/value seperator
, element seperator

*/