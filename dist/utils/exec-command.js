"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = execCommand;

var _child_process = require("child_process");

var _util = require("util");

var _logs = require("./logs");

async function execCommand(command, params) {
  const execPromise = (0, _util.promisify)(_child_process.exec);
  (0, _logs.infoSpiner)(command);
  await execPromise(command, params);
  (0, _logs.infoSpiner)(`${command} 结束`);
}