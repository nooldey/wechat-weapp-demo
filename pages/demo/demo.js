Page({
    data: {
        components: [
        	'swiper',
        	'text',
        	'icon',
        	'progress',
        	'view',
        	'view-scroll',
        	'button',
        	'checkbox',
        	'form',
            'input',
            'label',
            'picker'
        ]
    },
    goTo: function(t) {
        var n = t.target.dataset.name;
        wx.navigateTo({
            url: '../../components/' + n + '/' + n
        })
    }
})
