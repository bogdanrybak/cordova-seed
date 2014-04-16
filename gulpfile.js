var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var paths = {
    app: 'app/',
    dist: 'www/',
    hooks: 'hooks/',
    fonts: ['app/components/ionic/release/fonts/*']
};

gulp.task('clean', function() {
    // clean the build folder
    return gulp.src(paths.dist, { read: false })
        .pipe($.clean());
});

gulp.task('styles', function() {
    return gulp.src('./app/scss/app.scss')
        .pipe($.replace('../bower_components/ionic/fonts', '../fonts'))
        .pipe($.sass())
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('assets', ['clean'], function() {
    return gulp.src(['./app/img/'])
        .pipe(gulp.dest(paths.dist));
});

gulp.task('usemin', ['assets', 'sass'], function() {
    return gulp.src('./app/index.html')
        .pipe(usemin())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
    //gulp.watch(paths.sass, ['sass']);
});

gulp.task('build', ['usemin']);