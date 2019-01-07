Component({
  data: {
    prefixCls: 'spui-weapp-cell'
  },
  externalClasses: ["custom-class"],
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    value: {
      type: String,
      value: ''
    },
    isLink: {
      type: Boolean,
      value: false
    },
    titleWidth: {
      type: Number,
      value: '100'
    },
    border: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    cellTap() {
      this.triggerEvent("click", {}, {});
    }

  }
});