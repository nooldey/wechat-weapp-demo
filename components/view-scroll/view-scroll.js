var order = ['red', 'green', 'blue', 'yellow', 'red'];

Page({
	data:{
		toView: 'red',
        scrollTop: 100,
		scrollLeft: 0,
        inlower: false
	},
	// onLoad:function(options){
		
	// },
	// onReady:function(){
		
	// },
	// onShow:function(){
		
	// },
	// onHide:function(){
		
	// },
	// onUnload:function(){
		
	// },
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
                    toView: order[i + 1]
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