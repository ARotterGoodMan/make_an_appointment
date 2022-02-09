var plugin = requirePlugin("myPlugin")

Page({
  onLoad: function () {
  },

  data: {
    isShow: true,          // 默认不显示插件
    beginTime: '08:30',
    endTime: '22:00',
    timeGap: 90,
    themeColor: '#ffd00a',
    showOverdue: true,      // 默认显示过期时刻，false则隐藏已过期时刻
    calendarType: 'yytimes',
    days: 0,    //默认展示某天。正整数，0为当天     2.2.1
    time: '08:30',    //默认选中某天的某时刻,过期无效    2.2.1
    confirmClick:true //确认
  },

  // 点击显示插件
  btnClick: function () {
    this.setData({
      isShow: true,
    })
  },

  _yybindchange: function (e) {
    var data = e.detail
    console.log(data)
    // if(){}
    // wx.redirectTo({
    //   url: '../form/index',
    // })
    wx.cloud.callFunction({
      name:"tomail",
      data:{
        content:""
      },
      success(res){
        console.log("ok");
      },fail(res){
        console.log("no");
      }
    })

  }
  }

  _yybindhide: function () {
    console.log('隐藏')
     this.setData({
      isShow: true,
    })
  },
})