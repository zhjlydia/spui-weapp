import list from '../../config';

console.log(list)
Page({
  data: {
    list
  },
    goView(e){
      let dataset = e.currentTarget.dataset;
      let path = dataset.path;
      console.log(path)
      wx.navigateTo({url:path})
    }
});
