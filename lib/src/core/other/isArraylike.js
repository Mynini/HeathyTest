
//判断是不是类数组
export default function isArraylike(obj) {
    var length = obj.length
    if ((obj.nodeType === 1 && length) || !obj.push) {
        return true;
    }

    // return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj);
    return false;
}



