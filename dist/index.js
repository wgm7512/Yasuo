"use strict";

var _commander = require("commander");

var _create = _interopRequireDefault(require("./commands/create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 获取命令
function getCommands() {
  return [_create["default"]];
}

function initCommand(commands) {
  // 设置版本信息
  _commander.program.version('0.0.1');

  commands.forEach(function (item) {
    var command = item.command,
        description = item.description,
        action = item.action;

    _commander.program.command(command).description(description).action(action);
  }); // 获取命令行参数

  _commander.program.parse(process.argv);
}

function init() {
  // 获取
  var commands = getCommands(); // 初始化命令

  initCommand(commands);
}

init();