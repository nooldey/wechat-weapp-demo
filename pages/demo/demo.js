Page({
    data: {
        components: [{
            title: "视图容器",
            items: [
                'view',
                'scroll-view',
                'swiper'
            ]
        }, {
            title: "基础内容",
            items: [
                'icon',
                'text',
                'progress'
            ]
        }, {
            title: "表单组件",
            items: [
                'button',
                'checkbox',
                'form',
                'input',
                'label',
                'picker',
                'slider'
            ]
        }, {
            title: "操作反馈",
            items: [
                'action-sheet',
                'modal',
                'toast',
                'loading'
            ]
        }, {
            title: "导航",
            items: [
                'navigator'
            ]
        }, {
            title: "媒体组件",
            items: [
                'audio',
                'image',
                'video'
            ]
        }, {
            title: "地图",
            items: [
                'map'
            ]
        }, {
            title: "画布",
            items: [
                'canvas'
            ]
        }]
    },
    goTo(t) {
        var n = t.target.dataset.name;
        wx.navigateTo({
            url: '../../components/' + n + '/' + n
        })
    }
})
