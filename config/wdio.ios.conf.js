const path = require('path');
const { config } = require('./wdio.shared.conf')

// ====================
// Runner Configuration
// ====================

config.port = 4723;

// ==================
// Specify Test Files
// ==================
config.specs = [
    '../test/specs/ios/webview*.js'
];


// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'ios',
        'appium:platformVersion': '16.2',
        'appium:deviceName': 'iPhone 14',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/wdioNativeDemoApp.app')

    }

]

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = [
        ['appium',
            {
                args: {
                    relaxedSecurity: true
                },
                logPath: './'
            }
        ]
    ];

exports.config = config;
