var gulp = require('gulp');

gulp.task('build-vue', function() {
  gulp.src('./v-button/dist/prod/app.min.js')
    .pipe(gulp.dest('./public/js/vue/'));
});

gulp.task('build-react', function() {
  return;
  console.log('building react');
});

gulp.task('build-jquery', function() {
  return;
});

gulp.task(
  'build',
  ['build-vue', 'build-react', 'build-jquery']
);

