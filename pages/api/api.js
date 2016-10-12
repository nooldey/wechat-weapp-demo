Page({
    data: {
        apis: [{
            title: "网络",
            items: [
                "request",
                "websocket"
            ]
        }, {
            title: "媒体",
            items: [
                "readImage",
                "record",
                "voice",
                "backgroundAudio",
                "saveFile",
                "chooseVideo"
            ]
        }, {
            title: "数据",
            items: [
                "storage"
            ]
        }, {
            title: "位置",
            items: [
                "map"
            ]
        }, {
            title: "设备",
            items: [
                "device"
            ]
        }, {
            title: "界面",
            items: [
                "interface",
                "animation"
            ]
        }, {
            title: "开放接口",
            items: []
        }]
    },
    goTo(t) {
        var n = t.target.dataset.name;
        wx.navigateTo({
            url: '../../apis/' + n + '/' + n
        })
    }
})
