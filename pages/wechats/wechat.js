// pages/wechats/wechat.js
var dataBase = require("../../data/genre-data.js");
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({
  data: {
    isEmpty: true,
    channelid: 6,
    newsPanelShow: true,
    detailPanelShow: false
  },
  onLoad: function (options) {
    var genreId = options.genreId;
    // var timer = setInterval(() => {
    var dataUrl = dataBase.genreList[genreId].dataUrl + '?channelid=' + this.data.channelid;
    this.getwechatData(dataUrl);
    //   this.data.channelid += 1;
    //   console.log(this.data.channelid);
    //   if (this.data.channelid >= 21) {
    //     clearInterval(timer);
    //   }
    // }, 10);
  },
  newsTap(event) {
    var id = event.currentTarget.dataset.id;
    this.setData({
      newsPanelShow: false,
      detailPanelShow: true,
      title: this.data.wechatData[id].title,
      content: WxParse.wxParse('content', 'html', this.data.wechatData[id].content, this, 20)
    });
    console.log(this.data.detailPanelShow);
  },
  backTap (event) {
    this.setData({
      newsPanelShow: true,
      detailPanelShow: false
    });
  },
  getwechatData(dataUrl) {
    console.log(dataUrl);
    wx.request({
      url: dataUrl,
      header: {
        "Authorization": 'APPCODE ' + app.globalData.appCode
      },
      success: (data) => {
        console.log(data);
        if (!data.data) {
          return;
        }
        var wechats = data.data.result.list;
        if (!this.data.isEmpty) {
          wechatData = this.data.wechatData.concat(wechats);
        } else {
          var wechatData = wechats;
          this.setData({
            isEmpty: false
          });
        }
        for (let i = 0; i < wechatData.length; i++) {
          wechatData[i].channel = data.data.result.channel
        }
        this.setData({
          wechatData: wechatData
        });
      },
      fail: function (data) {
        console.log(data);
      }
    });
  }
})