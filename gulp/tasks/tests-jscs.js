/**
 * Runs jscs tests.
 * @tasks/test-jscs
 */

'use strict';

var jscs = require('gulp-jscs');

/**
 * @param gulp - function
 * @param options - object
 * options.src : Directory to delete.
 * options.mocha.config : Object - TODO : Explain the config options for Mocha
 * @returns {Function}
 */
module.exports = function( gulp, options ) {

  return function() {

    return gulp.src( options.src )
      .pipe(jscs());

  };

};
