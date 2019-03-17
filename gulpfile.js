
'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const path = require('path');
const uglify = require('gulp-uglify');
const saveLicense = require('uglify-save-license');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('js', () => {
    return gulp
    .src(['./src/force.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify({
            output: {
                comments: saveLicense
            },
            mangle: true
        }))
    .pipe(rename(function(path) {
        path.basename += '.min'
        return path;
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src'));
});

gulp.task('js:watch', function() {
    gulp.watch(['assets/js/index.js'], gulp.task('js'))
    .on('change', function(event) {
        console.log('File ' + path.basename(event) + ' was changed! Running tasks...');
    });
});

gulp.task('build', gulp.parallel('js'));
gulp.task('default', gulp.parallel('js:watch'));
