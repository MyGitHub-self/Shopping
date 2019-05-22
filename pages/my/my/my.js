// 引入的静态数据
 var serve=require("../../../application/serve.js");
 var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    activeName: '1'
  },
  /**
   * 页面加载获取用户名头像及昵称
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
      var mylist=serve.mylist;
      this.setData({
        mylist:mylist
      })

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
//  判断点击列表加载对应数据 
  onChange(event){
    var ent = event.currentTarget.dataset.id;
    switch(ent){
      case 0:
        wx.navigateTo({
          url:"/pages/my/orderform/orderform"
        })
            break;
      case 1:
           break;
      case 2:
        wx.makePhoneCall({
          phoneNumber: '4008-123-123' 
        })
           break;
      case 3:
       wx.navigateTo({
         url: '/pages/my/site/site',
       })
            break;
      case 4:
            break;
      case 5:
          break;                              
          }
    this.setData({
      activeNames: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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

  }
})