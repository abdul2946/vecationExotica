import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);
// const browserSync = require("browser-sync")

gulp.task("buildcss", () => {
	gulp
		.src("./build/scss/**.scss")
		.pipe(autoPrefixer())
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./css/"));
});

