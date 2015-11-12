import Gulp from 'gulp'
import Babel from 'gulp-babel'
import Config from './kedge.config.js'

Gulp.task('babel', () => {
  let path = Config.src.js

  return Gulp.src(path)
    .pipe(Babel())
    .pipe(Gulp.dest(Config.dist))
});

Gulp.task('watch', () => {
  Gulp.watch(Config.js, ['babel'])
})

Gulp.task('default', ['babel', 'watch'])