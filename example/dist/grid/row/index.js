Component({
    data:{
        prefixCls : 'spui-weapp-row'
      },
    externalClasses: ["custom-class"],

    relations: {
        '../col/index': {
            type: 'child'
        }
    }
});
