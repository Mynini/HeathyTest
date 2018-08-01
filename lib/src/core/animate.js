import Fre,{isArraylike} from "../core/init.js";
import  { classType, CT_string, CT_hasOwn, rquickExpr } from "../var/var.js";

// property:{height:100px;width:100px;}
// options:{speed, easing, callback}
export default function Animate(elem,property,options) {
	var optionsDefaults={
		speed:10,
		easing:linear,
		callback:fn
	}
	for(var i in property){
		// var currentW = elem.getcurent
	}
}