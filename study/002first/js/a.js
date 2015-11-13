define(function(require,exports,module){
	var b=require('./b');
	exports.doSomething=function(){
		alert("i am from a.js");
	};
	exports.doSomethingFromB=function(val){
		alert("i am from "+b.where+" "+val);
	};
})