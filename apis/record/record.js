Page({
	data:{
		emit: false
	},
	startRecord() {
		this.setData({
			emit: true
		})
		wx.startRecord({
		  success: function(res) {
		    var tempFilePath = res.tempFilePath 
		  },
		  fail: function(res) {
		     console.log('录音失败')
		  }
		})
	},
	stopRecord() {
		if (!this.data.emit) {
			console.log('请先启动录音')
			return;
		}
		wx.stopRecord();
	}
})		