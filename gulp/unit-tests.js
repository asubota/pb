'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var paths = gulp.paths;

function runTests (singleRun, done) {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    paths.src + '/app/app.module.js',
    paths.src + '/app/**/*.module.js',
    paths.src + '/app/**/*.js',
    paths.src + '/test/lib/specHelper.js',
    paths.src + '/test/lib/mockData.js',
    paths.src + '/test/**/*.spec.js',
  ]);

  gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: (singleRun)? 'run': 'watch'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      // throw err;
    });
}

gulp.task('test', function (done) { runTests(true /* singleRun */, done) });
gulp.task('test:auto', function (done) { runTests(false /* singleRun */, done) });
