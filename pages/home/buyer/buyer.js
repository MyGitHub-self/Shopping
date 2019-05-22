// pages/buyer/buyer.js
var app = getApp();
Page({
  data: {
    countnum: null,
    addcardshow:true
  },

  /**
   * 页面加载绑定数据
   */ 
  onLoad(options) {
    var spirs=[]
    var message = JSON.parse(options.content);
    spirs.push(message);
    this.setData({
      spirs:spirs
    })
  },
//点击立即购买跳转方法的实现  
  onchange() {
    var message = this.data.spirs
    var buymessage = JSON.stringify(message);
    wx.navigateTo({
      url: "/pages/home/buy/buy?content=" + buymessage,
    })
  },
// 点击添加购物车方法的实现  
  onadd() {
    var countnum = this.data.countnum;
    var messge = this.data.spirs[0];
    if(this.data.addcardshow){
      countnum++;
    app.classcard.push(messge)
    this.setData({
      countnum: countnum,
      addcardshow:false
    })
    } 
  },
//  跳转至购物车的方法实现 
  onhref() {
    wx.switchTab({
      url: '/pages/cart/cart/cart',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
//  点击栏目的方法实现 
  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'todo-list-o'
    });
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

  }
})