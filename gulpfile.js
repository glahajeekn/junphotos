var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    
    pngquant = require('imagemin-pngquant');

gulp.task('testImagemin', function () {
    gulp.src('poblog/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/img'));
});