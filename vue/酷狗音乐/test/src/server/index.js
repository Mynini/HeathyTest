import axios from "axios"
import store from "@/store"

let oneleve=aixos.create({
	responseType:"json",
	transformRequest(data){

		console.log(data);
	},
	transformResponse(data){
		console.log(data);
		let o={}
		if(data.list){
			o.data = data.list;
			o.origin = "singer";
		}else if(data.banner){
			o.data = data.data;
			o.origin = "new-song";
			o.banner= data.banner;
		}else if(data.rank){
			o.data = data.rank.list;
		}

	}
})