"use strict";

describe('Todo Item', function () {
  it('Create a Todo Item', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap($('//*[@name="Create list"]').click());

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap($('//*[@value="List Name"]').addValue('Things to do today'));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap($('~Create').click());

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap(expect($("~Things to do today")).toBeExisting());

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap($('~Things to do today').click());

          case 10:
            _context.next = 12;
            return regeneratorRuntime.awrap($('//*[@name="Create item"]').click());

          case 12:
            _context.next = 14;
            return regeneratorRuntime.awrap($('//*[@value="Title"]').addValue('Buy Groceries'));

          case 14:
            _context.next = 16;
            return regeneratorRuntime.awrap($('//*[@value="Due"]').click());

          case 16:
            _context.next = 18;
            return regeneratorRuntime.awrap($('~Date Picker').click());

          case 18:
            _context.next = 20;
            return regeneratorRuntime.awrap(driver.pause(3000));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});