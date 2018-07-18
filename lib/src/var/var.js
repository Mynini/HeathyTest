/** a central reference to the root jQuery(document) */
// var rootFre,

/** classType ->type paris*/
var classType = {},

    CT_string = classType.toString,
    CT_hasOwn = classType.hasOwnProperty,

    // A simple way to check for HTML strings
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;


export { classType, CT_string, CT_hasOwn, rquickExpr}