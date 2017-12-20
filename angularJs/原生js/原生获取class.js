function getClass(obj,attr){
    var aArray=[];//定义一个新的空数组  
    var i=0;  
    var aAll = document.getElementsByTagName('*');//获取obj对象下面所有的节点 
    var arr=[]
    for(i=0;i<aAll.length;i++){  
         var str=aAll[i].className;
         var arrs=str.split(" ")
         for(var j=0;j<arrs.length;j++){
         	if(arrs[j]== attr){//判断当前对象的class名称是不是符合传进来的参数  
	            aArray.push(arrs[j]);//如果符合则push到到aArray数组里边  
	        } 
         }
    }  

    return aArray;//最后return一下  
} 