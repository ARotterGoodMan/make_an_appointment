const plugin = requirePlugin("myPlugin")
const app = getApp()

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
  },

  // 点击显示插件
  btnClick: function () {
    this.setData({
      isShow: true,
    })
  },

  _yybindchange: function (e) {
    const data = e.detail
    console.log(data)
    app.globalData.clickDate=data.date
    console.log(data.date)
    if (data.time === "") {
      wx.showToast({
        title: "你还没有选择预约时间",
        icon: 'none',
        duration: 1500
      })
      this.setData({
        isShow: true,
      })
    } else {
      wx.redirectTo({
        url: '../form/index',
      })
    }



  }

  ,
  _yybindhide: function () {
    console.log('隐藏')
    // this.setData({
    //   isShow: true,
    // })
  },
})