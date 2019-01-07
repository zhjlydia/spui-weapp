Component({
  data:{
    prefixCls : 'spui-weapp-panel'
  },
  externalClasses: ["custom-class"],
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value:'',
      description: "title"
    }
  }
});
