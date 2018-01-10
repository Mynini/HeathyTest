var time = require("../../utils/util");
Page({
  data:{
     lists:[]
  },
  onLoad:function(){
    initDate(this);
  },
  onShow:function(){
    initDate(this);
  },
  edit:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:"../add/add?id="+id
    })
  },
  add:function(){
    wx.navigateTo({
      url: '../add/add'
    })
  },
  clear:function(){
    wx.clearStorage("txt");
    this.setData({
      lists:[]
    })
  }
});

function initDate(page){
  var arr=wx.getStorageSync('txt');
  if(arr.length){
     arr.forEach((item,i)=>{
       var t=new Date(Number(item.time))
       item.time=time.formatTime(t)
     })
     page.setData({
       lists:arr
     })
  }
}