var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("Hooray");
});

gulp.task('html', function(){
    console.log("Hello");
});

gulp.task('watch', function() {
   
   watch("index.html", function() {
       gulp.start('html');
   }) 
})