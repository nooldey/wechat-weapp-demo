var initData = "这是初始化的一行文字";
var extraLine = [];

Page({
	data:{
		text: initData
	},
	add: function() {
        extraLine.push('我被加进来了')
        this.setData({
            text: initData + '\n' + extraLine.join('\n')
        })
    },
    clear: function() {
        extraLine = []
        this.setData({
            text: initData
        })
    },
    remove: function() {
        if (extraLine.length > 0) {
            extraLine.pop()
            this.setData({
                text: initData + '\n' + extraLine.join('\n')
            })
        }
    }
})		