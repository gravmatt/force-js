
'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
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

gulp.task('default', gulp.parallel('js'));
