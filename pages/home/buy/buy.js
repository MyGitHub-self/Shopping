// pages/buy/buy.js
const app=new getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
// 遍历初始化数据
  onLoad: function (options){
    var num= 0;
    var content = JSON.parse(options.content);
     content.forEach((item,index)=>{
       num+=content[index].price * content[index].conunt
     })
     this.setData({
        num:num,
        spirs:content
     })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 触发步进器是调用
  stepper: function (event) {
    var ent = event.detail;
    var btn = event.currentTarget.dataset.id;
    var myent = "spirs[" + btn + "].conunt";
 if (true) {
      this.setData( {
         [myent]: ent,
      })
     }
  },
//点击步进器➕的执行方法  
  plus(event){
    var spirs = this.data.spirs;
    var btn = event.currentTarget.dataset.id;
    var num = this.data.num;
        num+=spirs[btn].price;
     this.setData({
        num:num
     })   
   },
 //点击步进器——的执行方法
  minus(event){
   var spirs = this.data.spirs;
   var btn = event.currentTarget.dataset.id;
   var num = this.data.num;
   num -= spirs[btn].price;
   this.setData({
     num: num
   }) 
 },  
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },
  gobuy(){
    var data=new Date();
    wx.requestPayment(
      {
        'timeStamp':'',
        'nonceStr': '',
        'package':'',
        'signType': 'MD5',
        'paySign': '',
        'success': function (res) { 
          console.log("支付成功")
        },
        'fail': function (res) {
          console.log("支付失败")
         },
        'complete': function (res) { 
          wx.showModal({
            title: '正在支付中',
            content: '确定支付or取消支付',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      })
  }
})