Page({
    data: {
        // imgUrls: [],
        list: []
    },

    onLoad () {
        const apiUrl = 'https://api.douban.com/v2/movie/in_theaters'
        const _this = this
        wx.request({
            url: apiUrl, //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function(res) {
                _this.setData({list: res.data.subjects})
            }
          })
        
    }
})
