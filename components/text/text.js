var initData = "this is the first line \n";
var extraLine = [];

Page({
	data:{
		text: initData
	},
	add: function() {
        extraLine.push('other line')
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