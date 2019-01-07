Component({
  data:{
    prefixCls : 'spui-weapp-card'
  },
  externalClasses: ["custom-class"],
  options: {
    multipleSlots: true
  },
  properties: {
    showHeader: {
      type: Boolean,
      value:true,
      description: "是否显示头部"
    },
    title: {
      type: String,
      value:'',
      description: "title"
    }
  }
});
