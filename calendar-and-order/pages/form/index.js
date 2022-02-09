Page({
  data: {
    formUI: [
      {
        "title": "学生姓名",
        "type": "input",
        "required": true
      }, {
        "title": "学校",
        "type": "input",
        "required": true,
      },
      {
        "title": "选课",
        "type": "checkbox",
        "required": true,
        "minCount": 3,
        "maxCount": 3,
        "range": ["地理", "生物", "物理", "化学", "政治", "历史"]
      }, {
        "title": "分数",
        "type": "input",
        "required": true,
      },
      {
        "title": "年级",
        "type": "radio",
        "required": true,
        "range": ["高一", "高二", "高三"]
      }, {
        "title": "家长姓名",
        "type": "input",
        "required": true,
      }, {
        "title": "家长电话",
        "type": "input",
        "required": true,
      }, {
        "title": "你还有其他想告诉我的吗？",
        "type": "textarea"
      }
    ],
    res: null,
    form: null
  },
  onLoad() {
  },

  submit() {
    const form = this.selectComponent('#form');
    const res = form.submit()
    console.log(res);
    if(res.error != ""){
      wx.showToast({
        title: res.error,
        icon: 'none',
        duration: 1500
      })
    }else{
      this.setData({
      res:res.value
    })
    }

  }

})