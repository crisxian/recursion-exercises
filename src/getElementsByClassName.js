// problem set written by Hack Reactor. challenge files cloned on 3/31/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var matched = [];

  searchList(document.body);

  function searchList(element) {
  	compareName(element);

  	var children = element.childNodes;
  	for(var child in children) {
  		searchList(children[child]);
  	}
  }

  function compareName(element) {
  	var elClassList = element.classList;
  	if(elClassList) {
		for(var name = 0; name < elClassList.length; name++) {
			if(elClassList[name] === className) {
  				matched.push(element);
			}
  		}
  	}
  }

  return matched;
};