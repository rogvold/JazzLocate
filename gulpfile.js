/**
 * Created by sabir on 21.11.15.
 */

var gulp = require('gulp');
var jsx = require('gulp-jsx');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
    browserify('./src/js/apps/App.js')
        .transform('reactify')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist/js'));

});

gulp.task('copy', function(){

    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));

});

gulp.task('default', ['browserify', 'copy'], function(){
    //gulp.watch('src/**/*.*', ['browserify']);
});