import Fre, { isArraylike} from "../core/init.js";
import { classType, CT_string, CT_hasOwn, rquickExpr } from "../var/var.js";

export default Fre.event = {
	addEvent: function(elem,type,fn,capture){
		if(elem.addEventListener){
			elem.addEventListener(type,fn,capture)
		}else{
			elem.attachEvent("on"+type,fn)
		}
	}
};

// ,event,fn,capture