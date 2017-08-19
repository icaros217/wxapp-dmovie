// 创建一个页面对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
Page({
    data: {
        list: [],
        title: 'Loading...',
        hasMore: false,
        loading: false,
        pageIndex: 1,
        type: null 
    },
    onLoad (params) {
        const apiUrl = 'https://api.douban.com/v2/movie/' + params.type
        const _this = this
        this.setData({title: params.name, hasMore: true, loading: true, type: params.type})
        wx.request({
            url: apiUrl, 
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function(res) {
                if (res.data.subjects.length) {
                    _this.setData({ list: res.data.subjects, loading: false })
                } else {
                    _this.setData({ hasMore: false, loading: false })
                }
            }
          })        
    },

    loadMore () {
    if (!this.data.hasMore) return

    this.setData({ loading: true })
    var page = this.data.pageIndex;
    var type = this.data.type
    const apiUrl = 'https://api.douban.com/v2/movie/' + type
    const _this = this
    wx.request({
        url: apiUrl, 
        data: {start: (page - 1) * 20, count: 20},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
            if (res.data.subjects.length) {
                _this.setData({ list: _this.data.list.concat(res.data.subjects), loading: false })
            } else {
                _this.setData({ hasMore: false, loading: false })
            }
        }
        }),
        _this.setData({pageIndex: page+1})
        console.log('玩命加载中')
        console.log(page)
    }
})