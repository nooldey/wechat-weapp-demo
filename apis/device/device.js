Page({
	data: {
	},
	onReady() {
		wx.onAccelerometerChange(function(res){
			console.log('重力感应x：',res.x)
			console.log('重力感应y：',res.y)
			console.log('重力感应z：',res.z)
		})
		wx.onCompassChange(function(res){
			console.log('罗盘数据：',res.direction)
		})
	},
	getNetwork() {
		wx.getNetworkType({
		  success: function(res) {
		  	console.log('当前网络类型：',res.networkType)
		  }
		});
	},
	getSystem() {
		var that = this;
		wx.getSystemInfo({
		  success: function(res) {
		    console.log('获取系统信息')
		    that.setData({
		    	system: res
		    })
		  },
		  fail: function(res) {
		    console.log(res)
		  },
		  complete: function(res) {
		    
		  }
		});
	}
})