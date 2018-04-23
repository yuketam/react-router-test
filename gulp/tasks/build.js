const path = require('path');
const gulp = require('gulp');
const connect = require('gulp-connect');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');


gulp.task('build', function() {
  connect.server({
    name: 'local',
    port: 3000,
    root: './public',
    livereload: true
  });
});

gulp.task('webpack', function(cb) {
  const myConfig = Object.create(webpackConfig);
  webpack(myConfig, err => {
    if (err) {
      console.error('webpack error', err);
    }
    cb && cb();
  });
});