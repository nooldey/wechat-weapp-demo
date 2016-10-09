Page({
    data: {
        components: ['progress','swiper','text','icon','view','view-scroll']
    },
    goToSlide: function() {
        wx.navigateTo({
            url: '../../components/view-scroll/view-scroll'
            // url: '../swiper/swiper'
        })
    },
    goTo: function(t) {
        var n = t.target.dataset.name;
        wx.navigateTo({
            url: '../../components/' + n + '/' + n
        })
    }
})
