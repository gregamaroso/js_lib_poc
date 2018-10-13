var gulp = require('gulp');

gulp.task('build-vue', function() {
  gulp.src('./v-button/dist/prod/app.min.js')
    .pipe(gulp.dest('./build/vue/'));
});

gulp.task('build-react', function() {
  console.log('building react');
});

gulp.task('build-jquery', function() {
  gulp.src('./j-button/app.js')
    .pipe(gulp.dest('./build/jquery/'));
});

gulp.task(
  'build',
  ['build-vue', 'build-react', 'build-jquery']
);

