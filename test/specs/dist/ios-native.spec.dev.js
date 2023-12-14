"use strict";

describe('iOS Native Features', function () {
  it('Working with alert box', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap($('~Alert Views').click());

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap($('~Okay / Cancel').click());

          case 4:
            _context.t0 = console;
            _context.next = 7;
            return regeneratorRuntime.awrap(driver.getAlertText());

          case 7:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            _context.next = 11;
            return regeneratorRuntime.awrap(driver.dismissAlert());

          case 11:
            _context.next = 13;
            return regeneratorRuntime.awrap(expect($('~OK')).not.ToExist());

          case 13:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it('Working with scrollable elemnt, Vertical Scrolling', function _callee2() {
    var redPicker, bluePicker;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap($('~Picker View').click());

          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap($('~Red color component value'));

          case 4:
            redPicker = _context2.sent;
            _context2.next = 7;
            return regeneratorRuntime.awrap($('~Blue color component value'));

          case 7:
            bluePicker = _context2.sent;
            _context2.next = 10;
            return regeneratorRuntime.awrap(driver.execute('mobile: scroll', {
              element: redPicker.elementId,
              direction: "down"
            }));

          case 10:
            _context2.next = 12;
            return regeneratorRuntime.awrap(driver.execute('mobile: scroll', {
              element: bluePicker.elementId,
              direction: "up"
            }));

          case 12:
            _context2.next = 14;
            return regeneratorRuntime.awrap(driver.pause(3000));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  it.only('Working with picker view', function _callee3() {
    var redPicker, greenPicker, bluePicker;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap($('~Picker View').click());

          case 2:
            _context3.next = 4;
            return regeneratorRuntime.awrap($('~Red color component value'));

          case 4:
            redPicker = _context3.sent;
            _context3.next = 7;
            return regeneratorRuntime.awrap($('~Green color component value'));

          case 7:
            greenPicker = _context3.sent;
            _context3.next = 10;
            return regeneratorRuntime.awrap($('~Blue color component value'));

          case 10:
            bluePicker = _context3.sent;
            _context3.next = 13;
            return regeneratorRuntime.awrap(redPicker.addValue('125'));

          case 13:
            _context3.next = 15;
            return regeneratorRuntime.awrap(greenPicker.addValue('0'));

          case 15:
            _context3.next = 17;
            return regeneratorRuntime.awrap(bluePicker.addValue('125'));

          case 17:
            _context3.next = 19;
            return regeneratorRuntime.awrap(driver.pause(3000));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
});