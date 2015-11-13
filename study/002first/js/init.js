define(function(require,exports,module){
	var a=require('./a');
	a.doSomething();
	alert("i am from init.js");
	a.doSomethingFromB("hehe");
})
