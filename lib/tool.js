
function $f(selector,context){
    return new Free(selector,context);
}


function Free(selector,context){
	var elem
	this.elements=[];


	switch(typeof selector){
		case "string":
			switch(selector.charAt(0)){
				case "#":
				    elem=document.getElementById(selector.substring(1));
					this.elements.push(elem);

				case ".":
					elem=getClass()
				default:
				break;
			}
	}
}


function getClass(parent,sClass){
	var arr=[];
	var elements=parent.getElementsByClassName(sClass);

	if(elements){
		arr=elements
	}else{
		d
	}

	
}

()(window)