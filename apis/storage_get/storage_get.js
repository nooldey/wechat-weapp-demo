Page({
    getStorage() {
        var that = this;
        wx.getStorage({
            key: 'author',
            success: function(res) {
                console.log('异步获取信息：', res.data)
                that.setData({
                    storage: res.data
                })
            },
            fail: function(res) {

            },
            complete: function(res) {

            }
        });
    },
    getStorageSync() {
        let v = wx.getStorageSync('author');
        if (v) {
            console.log('同步获取信息：', v)
        }
        this.setData({
            storage: v
        })
    }
})
