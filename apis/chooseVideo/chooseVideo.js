Page({
    chooseVideo: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 600,
            camera: ['front','back'],
            success: function(res) {
                console.log(res)
                that.setData({
                    src: res.tempFilePaths[0]
                })
            }
        })
    }
})