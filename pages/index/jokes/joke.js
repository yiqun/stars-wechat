// pages/jokes/joke.js
var genreData = require("../../../data/genre-data.js");
Page({
  data: {
    jokesList: [],
    times: '',
    page: 1,
    isEmpty: true
  },
  onLoad: function (options) {
    this.setData({
      genreId: options.genreId
    });
    this.data.times = Date.parse(new Date()) / 1000;
    console.log(this.data.times);
    var requestUrl = genreData.genreList[this.data.genreId].dataUrl + '&page=' + this.data.page + '&pagesize=20&time=' + this.data.times;
    this.getJokeData(requestUrl, this.data.isEmpty);
  },
  getJokeData(dataUrl, isEmpty) {
    wx.request({
      url: dataUrl,
      success: (data) => {
        var jokes = data.data.result.data;
        if (!isEmpty) {
          var jokesList = this.data.jokesList.concat(jokes);
        } else {
          jokesList = jokes;
          this.data.isEmpty = false;
        }
        this.setData({
          jokesList: jokesList
        });
      }
    })
  },
  onPullDownRefresh(event) {
    var requestUrl = genreData.genreList[this.data.genreId].dataUrl + '&page=1&pagesize=20&time=' + this.data.times;
    this.getJokeData(requestUrl, this.data.isEmpty);
  },
  onReachBottom () {
    this.data.page += 1;
    var requestUrl = genreData.genreList[this.data.genreId].dataUrl + '&page=' + this.data.page + '&pagesize=20&time=' + this.data.times;
    this.getJokeData(requestUrl, this.data.isEmpty);
  }
})