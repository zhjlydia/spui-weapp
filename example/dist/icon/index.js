Component({
  data: {
    prefixCls: 'spui-weapp-icon'
  },
  externalClasses: ["custom-class"],
  properties: {
    type: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      value: 14
    }
  }
});