const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data:{
     cardshow:true,
     pricenum:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
  },
  //跳转到首页的实现
  herfindex:function(){
    wx.switchTab({
            url: '/pages/home/index/index',
          })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
//  页面显示的实现操作及方法 
  onShow: function (){
    var num=null;
    var classcard = app.classcard
    if (classcard.length>0){
      for (var idx in classcard){
            var index=classcard[idx];
            index.id=idx;
            num += index.price * index.conunt ;
      }
      this.setData({
        classcard: classcard,
        pricenum:num,
        cardshow:false
      })
     }else{
       this.setData({
         cardshow: true
       })
     }
  },
//  点击立即购买的实现方法 
  onSubmit:function(){
     var card=this.data.classcard;
     var jsoncard=JSON.stringify(card);
    wx.navigateTo({
      url: '/pages/home/buy/buy?content='+jsoncard,
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
//  删除商品的实现方法 
remove:function(e){
  var remove = e.currentTarget.dataset.id;
  var classcard=app.classcard;
  var repeatingbtn=app.repeatingbtn;
  var charAt=repeatingbtn.charAt(remove);
  var charAr=repeatingbtn.split(""+charAt).join("");
  app.repeatingbtn=charAr;
 classcard.splice(remove,1);
  this.onShow();
},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})