"use strict";

var _todoList = _interopRequireDefault(require("../../screenObjects/ios/todo-list.screen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const ListScreen = require('../../screenObjects/ios/todo-list.screen')
describe('Todo List', function () {
  it('Create a Todo List', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_todoList["default"].CreateList.click());

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(_todoList["default"].ListNameInput.addValue('Things to do today'));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(_todoList["default"].CreateBtn.click());

          case 6:
            _context.t0 = regeneratorRuntime;
            _context.t1 = expect;
            _context.next = 10;
            return regeneratorRuntime.awrap(_todoList["default"].listNameField("Things to do today"));

          case 10:
            _context.t2 = _context.sent;
            _context.t3 = (0, _context.t1)(_context.t2).toBeExisting();
            _context.next = 14;
            return _context.t0.awrap.call(_context.t0, _context.t3);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});