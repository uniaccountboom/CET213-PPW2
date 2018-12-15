var gulp = require('gulp'); //standard handle to library.
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var nano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var minimage = require('gulp-image');
//htmlmin - minify the html.
gulp.task('minify', function() {
 return gulp.src('src/*.html')
 .pipe(htmlmin({collapseWhitespace: true}))
 .pipe(gulp.dest('dist'))
});
//    gulp.task('imagemin', function() {
//     gulp.src('src/images/*')
//     .pipe(imagemin([
//         imagemin.gifsicle({interlaced: true}),
//         imagemin.jpegtran({progressive: true}),
//         imagemin.optipng({optimizationLevel: 10}),
//         imagemin.svgo({
//             plugins: [
//                 {removeViewBox: true},
//                 {cleanupIDs: false}
//             ]
//         })
//     ]))
//    .pipe(gulp.dest('dist/images'));
//    });

   gulp.task('imagemin2', function() {
    gulp.src('src/images/*')
        .pipe(minimage())
        .pipe(gulp.dest('dist/images'));
   });
   
        

   
   gulp.task('default', ['minify', 'imagemin2'], function() {
   // default task
   console.log("this is the default task this is gulp");
   });