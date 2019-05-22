// 引入公共的js方法及属性
var util = require("../../../utils/util.js");
var app=new getApp();
Page({
  data: {
  //  轮播图组件效果控制 
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
  },
  //加载初始化值
  onLoad: function (){
    this.setsprie();
  },
  //添加初始化值
  setsprie:function(){
    var spirsname=["swiper", "whitespirs", "redspirs", "jiweispirs"];
      for(var idx in spirsname){
        var url = spirsname[idx];
        util.http(url, this.setclleback,spirsname[idx]);
      } 
  },
//  请求数据的回调函数 
  setclleback(e,name){
    var key=[]
       key[name]={
         temp:e
       }
 this.setData(
   key
 )
  },
//  设置跳转值
  buyer:function(event){
    var buyer =JSON.stringify(event.currentTarget.dataset.id)
      wx.navigateTo({
        url: '/pages/home/buyer/buyer?content='+buyer,
      })
  },
})