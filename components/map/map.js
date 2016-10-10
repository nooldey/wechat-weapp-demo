var app = getApp();

Page({
    data: {
        markers: [{
            latitude: 23.099994,
            longitude: 113.324520,
            name: 'T.I.T 创意园',
            desc: '我现在的位置'
        }],
        covers: [{
            latitude: 23.099794,
            longitude: 113.324520,
            iconPath: '../images/cat.png',
            rotate: 10
        }, {
            latitude: 23.099298,
            longitude: 113.324129,
            iconPath: '../images/cat.png',
            rotate: 90
        }]
    },
    getMap: function() {
        var that = this;
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 2
                })
            }
        })
    }
})
