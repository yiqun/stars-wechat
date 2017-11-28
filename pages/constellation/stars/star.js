// pages/constellation/stars/star.js
var util = require("../../../utils/util.js");
var dataBase = require("../../../data/genre-data.js");
var app = getApp();
Page({
  data: {
    luckyDate: 'day'
  },
  onLoad: function (options) {
    var starName = options.nikename;
    var id = options.id;
    this.setData({
      starName: dataBase.starList[id].name,
      chineseDate: dataBase.starList[id].chineseData,
      imgUrl: dataBase.starList[id].imgUrl,
      dataUrl: app.globalData.starUrl + starName
    });
    this.getLuckyData(this.data.luckyDate);
  },
  luckyTap(event) {
    var luckyDate = event.currentTarget.dataset.lucky;
    this.setData({
      luckyDate: luckyDate
    });
    switch (luckyDate) {
      case  'day': 
        wx.setNavigationBarTitle({
          title: '今日运势'
        });
        break;
      case 'tomorrow':
        wx.setNavigationBarTitle({
          title: '明日运势'
        });
        break;
      case 'week':
        wx.setNavigationBarTitle({
          title: '本周运势'
        });
        break; case 'month':
        wx.setNavigationBarTitle({
          title: '本月运势'
        });
        break;
    }
    this.getLuckyData(this.data.luckyDate);
  },
  getLuckyData(luckyDate) {
    wx.request({
      url: this.data.dataUrl,
      header: {
        'Authorization': 'APPCODE ' + app.globalData.appCode,
        'content-type': 'json'
      },
      success: (data) => {
        var starData = data.data.showapi_res_body[luckyDate];
        var starList = {
          'summary_star': util.convertToStarsArray(starData.summary_star),
          'love_star': util.convertToStarsArray(starData.love_star),
          'money_star': util.convertToStarsArray(starData.money_star),
          'work_star': util.convertToStarsArray(starData.work_star),
          'grxz': starData.grxz,
          'lucky_num': starData.lucky_num,
          'lucky_color': starData.lucky_color,
          'lucky_direction': starData.lucky_direction,
          'day_notice': starData.day_notice,
          'general_txt': starData.general_txt,
          'love_txt': starData.love_txt,
          'work_txt': starData.work_txt,
          'money_txt': starData.money_txt
        }
        this.setData({
          starList: starList
        });
      },
      fail: function (data) {
        console.log(data);
      }
    });
  }
})