# wechat-weapp-demo
·目前的目标是将官方文档所提及的组件和功能接口的范例都写出来。
·按照组件的方式拆分到各自的小页面，将来引用可以直接拿出来。
·部分过于简单的组件如switch可能不包括在本项目中。
·navigator 组件的写法跟官方演示有部分不同



#开发过程中的坑(仅针对微信官方开发者工具0.9.023版本)

##picker 在使用开发者工具时存在的bug(开发者工具0.10中已不存在该问题)

`mode=selector`
当可选项超过4个时，上拉选择无法滚动到第四个之后的选项。

##单页面的导航栏标题navigatorTitle的设置优先级问题

`xxx.json`中设置的

```json
"navigationBarTitleText": "i am title",
```

要高于`xxx.js`中通过接口设置的

```javascript
wx.setNavigationBarTitle({
    title: "i am another title"
});
```

注意： 此处所指json、js文件为同名文件。
当json文件存在并已设置navigationBarTitle时，导航栏标题将默认显示该title，且无法通过js修改（js所修改title将仅显示一秒不到，而后又被json的title替换掉）

##map大坑！
开发者工具，目前暂不支持map.
显示地图，只能通过api进行调取，不建议通过bind操作后执行地图调取操作，否则会报错。

```bash
Page route错误
WAService.js:2 navigateBack 一个不存在的webviewId41
```

涉及到的API有`wx.getLocation`和`wx.openLocation`

----------------------------------------------------------------------------------------------------------

###更新说明： 【 2016.10.12 开发者工具已经从0.9.023升级到0.10.101100版本 】，以下注解将仅针对0.10.1011版本。

----------------------------------------------------------------------------------------------------------

##API调用的一个坑

凡涉及监听的接口（如：`wx.onSocketMessage`），建议丢到 `onLoad`或`onReady`代码段中，而不是在每个动作的定义函数内，因为这会导致该端口被不断累积触发，导致返回数据出现重复。
具体可以看websocket案例，稍后会写在某文章中详细说明。

```javascript
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
```