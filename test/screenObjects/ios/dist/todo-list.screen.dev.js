"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListScreen =
/*#__PURE__*/
function () {
  function ListScreen() {
    _classCallCheck(this, ListScreen);
  }

  _createClass(ListScreen, [{
    key: "listNameField",
    value: function listNameField(name) {
      return $("~".concat(name));
    }
  }, {
    key: "CreateList",
    get: function get() {
      return $('//*[@name="Create list"]');
    }
  }, {
    key: "ListNameInput",
    get: function get() {
      return $('//*[@value="List Name"]');
    }
  }, {
    key: "CreateBtn",
    get: function get() {
      return $('~Create');
    }
  }]);

  return ListScreen;
}(); // module.exports = new ListScreen();


var _default = new ListScreen();

exports["default"] = _default;