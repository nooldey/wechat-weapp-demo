Page({
	data: {

	},
	onReady() {
		wx.setNavigationBarTitle({
		  title: '界面API演示'
		});
		wx.showNavigationBarLoading();
		setTimeout(function(){
			wx.hideNavigationBarLoading();
		},3000)
		
	},
	navigate() {
		wx.navigateTo({
		  url: '../../pages/api/api'
		})
	},
	redirect() {
		wx.redirectTo({
		  url: '../../pages/donate/donate'
		})
	},
	back() {
		wx.navigateBack();
	},
	hideKeyboard() {
		wx.hideKeyboard();
	},
	stopRefresh() {
		wx.stopPullDownRefresh();
	}
})