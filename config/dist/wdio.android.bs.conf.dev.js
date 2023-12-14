"use strict";

require('dotenv').config();

var appDetails = require('./../appConfig');

var _require = require('./wdio.shared.conf'),
    config = _require.config; // ==================
// Browserstack Credentials
// ==================


config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY; // ==================
// Specify Test Files
// ==================

config.specs = ['../test/specs/android/add-note-screen.spec.js']; // ============
// Capabilities
// ============

config.capabilities = [{
  platformName: 'Android',
  'appium:platformVersion': '13.0',
  'appium:deviceName': 'Samsung Galaxy S23 Ultra',
  'appium:automationName': 'UiAutomator2',
  'appium:app': appDetails.appId,
  // 'appium:app': "bs://65eb3e273669793eec79c320162f3871848ab759",
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