var app=getApp();
const http = function (url, clleback, spirsname){
 wx.request({
   url: app.httpurl+url,
   data:{},
   method: "GET",
   header: {
     'Content-Type': 'application/json' // 默认值
   },
   success:function(res){
     clleback(res.data, spirsname);
   }
 })
}
module.exports = {
  http: http,
}