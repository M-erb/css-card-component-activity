var gulp = require('gulp');
var notify = require("gulp-notify");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'); //minify js
var cssnano = require('gulp-cssnano'); // minify css

gulp.task('dev', function(){
  gulp.watch('assets/css/scss/**/*.scss', ['dev'])
  return gulp.src('assets/css/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cssnano()) // Minify css
    .pipe(notify("Boom Sass Done & watching for changes!!"))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('prod', function(){
  return gulp.src('assets/css/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cssnano()) // Minify css
    .pipe(notify("Boom Sass Done!!"))
    .pipe(gulp.dest('assets/css'))
});
