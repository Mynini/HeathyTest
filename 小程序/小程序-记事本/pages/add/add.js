
Page({
  data:{},
  onLoad:function(e){
    var id=e.id;
    if(id){
      getDate(id,this);
    }else{
      this.setData({
        id:Date.now()
      });
    }
     
  },
  change(e) {
    var val = e.detail.value;
    console.log(val);
    this.setData({
      content: val
    })
  },
  cancel:function(){
    wx.navigateBack()
  },
  sure:function(){
    var re = /^\s*$/g;
    if (!this.data.content || re.test(this.data.content)) {
      return;
    } 
    this.setData({
      time: Date.now()
    })
    setVlue(this);
    wx.navigateBack();

  }
})

function getDate(id,page){  
  var arr=wx.getStorageSync("txt");
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id==id){
        page.setData({
          id:item.id,
          content:item.content
        })
      }
    })
  }
}

//两种情况增加和改值
function setVlue(page){
  var arr=wx.getStorageSync("txt"); 
  var data=[],btn=true;  //如果是增加btn=true
  
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id==page.data.id){
        btn=false;
        item.time=Date.now();
        item.content=page.data.content
      }
      data.push(item);
    })
  }

  if (btn) {
    data.push(page.data);
  }
  wx.setStorageSync("txt", data)
}