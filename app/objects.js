exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  		name = obj.name;
  		greeting = obj.greeting;
  		return fn();
  },

  alterObjects: function(constructor, greeting) {
  	  	constructor.prototype.greeting = greeting;
		return constructor.greeting;
  },

  iterate: function(obj) {

  		$.each(obj,function(val, key){a[key] = val});
  		delete a.bip;
  		return a;
  		
  }
};
