const gulp = require('gulp'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint'),
    browserSync = require('browser-sync').create(),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano = require("gulp-cssnano");

gulp.task("sass", function() {
    return gulp
      .src("./Sass/scss/main.scss")
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./build/css"))
      .pipe(cssnano())
      .pipe(rename("main.min.css"))
      .pipe(gulp.dest("./build/css"));
  });
  
gulp.task('eslint', function() {
    return gulp.src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
})

gulp.task('scripts', function(){
     return gulp
    .src('./js/*.js')
    .pipe(terser())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
});
gulp.task('watch' , function() {
    browserSync.init({
        server:{
        baseDir: './'
        }
    });
    gulp.watch(['js/*.js', './scss/*.scss'], gulp.series(['sass', 'scripts', 'eslint',]));
    gulp.watch('./*html').on("change", browserSync.reload);

});


gulp.task('default', gulp.series(['watch']));