var genreData = require("../../data/genre-data.js");
Page({
  data: {},
  onLoad: function (options) {
    this.setData({
      genreList: genreData.genreList
    });
  },
  iconsTap (event) {
    var genreId = event.currentTarget.dataset.id;
    console.log(genreId);
    wx.navigateTo({
      url: genreData.genreList[genreId].navigateUrl + genreId
    })
  }
})
