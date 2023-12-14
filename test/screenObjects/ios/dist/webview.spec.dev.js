"use strict";

describe('IOS Web Browser Access', function () {
  it('Working with dynamic webview', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap($('~Webview').click());

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(driver.getAlertText());

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(driver.getAlertTexts());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});