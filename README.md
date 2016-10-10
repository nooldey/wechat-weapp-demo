# wechat-weapp-demo
·目前的目标是将官方文档所提及的组件和功能接口的范例都写出来。
·按照组件的方式拆分到各自的小页面，将来引用可以直接拿出来。
·部分过于简单的组件如switch可能不包括在本项目中。
·navigator 组件的写法跟官方演示有部分不同



#开发过程中的坑(仅针对微信官方开发者工具0.9.023版本)

##picker 在使用开发者工具时存在的bug

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

`wx.getLocation`
`wx.openLocation`