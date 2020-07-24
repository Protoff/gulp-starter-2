const { src, dest, task } = require('gulp')
const pug = require('gulp-pug')
const browserSync = require('browser-sync')
const debug = require("gulp-debug")

task('html', () => {
  return src('./src/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(dest('dist/'))
    .pipe(browserSync.stream())
    .pipe(debug({
      "title": "Html"
    }))
})
