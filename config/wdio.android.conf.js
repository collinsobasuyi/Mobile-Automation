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

    '../test/specs/android/webview*.js'
];


// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Galaxy S23 Ultra',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote_Notepad.apk'),
        'appium:autoGrantPermissions': true
    }

]

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
// config.services = ['appium'],
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
