Page({
	data:{
		websocketMessages: [],
        websocketOn: false
	},
    onReady() {
        var that = this;
        wx.onSocketOpen(function(res) {
            that.setData({
                websocketOn: true
            })
            console.log('websocket连接已打开')
        })
        wx.onSocketError(function(res) {
            console.log('websocket连接打开失败')
        })
        wx.onSocketMessage(function(res) {
            console.log('收到服务器内容：', res.data)
            var tmp = [].concat(that.data.websocketMessages);
            tmp.push(res.data)
            that.setData({
                websocketMessages: tmp
            })
        });
        wx.onSocketClose(function(res) {
            console.log('WebSocket 已关闭!')
            that.setData({
                websocketOn: false
            })
        });
    },
	ApiConnectSocket() {
        wx.connectSocket({
            url: 'ws://echo.websocket.org',
            method: "get",
            data: {},
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                console.log('websocket连接成功')
            },
            fail(err) {
                console.log(err)
            }
        })
    },
    ApiSendSocketMes() {
        if (!this.data.websocketOn) {
            console.log('WebSocket 未打开,请检查')
            return;
        }
        wx.sendSocketMessage({
            //必需
            data: '您有一条新消息',
            success: function(res) {
                console.log('发送成功')
            },
            fail: function(res) {
                console.log('发送失败')
            }
        });
    },
    ApiCloseSocket() {
        if (!this.data.websocketOn) {
            console.log('WebSocket 未打开,请检查')
            return;
        }
        wx.closeSocket();
        
    }
})		