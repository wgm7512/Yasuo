"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeedSpiner = exports.startSpinner = exports.failSpinner = void 0;

var _ora = _interopRequireDefault(require("ora"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var spinner = (0, _ora["default"])();

var startSpinner = function startSpinner(text) {
  var msg = "".concat(text, "...\n");
  spinner.start(msg);
  spinner.stopAndPersist({
    symbol: '✨',
    text: msg
  });
};

exports.startSpinner = startSpinner;

var succeedSpiner = function succeedSpiner(text) {
  spinner.stopAndPersist({
    symbol: '🎉',
    text: "".concat(text, "\n")
  });
};

exports.succeedSpiner = succeedSpiner;

var failSpinner = function failSpinner(text) {
  spinner.fail(_chalk["default"].red(text));
};

exports.failSpinner = failSpinner;