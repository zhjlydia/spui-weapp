const gulp = require("gulp");
const fs=require("fs");
const path = require("path");
const less = require("gulp-less");
const babel = require("gulp-babel");
const insert = require("gulp-insert");
const rename = require("gulp-rename");
const cssmin = require("gulp-clean-css");
const postcss = require("gulp-postcss");

const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const request = require("request");

const isProduction = process.env.NODE_ENV === "production";
const src = path.join(__dirname, "../src");
const dist = path.join(__dirname, isProduction ? "../dist" : "../example/dist");
const ext = ["ts", "js","less", "json", "wxml", "wxs"];

function copy(ext) {
  return gulp.src([src + "/**/*." + ext]).pipe(gulp.dest(dist));
}

gulp.task("compile-less", () => {
  return gulp
    .src([src + "/**/*.less"])
    .pipe(less())
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(
      insert.transform((contents, file) => {
        if (!file.path.includes("src"+path.sep+"common")) {
          contents = `@import '../common/styles/common.wxss';` + contents;
        }
        return contents;
      })
    )
    .pipe(
      rename(path => {
        path.extname = ".wxss";
      })
    )
    .pipe(gulp.dest(dist));
});
gulp.task('compile-ts', () =>
  gulp
    .src([src + '/**/*.ts'])
    .pipe(babel())
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(gulp.dest(dist))
);
gulp.task("compile-js", () => copy("js"));
gulp.task("compile-wxs", () => copy("wxs"));
gulp.task("compile-json", () => copy("json"));
gulp.task("compile-wxml", () => copy("wxml"));
gulp.task("build", ext.map(ext => "compile-" + ext));

gulp.task('default', ['build']);

if (!isProduction) {
  ext.forEach(ext => {
    gulp.watch(src + "/**/*." + ext, ["compile-" + ext]);
  });
}

