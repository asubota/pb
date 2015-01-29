'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['sinon', 'mocha', 'chai'],

    browsers : ['PhantomJS'],

    reporters: ['mocha'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-sinon',
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter'
    ],
  });
};
