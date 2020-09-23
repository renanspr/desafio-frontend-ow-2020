const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("image", async function() {
  gulp
    .src("src/assets/resources/icons/*")
    .pipe(imagemin())
    .on("error", console.log)
    .pipe(gulp.dest("src/assets/resourcesmin/icons"));
});
