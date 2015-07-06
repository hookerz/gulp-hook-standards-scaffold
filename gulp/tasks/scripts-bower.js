/**
 * Merges all ( bower ) javascript files into one js file using bower.
 * @tasks/scripts-bower
 */

'use strict';

var bower = require('main-bower-files');
var concat = require('gulp-concat');
var concatsource = require('gulp-concat-sourcemap');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

/**
 * @param gulp - function
 * @param bs - Browser sync instance
 * @param options - object
 * options.dist : Destination directory for file output.
 * @param flags - object
 * flags.minify : boolean
 * flags.sourcemap : boolean
 * @returns {Function}
 */
module.exports = function( gulp, bs, options, flags ) {

  return function() {

    var mainBowerFiles;

    try {
      mainBowerFiles = bower({debug: true, paths: '.'});
    } catch (error) {
      gutil.log(error.message);
      return;
    }

    return gulp.src(mainBowerFiles)
      .pipe(flags.minify ? streamify(uglify()) : gutil.noop())
      .pipe(flags.sourcemap ? concatsource('bower.js', {sourcesContent: true}) : concat('bower.js'))
      .pipe(gulp.dest(options.dist))
      .pipe(bs.stream());

  };

};
