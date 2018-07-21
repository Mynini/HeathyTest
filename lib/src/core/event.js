import Fre, { isArraylike} from "../core/init.js";
import { classType, CT_string, CT_hasOwn, rquickExpr } from "../var/var.js";

export default Fre.event = {
	addEvent: function(elem,type,fn,capture){
		!capture?capture=false:capture=true;

		if(elem.addEventListener){
			elem.addEventListener(type,fn,capture)
		}else if(elem.attachEvent){
			elem.attachEvent("on"+type,fn)
		}
	},
	removeEvent: function(elem,type,fn,capture){
		!capture?capture=false:capture=true;

		if(elem.addEventListener){
			elem.removeEventListener(type,fn,capture)
		}else if(elem.detachEvent){
			elem.detachEvent("on"+type,fn)
		}
	}
};

// ,event,fn,capture