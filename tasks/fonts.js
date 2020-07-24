const { series, parallel, src, dest, watch, task } = require('gulp')
const debug = require("gulp-debug")

task('fonts', () => {
  return src(['./src/fonts/*.ttf', './src/fonts/*.woff'])
    .pipe(dest('dist/fonts'))
    .pipe(debug({
        "title": "Fonts"
    }))
})
