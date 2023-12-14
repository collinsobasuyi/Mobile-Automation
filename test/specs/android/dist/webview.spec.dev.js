"use strict";

describe('Web Browser Access', function () {
  before(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it('Access external link and verify content in browser', function _callee2() {
    var url, addNoteText;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click());

          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click());

          case 4:
            _context2.next = 6;
            return regeneratorRuntime.awrap($('//*[@text="Like us on Facebook"]').click());

          case 6:
            _context2.t0 = console;
            _context2.next = 9;
            return regeneratorRuntime.awrap(driver.getContexts());

          case 9:
            _context2.t1 = _context2.sent;

            _context2.t0.log.call(_context2.t0, _context2.t1);

            _context2.next = 13;
            return regeneratorRuntime.awrap(driver.switchContext('WEBVIEW_chrome'));

          case 13:
            _context2.next = 15;
            return regeneratorRuntime.awrap(driver.getUrl());

          case 15:
            url = _context2.sent;
            expect(url).toContain('ColorNote'); // assert the cover image 
            // const coverImg = await $('.img.coverPhoto')
            // await expect(coverImg).toBeDisplayed()
            // Switch back to application

            _context2.next = 19;
            return regeneratorRuntime.awrap(driver.switchContext('NATIVE_APP'));

          case 19:
            _context2.next = 21;
            return regeneratorRuntime.awrap(driver.back());

          case 21:
            _context2.next = 23;
            return regeneratorRuntime.awrap($('//*[@text="Notes"]').click());

          case 23:
            _context2.next = 25;
            return regeneratorRuntime.awrap($('//*[@text="Add note"]'));

          case 25:
            addNoteText = _context2.sent;
            _context2.next = 28;
            return regeneratorRuntime.awrap(expect(addNoteText).toBeDisplayed());

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});