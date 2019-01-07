var gulp = require('gulp');
const path = require("path");
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
const src = path.join(__dirname, "../src");

const isProduction = process.env.NODE_ENV === "production";
const dist = path.join(__dirname, isProduction ? "../dist" : "../example/dist");

//生成图标字体文件
gulp.task('iconfont', function() {
    return gulp
        .src(['../assets/iconfontSvg/*.svg'])
        .pipe(
            iconfontCss({
                fontName: 'spuiweappicons', //字体名
                path: '../assets/templates/iconFont.less', //模板文件路径
                targetPath: '../spui-weapp-icons.less',
                cssClass: 'spui-weapp-icon', //样式类名
                fontPath: '/fonts/'
            })
        )
        .pipe(
            iconfont({
                fontName: 'spuiweappicons', // required
                prependUnicode: false, // recommended option
                formats: ['ttf', 'eot', 'woff', 'svg'],
                normalize: true,
                fontHeight: 1001
            })
        )
        .pipe(gulp.dest(src+'/common/styles/iconfont/fonts'));
  });
  
  
  // 拷贝字体文件
  gulp.task('fonts', ['iconfont'], function() {
    gulp.src(src+'/common/styles/iconfont/fonts/*.*').pipe(gulp.dest(dist+'/common/styles/iconfont/fonts'));
  });


let gulpPromise = ()=>{ return new Promise(function (resolve, reject) {
    gulp.task('default', ['iconfont','fonts'], function () {
        console.log("完成iconfont构建");
        resolve()
    });
    gulp.start('default')
  });
  }
  gulpPromise().then(()=>{
    return
    // TODO 字体图标文件不可用本地路径  需要加一个上传cdn的方法
   
  })
