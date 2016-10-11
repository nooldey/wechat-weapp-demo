Page({
	data: {
		voicePath: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
		playing: false
	},
	playVoice() {
		var that = this;
		this.setData({
			playing: true
		})
		wx.playVoice({
		  //必须
		  filePath: that.data.voicePath,
		  success: function(res) {
		    console.log('开始播放')
		  },
		  fail: function(res) {
		    
		  },
		  complete: function(res) {
		    
		  }
		});
	},
	pauseVoice() {
		if (!this.data.playing) {
			console.log('当前无正在播放的音频文件')
			return;
		}
		wx.pauseVoice();
	},
	stopVoice() {
		if (!this.data.playing) {
			console.log('当前无正在播放的音频文件')
			return;
		}
		wx.stopVoice();
	}
})