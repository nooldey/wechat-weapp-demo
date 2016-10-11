Page({
    data: {
        state: {}
    },
    getStatus() {
        var that = this;
        console.log('获取音频状态')
        wx.getBackgroundAudioPlayerState({
            success: function(res) {
            	console.log(res)
                that.setData({
                    'state.status' : res.status,
                    'state.dataUrl' : res.dataUrl,
                    'state.currentPosition' : res.currentPosition,
                    'state.duration' : res.duration,
                    'state.downloadPercent' : res.downloadPercent
                })
            }
        })
    },
    playAudio() {

    },
    pauseAudio() {

    },
    seekAudio() {

    },
    stopAudio() {

    }
})
