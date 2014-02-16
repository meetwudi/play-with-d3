var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch(['*.html', 'css/*.css', 'js/*.js'], function(event) {
    server.changed(event.path);
  });
});