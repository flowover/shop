// pages/login/index.js
Page({
  handlegetuserinfo (e){
    console.log(e.detail)
    const {userInfo} = e.detail;
    wx.setStorageSync("userInfo", userInfo);
    wx.navigateBack({
      delta: 1
    });
  }
})