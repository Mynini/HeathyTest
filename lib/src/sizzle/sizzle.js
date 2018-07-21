// Sizzle:
(function(window, undefined) {

    //Handle: $(".div") $("div")  $(".div||div [name=value]")
    function Sizzle(selector, context) {

        context ? context = context : context = document;
        var
            // match $F(".div")
            claExpr = /^(\.[a-zA-Z]+[0-9]*)\w*$/,

            // match $F(".div")
            idExpr= /^(#[A-Za-z]*\w)/,

            // match $F("div") 
            tagClaExpr = /^([a-z]+)([1-9])*$/,

            // math $F(".div||div [name=value]")
            attrExpr = /^(\.[a-z]+[0-9]*\w*|[a-z]+[1-9]?)\s*\[\s*(([a-zA-z]+\w*)\s*=\s*(\w+))?\s*\]|\s$/,

            //use to store tag that match objArr and 
            returnArr = [],
            arr = [];


        //Handle: $(".div")
        if(idExpr.test(selector)){
            var idelem=document.getElementById(selector.slice(1))
            returnArr.push(idelem);
        }
        else if (claExpr.test(selector)) {

            returnArr = Sizzle.getClass(selector.slice(1), context);

            //Handle: $("div")
        } else if (tagClaExpr.test(selector)) {

            returnArr = context.getElementsByTagName(selector);

            //Handle: $(".div||div [name=value]")
        } else if (attrExpr.test(selector)) {
            var elem = attrExpr.exec(selector),
                arr;

            //判断前面的class选择还是标签选择  
            //handle: 前面选择是标签情况 $F("div[name=]") 
            if (elem[1].charAt(1) != ".") {

                arr = context.getElementsByTagName(elem[1]);

                // handle:前面选择是class情况 $F(".div[name=]")   
            } else {
                arr = Sizzle.getClass(elem[1].charAt(1), context);
            }

            // 如果  $(".div||div [name=value]") 没写完整 只写了 类似这样的情况$(".div||div [")  返回$F(".div") || $F("div")
            if (!elem[2]) {
                returnArr = [];

                //handle: 最终处理$(".div||div [name=value]")
            } else {

                var
                    name = elem[3],
                    value = elem[4];

                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].getAttribute(name) && arr[i].getAttribute(name) == value) {
                        returnArr.push(arr[i])
                    }

                }

                if (returnArr.length == 0) {
                    returnArr = [];
                }

            }
        }
        //ie8的时候 returnArr 展开里面的项是undefined  所以
        Fre.each(returnArr, function(i, item) {
            arr.push(item);
        })

        return arr
    }

    //fn getClassByClassName(className) ,return a selctor arr
    Sizzle.getClass = function(className, context) {

        var objArr = context.getElementsByClassName && context.getElementsByClassName(className);

        //if is standard brower user getElementsByClassName 
        if (objArr) {
            return objArr;
            //if is non standard brower use create method
        } else {

            objArr = [];
            objLikeArr = context.getElementsByTagName("*");

            Fre.each(objLikeArr, function(i, item) {

                if (item.className && (item.className).length > 0) {

                    var classArr = item.className.split(" ");

                    Fre.each(classArr, function(j, jitem) {

                        if (jitem == className) {
                            objArr.push(item);
                        }
                    })
                }
            })

            return objArr;
        }
    }

    /**
     * Document sorting and removing duplicates
     * @Author   liyulan
     * @DateTime 2018-07-12T11:24:38+0800
     * @param    {[type]}                 results [description]
     * @return   {[type]}                         [description]
     */
    Sizzle.uniqueSort = function(results) {

        var elem,
            duplicates = [],
            j = 0,
            i = 0;

    }

    window.Sizzle = Sizzle;

})(window)

export default window.Sizzle;