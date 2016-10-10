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
            'picker',
            'slider',
            'action-sheet',
            'modal',
            'toast',
            'loading',
            'navigator',
            'audio',
            'image',
            'video',
            'map',
            'canvas'
        ]
    },
    goTo(t) {
        var n = t.target.dataset.name;
        wx.navigateTo({
            url: '../../components/' + n + '/' + n
        })
    }
})
