import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var shopList=[
	{
		id:1,
		num:10
	},
	{
		id:2,
		num:20
	}
]

// 定义store
let store = new Vuex.Store({
	//状态
	state:{

		count:10,
		b:5,
		c:12,
		shopList

	},
	// 修改状态的唯一途径
	mutations:{
		updateCount(state,payload){  //用来改变状态
			state.b+=payload.add;
			state.count+=2;
			state.c+=2;
		}
	},
	getters:{
		totals(state){
			return state.shopList.reduce((n,item)=>n+item.num,0)  //0是初始值
		}
	},
	actions:{
		updataCountAction(store,parmas){
			// 异步操作放这里：
			setTimeout(()=>{
				store.commit("updateCount",parmas) 
			},1000)
		}
	}


});

export default store