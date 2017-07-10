const gulp = require('gulp');
const codeclimate = require('gulp-codeclimate-reporter');
const eslint = require('gulp-eslint');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

gulp.task('coverage:setup', () => {
  return gulp.src(['mock-server/*'])
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test:backend', ['coverage:setup'], () => {
  return gulp.src(['tests/**/*.js'])
    .pipe(mocha())
    .on('error', process.exit.bind(process, 1))
    .pipe(istanbul.writeReports({
      dir: './coverage',
    }));
});

gulp.task('test', ['test:backend']);

gulp.task('codeclimate', () => {
  gulp.src(['./coverage/lcov.info'])
    .pipe(codeclimate({ token: process.env.CODECLIMATE_REPO_TOKEN }));
});
