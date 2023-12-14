"use strict";

describe('Todo List', function () {
  it('Create a Todo List', function _callee() {
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
          case "end":
            return _context.stop();
        }
      }
    });
  });
});