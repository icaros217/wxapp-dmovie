// Douban API 操作
// const douban = require('../../libraries/douban.js')

// Page({
//   data: {
//     movies: [],
//     loading: true
//   },

//   onLoad () {
//     douban.find('coming_soon', 1, 3)
//       .then(d => this.setData({ movies: d.subjects, loading: false }))
//       .catch(e => {
//         console.error(e)
//         this.setData({ movies: [], loading: false })
//       })
//   },

//   start () {
//     // TODO: 访问历史的问题
//     wx.switchTab({ url: '../board/board' })
//   }
// })


Page({
    data: {
        // imgUrls: [],
        list: []
    },

    onLoad () {
        const apiUrl = 'https://api.douban.com/v2/movie/coming_soon'
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
        
    },

    start () {
    // TODO: 访问历史的问题
    wx.switchTab({ url: '../board/board' })
  }
})