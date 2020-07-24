const { series, parallel, watch } = require('gulp')
const requireDir = require("require-dir")
const del = require('del')
const browserSync = require('browser-sync')


function deleteDist() {
  return del('dist')
}

requireDir("./tasks/")

exports.develop = series(deleteDist, parallel('css', 'javascript','js-libs', 'html', 'imgcompress', 'imageWebp', 'svgSprites', 'fonts'))
exports.start = series(parallel('css', 'javascript', 'html'))
exports.build = series(deleteDist, parallel('css', 'javascript','js-libs' , 'html', 'imgcompress', 'imageWebp', 'svgSprites', 'fonts'))
exports.images = series('deleteImages', parallel('imgcompress', 'imageWebp', 'svgSprites'))
exports.fonts = series('fonts')
exports.smartGrid = series('smart-grid')

exports.default = function () {
  exports.start()
  browserSync.init({
    server: "./dist",
    open: false,
    port: 3333
  });
  watch('src/**/*.sass', parallel('css'))
  watch('src/**/*.js', parallel('javascript'))
  watch('src/**/*.pug', parallel('html'))
}
