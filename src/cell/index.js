Component({
  data:{
    prefixCls : 'spui-weapp-cell'
  },
  externalClasses: ["custom-class"],
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      description: "左侧标题"
    },
    description: {
      type: String,
      description: "标题下方的描述信息"
    },
    value: {
      type: String,
      value:'',
      description: "右侧内容"
    },
    isLink: {
      type: Boolean,
      value: false,
      description: "是否展示右侧箭头"
    },
    titleWidth:{
      type: Number,
      value: '100',
      description: "title部分的宽度"
    },
    border:{
      type: Boolean,
      value: true,
      description: "是否显示边框"
    }
  },
  methods: {
    cellTap() {
      this.triggerEvent("click", {});
    }
  }
});
