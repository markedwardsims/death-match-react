const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean:dist', function () {
    return gulp.src('dist')
        .pipe(clean());
});