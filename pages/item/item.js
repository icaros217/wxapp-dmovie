// 创建一个页面对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
Page({
    data: {
        temp: {}
    },
    onLoad (params) {
        console.log(params.id)
        const apiUrl = 'https://api.douban.com/v2/movie/subject/' + params.id
        const _this = this
        wx.request({
            url: apiUrl, //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function(res) {
                _this.setData({temp: res.data})
            }
          })
        
    }
})