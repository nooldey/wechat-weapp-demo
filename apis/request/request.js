Page({
    data: {
        getRes: {},
        postRes: {}
    },
    resetData() {
        this.setData({
            getRes: {},
            postRes: {},
            websocketMessages: [],
            websocketOn: false
        })
    },
    ApiGetRequest() {
        if (this.data.getRes.status) {
            console.log('已执行过GET')
            return;
        }
        console.log('GET');
        var that = this;
        this.setData({
            'getRes.status': true
        })
        wx.request({
            //必需
            url: 'https://api.github.com/users/nooldey/repos',
            data: {
                sort: 'created',
                direction: 'asc'
            },
            header: {
                'Content-Type': 'application/json'
            },
            success(res) {
                that.setData({
                    'getRes.data': res.data
                })
            },
            fail(res) {
                console.log(res)
            }
        })
    },
    ApiPostRequest() {
        if (this.data.postRes.status) {
            console.log('已执行过POST')
            return;
        }
        console.log('POST');
        var that = this;
        this.setData({
            'postRes.status': true
        })
        wx.request({
            //必需
            url: 'https://run.jsbox.io/jsbox/hello_world',
            data: {
                name: "nooldey"
            },
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            success(res) {
                that.setData({
                    'postRes.data': res.data
                })
            },
            fail(res) {
                console.log(res)
            }
        })
    },
    ApiUploadFile() {
        wx.chooseImage({
            success(res) {
                var tempFilePaths = res.tempFilePaths
                console.log(tempFilePaths)
                wx.uploadFile({
                    url: 'http://example.com/upload',
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: {
                        'user': 'test'
                    },
                    success(res) {
                        console.log(res)
                    },
                    fail(res) {
                        console.log(res)
                    }
                })
            }
        })
    },
    ApiDownloadFile() {
        wx.downloadFile({
            url: 'http://example.com/audio/123',
            type: 'audio',
            success(res) {
                wx.playVoice({
                    filePath: res.tempFilePath
                })
            },
            fail(res) {
                console.log(res)
            }
        });
    }
})
