

var fre=function(selector,context){
	return fre.prototype.init(selector);
}

fre.prototype={
	init:function(selector){
		if(selector=="a"){
			this.age=18;
			console.log(this)
		}

		return this
	},
	name:function(){
		return age;
	},
	age:20

}

// fre.prototype.init.prototype=fre.prototype;

fre("a").age;
fre("b").age;
fre("name").age;

console.log(fre("a").age)
console.log(fre("b").age)
console.log(fre("name").age)
console.log()

