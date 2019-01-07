Component({
  data: {
    prefixCls: 'spui-weapp-card'
  },
  externalClasses: ["custom-class"],
  options: {
    multipleSlots: true
  },
  properties: {
    showHeader: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: ''
    }
  }
});