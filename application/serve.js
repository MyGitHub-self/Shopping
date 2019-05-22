// 轮播图数据
const  classify = [
    {
      // 导航名称
      text: '全部商品',
      ify: "classify",
      // 禁用选项
      disabled: false,
      id: 0
    },
    {
      text: '白酒',
      ify: "whitespirs",
      disabled: false,
      id: 1
    },
    {
      text: '红酒',
      ify: "redspirs",
      disabled: false,
      id: 2
    },
    {
      text: "鸡尾酒",
      ify: "cooktail",
      disabled: false,
      id: 3
    },
    {
      text: "啤酒",
      ify: "cooktail",
      disabled: false,
      id: 4
    }
  ],
  mylist = [
    {
      text: "我的订单",
      icon: "todo-list-o",
      id: 0
    },
    {
      text: "我的代金卷",
      icon: "gold-coin-o",
      id: 1
    },
    {
      text: "关于我们",
      icon: "friends-o",
      id: 2
    },
    {
      text: "收货地址管理",
      icon: "location-o",
      id: 3
    },
    {
      text: "联系客服",
      icon: "service-o",
      id: 4
    },
    {
      text: "常见问题",
      icon: "question-o",
      id: 5
    }
  ]
module.exports = {
  classify: classify,
  mylist: mylist
}