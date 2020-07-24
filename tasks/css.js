const { src, dest, task } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const gcmq = require('gulp-group-css-media-queries')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')
const debug = require("gulp-debug")

task('css', () => {
  return src('./src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 5 versions', '> 1%'], { cascade: true }))
    .pipe(gcmq())
    .pipe(rename(function(path) {
      if ( path.dirname.indexOf('modules') !== -1 ) path.dirname = 'css-modules/'
      if ( path.dirname.indexOf('modules') === -1 ) path.dirname = ''
    }))
    .pipe(dest('dist/css/'))
    .pipe(cleanCSS())
    .pipe(rename(function(path) {
      console.log(path)
      if ( path.dirname.indexOf('modules') !== -1 ) path.dirname = 'min-css-modules/'
      path.extname = '.min.css'
    }))
    .pipe(dest('dist/css/'))
    .pipe(browserSync.stream())
    .pipe(debug({
      "title": "Css"
    }))
})
