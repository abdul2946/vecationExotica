"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const browserSync = require("browser-sync")



function build() {
	return gulp
		.src("./build/scss/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./css/"));
}

function watchTask() {
	gulp.watch("./build/scss/*.scss", compilesass);
}

exports.default = gulp.series(build,watchTask)