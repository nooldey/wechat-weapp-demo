Page({
	data:{
		galery: [],
		current: ''
	},
	chooseImage() {
		var that = this;
		wx.chooseImage({
		  count: 3, 
		  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		  success: function (res) {
		    console.log(res.tempFilePaths)
		    that.setData({
		    	galery: res.tempFilePaths
		    })
		  },
		  fail: function(res) {
		    console.log('选取失败')
		  }
		});
	},
	previewImage() {
		if (this.data.galery.length < 1) {
			console.log('请先选择图片')
			return;
		}
		var that = this;
		wx.previewImage({
		  current: that.data.galery[0], // 当前显示图片的http链接
		  urls: that.data.galery // 需要预览的图片http链接列表
		});
	}
})		