"use strict";

require('dotenv').config();

var _require = require('./wdio.shared.conf'),
    config = _require.config; // ==================
// Browserstack Credentials
// ==================


config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY; // ==================
// Specify Test Files
// ==================

config.specs = ['../test/specs/ios/demotest.bs.spec.js']; // ============
// Capabilities
// ============

config.capabilities = [{
  platformName: 'ios',
  'appium:platformVersion': '16',
  'appium:deviceName': 'iPhone 14',
  'appium:automationName': 'XCUITest',
  'appium:app': "bs://03dfacc583ff2bc191986c930c799842e0c5dfe9",
  'appium:autoGrantPermissions': true
} // {
//     platformName: 'Android',
//     'appium:platformVersion': '10.0',
//     'appium:deviceName': 'Samsung Galaxy S20',
//     'appium:automationName': 'UiAutomator2',
//     'appium:app': "bs://65eb3e273669793eec79c320162f3871848ab759",
//     'appium:autoGrantPermissions': true
// }
]; // Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.

config.services = ['browserstack'], exports.config = config;