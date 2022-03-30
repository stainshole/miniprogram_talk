// pages/home/home.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperImgUrls: [
            {
                url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F26%2F20180726183229_xgfbm.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650872455&t=1289ca5bc96110696a493087b66fae91'
            },{
                url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9d7716224ecefb91a906cf79c0e7613ed91cf999d879-ms0Zrq_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650872455&t=7d8812b87a5f227f6fde2adc1b3b62b9'
            },{
                url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.kuai8.com%2Fattaches%2Fnews%2Fimage%2F20160912%2F201609121749009925.png&refer=http%3A%2F%2Fimg.kuai8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650872455&t=3ec97ba59aa7208b4386706c60cfb9fe'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.timeout()
    },
    async foo(){
    console.log('foo')
    let res = await this.timeout()
    console.log(res)
},

timeout(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1)
            resolve('resolved')
        }, 2000)
    })
},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
     
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})