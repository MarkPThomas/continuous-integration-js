// Karma configuration
// Generated on Wed May 16 2018 00:08:40 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
    let configuration = {
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
          'src/**/*.js',
          'tests/**/*.jasmine.js'
        ],


        // list of files / patterns to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // Do not include tests or libraries
        preprocessors: {
          'src/**/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // coverage reporter generates the coverage
        // reporters: ['coverage', 'coveralls'],  // Currently coveralls seems to throw an exception with the browser. https://github.com/caitp/karma-coveralls
        reporters: ['progress', 'coverage'],

        // optionally, configure the reporter
        coverageReporter: {
            type: 'lcov',   // lcov or lcovonly ar required for generating lcov.info files
            dir: 'coverage/',
            subdir: 'reports/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // see https://docs.travis-ci.com/user/chrome
        // browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],

        // you can define custom flags
        // For security reasons, Google Chrome is unable to provide sandboxing when it is running in the container-based environment.
        customLaunchers: {
          ChromeHeadlessNoSandbox: {
              base: 'ChromeHeadless',
              flags: ['--no-sandbox']
          }
        },


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    };

    // Run a particular browser type depending on the run environment
    // We created a custom browser launcher that runs Chrome with the --no-sandbox option.
    // And we only use it if the tests are running in Travis.
    // See: https://swizec.com/blog/how-to-run-javascript-tests-in-chrome-on-travis/swizec/6647
    if (process.env.TRAVIS) {
        configuration.browsers = ['ChromeHeadlessNoSandbox'];
    } else {
        configuration.browsers = ['Chrome'];
    }

    config.set(configuration);
};
