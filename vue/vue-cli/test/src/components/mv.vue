<template>
  <div class="mv" style="background:red;width:300px;height:300px;">
  	<p style="display:block;width:50px;height:50px;background:yellow;">{{$store.state.b}}</p>
  	<p style="display:block;width:50px;height:50px;">{{n}}</p>     
  	<p style="display:block;width:50px;height:50px;background:green">{{changeC}}</p>  
  	<input type="button" value="改变vuex中的状态" @click="change()" />
    <input type="button" value="异步改变vuex中的状态" @click="changeYiBu()" />
  </div>
</template>

<script>
export default {
  name:'HelloWorld',
  data () {
    return {
    	n:this.$store.state.count
    }
  },
  methods:{
  	change(){
  		//改变vuex中状态
  		this.$store.commit("updateCount",{
  			add:10
  		})
  	},
    changeYiBu(){

      //异步改变状态
      this.$store.dispatch("updataCountAction",{
        add:100
      })
    }
  },
  computed:{
  	changeC(){
  		return this.$store.state.b
  	}
  }
}
</script>


