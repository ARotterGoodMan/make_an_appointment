const app = getApp()

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
        "required": true
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
  },
  onLoad() {
  },

  submit() {
    const form = this.selectComponent('#form');
    const res = form.submit()
    console.log(res);
    if (res.error !== "") {
      wx.showToast({
        title: res.error,
        icon: 'none',
        duration: 1500
      })
    } else {
      const resValue = {
        "studentName": res.value.__field__0,
        "school": res.value.__field__1,
        "CourseSelection": res.value.__field__2,
        "fraction": res.value.__field__3,
        "grade": res.value.__field__4,
        "parentName": res.value.__field__5,
        'parentPhone': res.value.__field__6,
        'TellMe': res.value.__field__7
      }
      app.globalData.form = resValue
      this.setData({
        res: resValue
      })
      const
        studentName = app.globalData.form.studentName,
        clickDate = app.globalData.clickDate,
        form = app.globalData.form
      console.log(form)
      const db =app.globalData.db
        db.collection('makeAnAppointment').add({
          data:{
            clickDate: app.globalData.clickDate,
            studentName: form.studentName,
            school: form.school,
            CourseSelection: form.CourseSelection,
            fraction: form.fraction,
            grade: form.grade,
            parentName:form.parentName,
            parentPhone: form.parentPhone,
            TellMe: form.TellMe
          }


        })

      // wx.cloud.callFunction({
      //   name: "tomail",
      //   data: {
      //     content: studentName + "预约了您" + "时间为" + clickDate
      //   },
      //   success(res) {
      //     console.log("ok");
      //   }, fail(res) {
      //     console.log("no");
      //   }
      // })
    }

  }

})