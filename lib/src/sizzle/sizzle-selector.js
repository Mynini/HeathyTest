import Fre from "../core/init.js";
import Sizzle from '../sizzle/sizzle.js';

(function(Fre,Sizzle) {
    Fre.find = Sizzle;
    Fre.unique = Sizzle.uniqueSort;

})(Fre,Sizzle)

export default window.Fre;