Page({
    data: {
        title: "导航页面"
    },
    onLoad: function(options) {
        if (options.title) {
            this.setData({
                title: options.title
            })
            wx.setNavigationBarTitle({
                title: this.data.title,
                success: function(res) {
                    console.log('success')
                    console.log(res)
                },
                fail: function(res) {
                    console.log('failed')
                    console.log(res)
                },
                complete: function(res) {
                    console.log('completed')
                    console.log(res)
                }
            });
        }
    }
})
