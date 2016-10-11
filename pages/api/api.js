Page({
	data:{
		apis: [
			{
				title: "网络",
				items: [
					"request",
					"websocket"
				]
			},
			{
				title: "媒体",
				items: [
					"readImage",
					"record",
					"voice",
					"backgroundAudio"
				]
			},
			{
				title: "",
				items: []
			},
			{
				title: "",
				items: []
			},
			{
				title: "",
				items: []
			},
			{
				title: "",
				items: []
			},
			{
				title: "",
				items: []
			}
		]
	},
	goTo(t) {
        var n = t.target.dataset.name;
        wx.navigateTo({
            url: '../../apis/' + n + '/' + n
        })
    }
})		