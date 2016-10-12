Page({
    data: {
        state: {},
        audio: {
            dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
            title: '此时此刻',
            coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'

        }
    },
    onReady() {
        var that = this;
        wx.onBackgroundAudioPlay(function(res){
            console.log('开始播放音乐')
        });
        wx.onBackgroundAudioPause(function(res){
            console.log('已暂停播放')
        });
        wx.onBackgroundAudioStop(function(res){
            console.log('已停止播放')
            that.setData({
                state: {}
            })
        });
    },
    getStatus() {
        var that = this;
        console.log('获取音频状态')
        wx.getBackgroundAudioPlayerState({
            success: function(res) {
            	console.log(res)
                that.setData({
                    state: res
                })
            }
        })
    },
    playAudio() {
        var that = this;
        wx.playBackgroundAudio(that.data.audio);
    },
    pauseAudio() {
        wx.pauseBackgroundAudio();
    },
    seekAudio(e) {
        wx.seekBackgroundAudio({
            position: e.detail.value
        });
    },
    stopAudio() {
        wx.stopBackgroundAudio();
    }
})
