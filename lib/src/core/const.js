

var baseVar = {
    /** a central reference to the root jQuery(document) */
    rootFre:"",

    /** classType ->type paris*/
    classType:{},

    CT_string:classType.toString,
    CT_hasOwn:classType.hasOwnProperty,

    //A simple way to check for HTML strings
    rquickExpr:/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
}

module.exports=basicvar;