'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/styles/**/*.scss',
    paths.src + '/app/**/*.js',
    'bower.json'
  ], ['inject', 'jshint']);
});
