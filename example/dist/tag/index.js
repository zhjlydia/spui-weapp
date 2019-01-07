const computedBehavior = require('../common/mixins/compute')

const DEFAULT_COLOR = '#999';
Component({
  behaviors: [computedBehavior],
  data:{
    prefixCls : 'spui-weapp-tag'
  },
  externalClasses: ["custom-class"],
  properties: {
    color: {
      type: String,
      value:'',
      description: "自定义颜色"
    },
    round: {
      type: Boolean,
      value:false,
      description: "是否是圆形"
    },
    hollow: {
      type: Boolean,
      value:false,
      description: "是否空心"
    },
    size:{
      type:Number,
      value:0,
      description:"自定义大小，以字号为基准"
    }
  },
  computed: {
    style() {
      const color = this.data.color || DEFAULT_COLOR;
      const key = this.data.hollow ? 'color' : 'background-color';
      const style = { [key]: color,'border-color':color };
      if(this.data.size!==0){
        style['font-size']=this.data.size+'rpx';
        style['padding']=this.data.size/2+'rpx';
      }
      return Object.keys(style).map(key => `${key}: ${style[key]}`).join(';');
    }
  }
});
