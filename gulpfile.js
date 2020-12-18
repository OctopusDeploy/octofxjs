'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    jsmin = require('gulp-jsmin'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

gulp.task('less', function() {
  return gulp.src('./src/less/**/*.less')
      .pipe(less())
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('scripts', function() {
  return gulp.src(['./src/js/vendor/**/*.js', './src/js/app/**/*.js'])
      .pipe(concat('script.js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('build', gulp.parallel('less', 'scripts'));

gulp.task('default', gulp.parallel('less', 'scripts'), function() {
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch(['./src/js/vendor/**/*.js', './src/js/app/**/*.js'], ['scripts']);
});

gulp.task('clean-public', function () {
  return gulp.src(['./public/js', './public/css'], {read: false})
      .pipe(clean());
});