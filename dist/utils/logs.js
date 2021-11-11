"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeedSpiner = exports.startSpinner = exports.infoSpiner = exports.indentSpiner = exports.failSpinner = void 0;

var _ora = _interopRequireDefault(require("ora"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const spinner = (0, _ora.default)();

const startSpinner = text => {
  const msg = `${text}...\n`;
  spinner.start(msg);
};

exports.startSpinner = startSpinner;

const infoSpiner = text => {
  spinner.info(_chalk.default.cyan(`\n${text}\n`));
};

exports.infoSpiner = infoSpiner;

const indentSpiner = text => {
  _chalk.default.whiteBright(text);
};

exports.indentSpiner = indentSpiner;

const succeedSpiner = text => {
  spinner.stopAndPersist({
    symbol: '🎉',
    text: `${text}\n`
  });
};

exports.succeedSpiner = succeedSpiner;

const failSpinner = text => {
  spinner.fail(`${text}\n`);
};

exports.failSpinner = failSpinner;