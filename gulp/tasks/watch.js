module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('dev/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('dev/assets/sass/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('dev/assets/js/*.js', $.gulp.series('scripts'));
  });
}