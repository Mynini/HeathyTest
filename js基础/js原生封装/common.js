
window.onload=function(){
    var ul=document.getElementById("box")


	getClass(ul,"li","li4");
    addClass(ul,"box");

    ul.onclick=function(){
       removeClass(ul,"li","box2");
    }


}

// removeClass   针对一个elem
function removeClass(obj, className) {
    if (obj.className != '') {
        var arrClassName = obj.className.split(' ');
        var _index = arrIndexOf(arrClassName, className);
        if ( _index != -1 ) {
            arrClassName.splice(_index, 1);
            obj.className = arrClassName.join(' ');
        }
    }
    
}


// removeClass  删除多个elem
// 获取集合 -- 循环判断有没这class 如果有删除  没有啥也不干
function removeClass(parent,elem,sClass){
    var classArr=parent.getElementsByTagName(elem);

    if(classArr.length){
        for(var i=0;i<classArr.length;i++){
            var sArr=classArr[i].className.split(" ");
             
            var _index = arrIndexOf(sArr, sClass);
            if ( _index != -1 ) {
                sArr.splice(_index, 1);
                classArr[i].className = sArr.join(' ');
            }

           
        }
    }
    
}

function arrIndexOf(arr, v) {
        for (var i=0; i<arr.length; i++) {
            if (arr[i] == v) {
                return i;
            }
        }
        return -1;
    }

//获取class
function getClass(parent,tagName,sClass){
	var aEls=parent.getElementsByTagName(tagName);
     
    var classArr=[]; 
    for(var i=0;i<aEls.length;i++){
         var arrClassName=aEls[i].className.split(" ");

         for(var j=0;j<arrClassName.length;j++){

         	if(arrClassName[j]==sClass){
                classArr.push(arrClassName[j]);
            }
         }
    }
    return classArr
}


// addClass
function addClass(elem,sClass){
    var arr=[];    // 存elem 所有class
    var btn=true;  //class不存在就为true


    if(elem.className.length>0){
        var classArr=elem.className.split(" ");

        for(var i=0;i<classArr.length;i++){
            if(classArr[i] == sClass){
                btn=false;
                break;
            }else{
                arr.push(classArr[i])
            }
        }

        if(btn){
            arr.push(sClass)
            var b=arr.join(" ")
            elem.className=b;
        }
    }else{
        elem.className=sClass;
    }
}


