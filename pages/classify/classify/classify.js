// 引用公共的js方法及属性静态数据
var app = getApp();
var util = require("../../../utils/util.js");
var server=require("../../../application/serve.js");
Page({
  data: {
    cartlogo: null,
    count:0,
    aaa:null
  },
  // 加载初始化数据
    onLoad: function () {
      var classify = server.classify;
      this.setData({
        classify:classify
      })
     this.onClickNav({detail:{index:0}});
  },
  // 点击列表触发函数
  onClickNav: function ({ detail={}}) {
    var idx = detail.index;
    var url=["allspirs","whitespirs","redspirs","jiweispirs","beer"]
    var spirs;
     spirs = util.http(url[idx], this.setclleback);
  //  判断调用类 
    // 添加判断类初始化选项  
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
    app.repeatingbtn="";
  },
  setclleback(e) {
    var spirs=e;
    this.setData({
      spirs: spirs,
    })
  },
  // 触发步进器执行函数
  stepper: function (event) {
    var spirs = this.data.spirs;
    var btn = event.currentTarget.dataset.id;
    var ent = event.detail;
    var classcard = app.classcard;
    var myent = "spirs[" + btn + "].conunt";
    var repeatingbtn = app.repeatingbtn;
    var reg = new RegExp(btn);
    var regtest = reg.test(repeatingbtn);
         app.repeatingbtn+=btn;
    if (!regtest){
      classcard.push(spirs[btn]);
        this.setData({
          appspirs: classcard
        })
      this.onShow(); 
    }
    if (true) {
      this.setData({
        [myent]: ent,
      })
    }
  },
  // 步进器增加的执行方法实现
 plus(){
  console.log("+1")
 },
   // 步进器减少的执行方法实现
  minus(){
    console.log("-1")
  }, 
  // 购物车数量的实时更新
  onShow(){
        var count=app.classcard.length;
        this.setData({
          count:count
        })
  },
  // 跳转至购物车页面
  hrefcart: function () {
    wx.switchTab({
      url: '/pages/cart/cart/cart',
    })
  },
});