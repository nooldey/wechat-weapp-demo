Page({
  formSubmit: function(e) {
  	console.log(e);
    console.log('form发生了submit事件，携带数据为：')
    console.table(e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})