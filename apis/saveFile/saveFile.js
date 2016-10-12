Page({
    saveFile() {
        wx.startRecord({
            success: function(res) {
                var tempFilePath = res.tempFilePath
                console.log('录音完成，开始保存...')
                wx.saveFile({
                    tempFilePath: tempFilePath,
                    success: function(res) {
                        var savedFilePath = res.savedFilePath;
                        console.log('保存成功，结果如下：')
                        console.log(res)
                        console.log(savedFilePath)
                    }
                });
            },
            fail: function(res) {
            	console.log('录音失败')
            }
        })
    }
})
