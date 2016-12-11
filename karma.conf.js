module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'jasmine'],
        files: [
            'spec/**/*_spec.ts'
        ],
        exclude: [],
        preprocessors: {
            'spec/**/*.ts': ['browserify','coverage']
        },
        browserify: {
            debug: true,
            plugin: [['tsify', {target: 'es3'}]]
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browserDisconnectTimeout: 10000, 
        browserDisconnectTolerance: 1,
        browserNoActivityTimeout: 4 * 60 * 1000,
        captureTimeout: 4 * 60 * 1000,
        browserStack: {
            username: "",
            accessKey: "",
            project: "build-process",
            name: "Karma test runner",
            build: "Test",
            pollingTimeout: 5000,
            timeout: 1800 // default 300
        },
        coverageReporter: {
            type: 'text'
        },
        plugins : [
            'karma-coverage',
            'karma-jasmine',
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],        
        customLaunchers: {
            ie8: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "XP",
                browser: "ie",
                browser_version: "8"
            },
            ie9: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "7",
                browser: "ie",
                browser_version: "9"
            },
            ie10: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "7",
                browser: "ie",
                browser_version: "10"
            },
            ie11: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "8.1",
                browser: "ie",
                browser_version: "11"
            },
            edge: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "10",
                browser: "edge",
                browser_version: "latest"
            },
            firefox: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "10",
                browser: "firefox",
                browser_version: "latest"
            },
            chrome: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "10",
                browser: "chrome",
                browser_version: "latest"
            },
            opera: {
                base: "BrowserStack",
                os: "Windows",
                os_version: "10",
                browser: "opera",
                browser_version: "latest"
            },
            safari: {
                base: "BrowserStack",
                os: "OSX",
                os_version: "Yosemite",
                browser: "safari",
                browser_version: "8"
            },
            android_4: {
                base: "BrowserStack",
                browser : "android",
                os: "ANDROID",
                os_version: "4.0",
                device: "HTC One X"
            },
            android_4_1: {
                base: "BrowserStack",
                browser : "android",
                os: "ANDROID",
                os_version: "4.1",
                device: "Motorola Razr Maxx HD"
            },
            android_4_2: {
                base: "BrowserStack",
                browser : "android",
                os: "ANDROID",
                os_version: "4.2",
                device: "Google Nexus 4"
            },
            android_4_3: {
                base: "BrowserStack",
                browser : "android",
                os: "ANDROID",
                os_version: "4.3",
                device: "Samsung Galaxy S4"
            },
            android_4_4: {
                base: "BrowserStack",
                browser : "android",
                os: "ANDROID",
                os_version: "4.4",
                device: "Samsung Galaxy S5"
            },
            android_5: {
                base: "BrowserStack",
                browser : "android",
                os: "ANDROID",
                os_version: "5.0",
                device: "Google Nexus 5"
            },
            ios_5_1: {
                base: "BrowserStack",
                browser : "ios",
                os: "IOS",
                os_version: "5.1",
                device: "iPhone 4S"
            },
            ios_6: {
                base: "BrowserStack",
                browser : "ios",
                os: "IOS",
                os_version: "6.0",
                device: "iPhone 5"
            },
            ios_7: {
                base: "BrowserStack",
                browser : "ios",
                os: "IOS",
                os_version: "7.0",
                device: "iPhone 5S"
            },
            ios_8_3: {
                base: "BrowserStack",
                browser : "ios",
                os: "IOS",
                os_version: "8.3",
                device: "iPhone 6 Plus"
            }
        },
        browsers: ['PhantomJS'],
        singleRun: false
    })
}

