Page({
	setStorage() {
		wx.setStorage({
		  key:"author",
		  data:"nooldey",
		  success: function(res) {
		    console.log('异步存储信息')
		  },
		  fail: function(res) {
		    
		  },
		  complete: function(res) {
		    
		  }
		})
	},
	setStorageSync() {
		try {
		    wx.setStorageSync('author', 'nooldey2')
		} catch (e) {}
		console.log('同步存储信息')
	},
	clearStorage() {
		wx.clearStorage();
	},
	clearStorageSync() {
		try {
		    wx.clearStorageSync();
		} catch(e) {}
	}
})		