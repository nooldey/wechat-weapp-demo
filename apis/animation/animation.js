Page({
    data: {
        animationData: {}
    },
    onShow: function() {
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease'
        })

        this.animation = animation

        animation.scale(2, 2).rotate(45).step()

        this.setData({
            animationData: animation.export()
        })

        setTimeout(function() {
            animation.translate(40).step()
            this.setData({
                animationData: animation.export()
            })
        }.bind(this), 1000)
    },
    rotateAndScale: function() {
        this.animation.rotate(0).scale(1,1).step() //恢复初始化
        // 旋转同时放大
        this.animation.rotate(360).scale(3, 3).step()
        this.setData({
            animationData: this.animation.export()
        })
    },
    rotateThenScale: function() {
        this.animation.rotate(0).scale(1,1).step() //恢复初始化
        // 先旋转后放大
        this.animation.rotate(180).step()
        this.animation.scale(2, 2).step()
        this.setData({
            animationData: this.animation.export()
        })
    },
    rotateAndScaleThenTranslate: function() {
        this.animation.rotate(0).scale(1,1).step() //恢复初始化
        // 先旋转同时放大，然后平移
        this.animation.rotate(180).scale(2, 2).step()
        this.animation.translate(100, 100).step({ duration: 1000 })
        this.setData({
            animationData: this.animation.export()
        })
    }
})
