"use strict";

describe('IOS Web Browser Access', function () {
  xit('Working with dynamic webview', function _callee() {
    var contexts, subtitleTxt;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap($('~Webview').click());

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(driver.getContext());

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(driver.pause(5000));

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap(driver.getContexts());

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap(driver.pause(5000));

          case 10:
            _context.next = 12;
            return regeneratorRuntime.awrap(driver.getContexts());

          case 12:
            contexts = _context.sent;
            _context.next = 15;
            return regeneratorRuntime.awrap(driver.switchContext(contexts[1]));

          case 15:
            _context.next = 17;
            return regeneratorRuntime.awrap($('.hero__subtitle'));

          case 17:
            subtitleTxt = _context.sent;
            _context.next = 20;
            return regeneratorRuntime.awrap(expect(subtitleTxt).toHaveTextContaining('automation'));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  xit('Working with dynamic webview', function _callee3() {
    var contexts, subtitleTxt, webdriverTxt;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap($('~Webview').click());

          case 2:
            _context3.next = 4;
            return regeneratorRuntime.awrap(driver.waitUntil(function _callee2() {
              var contexts;
              return regeneratorRuntime.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return regeneratorRuntime.awrap(driver.getContexts());

                    case 2:
                      contexts = _context2.sent;
                      return _context2.abrupt("return", contexts.length > 1);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            }, {
              timeout: 300000,
              timeoutMsg: 'Timed out awaiting for another context'
            }));

          case 4:
            // get all the contexts
            driver.pause(50000);
            _context3.next = 7;
            return regeneratorRuntime.awrap(driver.getContexts());

          case 7:
            contexts = _context3.sent;
            driver.pause(50000); // switch to the webview context

            _context3.next = 11;
            return regeneratorRuntime.awrap(driver.switchContext(contexts[1]));

          case 11:
            driver.pause(50000); // assertion

            _context3.next = 14;
            return regeneratorRuntime.awrap($('.hero__subtitle'));

          case 14:
            subtitleTxt = _context3.sent;
            _context3.next = 17;
            return regeneratorRuntime.awrap(expect(subtitleTxt).toHaveTextContaining('automation'));

          case 17:
            _context3.next = 19;
            return regeneratorRuntime.awrap(driver.switchContext('NATIVE_APP'));

          case 19:
            _context3.next = 21;
            return regeneratorRuntime.awrap($('~Home').click());

          case 21:
            _context3.next = 23;
            return regeneratorRuntime.awrap($('//*[@name="WEBDRIVER"]'));

          case 23:
            webdriverTxt = _context3.sent;
            _context3.next = 26;
            return regeneratorRuntime.awrap(expect(webdriverTxt).toBeDisplayed());

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  it('Working with dynamic webview', function _callee6() {
    var contexts, subtitleTxt, webdriverTxt;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap($('~Webview').click());

          case 2:
            _context6.next = 4;
            return regeneratorRuntime.awrap(driver.waitUntil(function _callee4() {
              var contexts;
              return regeneratorRuntime.async(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(driver.getContexts());

                    case 2:
                      contexts = _context4.sent;
                      return _context4.abrupt("return", contexts.length > 1);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              });
            }, {
              timeout: 300000,
              timeoutMsg: 'Timed out awaiting for another context'
            }));

          case 4:
            _context6.next = 6;
            return regeneratorRuntime.awrap(driver.getContexts());

          case 6:
            contexts = _context6.sent;
            _context6.next = 9;
            return regeneratorRuntime.awrap(driver.switchContext(contexts[1]));

          case 9:
            _context6.next = 11;
            return regeneratorRuntime.awrap(driver.waitUntil(function _callee5() {
              var elements;
              return regeneratorRuntime.async(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap($$('.hero__subtitle'));

                    case 2:
                      elements = _context5.sent;
                      return _context5.abrupt("return", elements.length > 0);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            }, {
              timeout: 100000,
              timeoutMsg: 'Element .hero__subtitle not found'
            }));

          case 11:
            _context6.next = 13;
            return regeneratorRuntime.awrap($('.hero__subtitle'));

          case 13:
            subtitleTxt = _context6.sent;
            _context6.next = 16;
            return regeneratorRuntime.awrap(expect(subtitleTxt).toHaveTextContaining('automation'));

          case 16:
            _context6.next = 18;
            return regeneratorRuntime.awrap(driver.switchContext('NATIVE_APP'));

          case 18:
            _context6.next = 20;
            return regeneratorRuntime.awrap($('~Home').click());

          case 20:
            _context6.next = 22;
            return regeneratorRuntime.awrap($('//*[@name="WEBDRIVER"]'));

          case 22:
            webdriverTxt = _context6.sent;
            _context6.next = 25;
            return regeneratorRuntime.awrap(expect(webdriverTxt).toBeDisplayed());

          case 25:
          case "end":
            return _context6.stop();
        }
      }
    });
  });
});