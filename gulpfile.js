var gulp = require('gulp'),
	sass = require('gulp-sass'),
	fileinclude = require('gulp-file-include');

gulp.task('template', function() {
	gulp.src(['./templates/index.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: './templates/'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
	gulp.src('./sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch('./templates/*.html', ['template']);
	gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task("default", ["watch", "template", "sass"]);
