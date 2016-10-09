//获取应用实例
var initData = "this is the first line \n"
var extraLine = [];
var order = ['text','icon','progress','text'];
Page({
    data: {
        iconSize: [20, 30, 40, 50, 60, 70],
        iconColor: [
            'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
        ],
        iconType: [
            'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
            'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
            'info_circle', 'cancel', 'search', 'clear'
        ],
        text: initData,
        toView: 'text',
        scrollTop: 100,
        scrollLeft: 0,
        inlower: false
    },
    goToSlide: function() {
        wx.navigateTo({
            url: '../swiper/swiper'
        })
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
    },
    upper: function(e) {
        console.log(e);
    },
    lower: function(e) {
        console.log(e);
    },
    scroll: function(e) {
        console.log(e);
    },
    tap: function(e) {
        for (var i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i+1]
                })
                break
            }
        }
    },
    tapH: function(e) {
        this.setData({
            scrollLeft: this.data.scrollLeft + 375
        })
        if (this.data.inlower) {
            this.setData({
                scrollLeft: 0,
                inlower: false
            })
        }
    },
    toLower: function() {
        console.info("滚动到底部/右侧");
        this.setData({
            inlower: true
        })
    },
    tapMove: function(e) {
        this.setData({
            scrollTop: this.data.scrollTop + 20
        })
    }
})
