Page({
    data: {
        subtitle: '影片/导演/演员',
        list: [],
        hasMore: false,
        loading: false,
        pageIndex: 1,
        searchKey: null 
    },
    search (e) {
        var value = e.detail.value
        const apiUrl = 'https://api.douban.com/v2/movie/search?q=' + value
        const _this = this
        this.setData({subtitle: '加载中', hasMore: true, loading: true, searchKey: e.detail.value})
        wx.request({
            url: apiUrl, //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function(res) {
                if (res.data.subjects.length) {
                    _this.setData({ list: res.data.subjects, loading: false, subtitle: res.data.titile })
                } else {
                    _this.setData({ hasMore: false, loading: false })
                }
            }
          })
    },

    loadMore () {
        if (!this.data.hasMore) return

        this.setData({ subtitle: '加载中...', loading: true })
        var q = this.data.searchKey;
        var page = this.data.pageIndex;
        
        const apiUrl = 'https://api.douban.com/v2/movie/search'
        const _this = this
        wx.request({
            url: apiUrl, //仅为示例，并非真实的接口地址
            data: {q: q, start: (page - 1) * 20, count: 20},
            header: {
                'content-type': 'json'
            },
            success: function(res) {
                if (res.data.subjects.length) {
                    _this.setData({ list: _this.data.list.concat(res.data.subjects), loading: false, subtitle: res.data.titile })
                } else {
                    _this.setData({ hasMore: false, loading: false })
                }
            }
          }),
          _this.setData({pageIndex: page+1})
          console.log('玩命加载中')
          console.log(page)
  },

})