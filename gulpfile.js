const gulp = require('gulp');
const codacy = require('gulp-codacy');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

gulp.task('coverage:setup', () => gulp.src(['mock-server/*.js'])
  .pipe(istanbul({ includeUntested: true }))
  .pipe(istanbul.hookRequire()));

gulp.task('test:backend', ['coverage:setup'], () => gulp.src(['test/**/*.js'])
  .pipe(mocha())
  .on('error', process.exit.bind(process, 1))
  .pipe(istanbul.writeReports({
    dir: './coverage',
  }))
);

gulp.task('test', ['test:backend']);

gulp.task('codacy-reporter', () => gulp.src(['./coverage/lcov.info'])
  .pipe(codacy())
);
