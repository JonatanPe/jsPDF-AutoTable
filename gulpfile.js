'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var rename = require("gulp-rename");
var replace = require('gulp-replace');

gulp.task('default', ['build']);

gulp.task('bower', shell.task([
    'bower update'
]));

// Move files and correct paths
gulp.task('build', ['bower'], function () {
    gulp.src('bower_components/jspdf-autotable/examples/**/*')
        .pipe(gulp.dest('.'));
    gulp.src('bower_components/jspdf-autotable/jspdf.plugin.autotable.js')
        .pipe(gulp.dest('.'));
    gulp.src('bower_components/jspdf-autotable/examples/examples.html')
        .pipe(rename('index.html'))
        .pipe(replace(/..\/jspdf.plugin.autotable.js/g, 'jspdf.plugin.autotable.js'))
        .pipe(gulp.dest('.'));
});



