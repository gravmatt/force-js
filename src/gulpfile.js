// UPDATE to gulp 4.0
/*
# uninstall previous Gulp installation, if any
$ npm uninstall gulp -g
$ cd [your_project_root]
$ npm uninstall gulp

# install Gulp 4 CLI tools globally from 4.0 GitHub branch
$ npm install gulpjs/gulp-cli#4.0 -g

# install Gulp 4 into your project
$ npm install gulpjs/gulp.git#4.0 --save-dev
*/


const gulp = require('gulp');
const rename = require('gulp-rename');
const path = require('path');
const uglify = require('gulp-uglify');

gulp.task('js', () => {
    return gulp.src(['force.js'])
    .pipe(uglify({
        preserveComments: 'license',
        mangle: true
    }))
    .pipe(rename(function(path) {
        path.basename += '.min'
        return path;
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', gulp.task('js'));
