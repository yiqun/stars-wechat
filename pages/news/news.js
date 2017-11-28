// pages/news/news.js
var dataBase = require("../../data/genre-data.js");
var app = getApp();
Page({
  data: {},
  onLoad: function (options) {
    this.setData({
      genreId: options.genreId
    });
    var genreId = '5';
    var dataUrl = dataBase.genreList[this.data.genreId].dataUrl;
    this.getNewsData(dataUrl);
  },
  typeTap (event) {
    var searchType = event.currentTarget.dataset.type;
    var navigateName = event.currentTarget.dataset.name;
    var dataUrl = dataBase.genreList[this.data.genreId].dataUrl + searchType;
    wx.setNavigationBarTitle({
      title: navigateName
    });
    this.setData({
      navigateName: navigateName
    });
    this.getNewsData(dataUrl);
  },
  titleTap (event) {
    var url = event.currentTarget.dataset.url;
    console.log(url);
  },
  getNewsData (dataUrl) {
    wx.request({
      url: dataUrl,
      header: {
        'Authorization': 'APPCODE ' + app.globalData.appCode,
        'content-type': 'json'
      },
      success: (data) => {
        var newsData = data.data.result.data;
        for (let i = 0; i < newsData.length; i++) {
          if (newsData[i].author_name.length > 5) {
            var title = newsData[i].author_name.substring(0, 5) + '...';
            newsData[i].author_name = title;
          }  
        }
        this.setData({
          newsData: newsData
        });
      }
    })
  }
})