const { src, dest, task } = require('gulp')
const debug = require("gulp-debug")
const del = require('del')
const image = require('gulp-image')
const webp = require('gulp-webp')
const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const svg = require('gulp-svg-sprite')

task('deleteImages', () => {
  return del(['dist/img'])
})

task('imgcompress', () => {
  return src('./src/img/**/*.{jpg,png}')
    .pipe(image())
    .pipe(dest('./dist/img/'))
    .pipe(debug({
        "title": "Imgcompress"
    }))
})

task('imageWebp', () => {
  return src('./src/img/**/*.{jpg,png}')
    .pipe(webp(imageminWebp({
      lossless: false,
      quality: 50,
      alphaQuality: 100
    })))
    .pipe(dest('dist/img'))
    .pipe(debug({
        "title": "ImageWebp"
    }))
})

task('svgSprites', () => {
  return src('./src/img/**/*.svg')
    .pipe(svg({
      shape: {
        dest: "intermediate-svg"
      },
      mode: {
        symbol: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(dest('dist/img/svg'))
    .pipe(debug({
        "title": "SvgSprites"
    }))
})
