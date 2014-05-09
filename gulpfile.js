var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
    dist: 'www'
};

gulp.task('clean', function() {
    return gulp.src(paths.dist, { read: false })
        .pipe($.clean());
});

gulp.task('images', function() {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest(paths.dist + '/img'))
        .pipe($.size());
});

gulp.task('fonts', function() {
    return gulp.src('app/bower_components/ionic/release/fonts/**/*')
        .pipe(gulp.dest(paths.dist + '/fonts'))
        .pipe($.size());
});

gulp.task('partials', function() {
    return gulp.src('app/partials/**/*')
        .pipe(gulp.dest(paths.dist + '/partials'))
        .pipe($.size());
});

gulp.task('html', /*['styles-build'], */function() {
    return gulp.src('app/index.html')
        .pipe($.useref.assets())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest(paths.dist))
        .pipe($.size());
});

gulp.task('connect', function() {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect'], function() {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['serve'/*, 'styles-dev'*/], function() {
    var server = $.livereload();

    gulp.watch([
        'app/*.html',
        'app/partials/**/*',
        'app/js/**/*.js',
        'app/css/**/*',
        'app/img/**/*'
    ]).on('change', function(file) {
        server.changed(file.path);
    });

    //gulp.watch('app/scss/**/*.scss', ['styles-dev']);
});

gulp.task('build', ['html', 'images', 'fonts', 'partials']);

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


// Use these tasks to build sass if you are processing ionic from source
// 
// gulp.task('styles-dev', function() {
//     return gulp.src('app/scss/ionic.scss')
//         .pipe($.rubySass({
//             style: 'expanded'
//         }))
//         .pipe(gulp.dest('app/css'));
// });

// gulp.task('styles-build', function() {
//     return gulp.src('app/scss/ionic.scss')
//         // replace the font reference to the one in the build
//         .pipe($.replace('../bower_components/ionic/release/fonts', '../fonts'))
//         .pipe($.rubySass())
//         .pipe($.minifyCss({
//             keepSpecialComments: 0
//         }))
//         .pipe(gulp.dest('app/css'))
//         .pipe($.size());
// });