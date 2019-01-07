Component({
  externalClasses: ['custom-class'],
  data: {
    prefixCls: 'spui-weapp-col'
  },
  relations: {
    '../row/index': {
      type: 'parent'
    }
  },
  properties: {
    span: {
      value: 0,
      type: Number
    },
    offset: {
      value: 0,
      type: Number
    }
  }
});