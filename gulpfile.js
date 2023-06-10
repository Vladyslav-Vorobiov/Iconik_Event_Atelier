"use strict";
let gulp = require("gulp");
let sass = require("gulp-sass")(require("sass"));
let cleanCSS = require("gulp-clean-css");
let autoprefixer = require("gulp-autoprefixer");
let rename = require("gulp-rename");
let sourcemaps = require("gulp-sourcemaps");

function buildStyles() {
  return gulp
    .src(`./scss/index.scss`)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ["node_modules"],
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest(`./styles`))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write(`./`))
    .pipe(gulp.dest(`./styles`));
}

exports.buildStyles = buildStyles;
exports.default = async function () {
  gulp.watch(`./scss/**/*.scss`, gulp.series(buildStyles));
};
