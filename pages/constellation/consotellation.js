// pages/constellation/consotellation.js
var dataBase = require("../../data/genre-data.js");
Page({
  data: {},
  onLoad: function (options) {
    this.setData({
      starsList: dataBase.starList
    });
  },
  starTap: function (event) {
    var nikeName = event.currentTarget.dataset.nikename;
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: './stars/star?nikename=' + nikeName + '&id=' + id
    })
  }
})