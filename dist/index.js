"use strict";

var _commander = require("commander");

var _create = _interopRequireDefault(require("./commands/create"));

var _list = _interopRequireDefault(require("./commands/list"));

var _add = _interopRequireDefault(require("./commands/add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取命令
function getCommands() {
  return [_create.default, _list.default, _add.default];
}

function initCommand(commands) {
  // 设置版本信息
  _commander.program.version('0.0.1');

  commands.forEach(item => {
    const {
      command,
      description,
      action
    } = item;

    _commander.program.command(command).description(description).action(action);
  }); // 获取命令行参数

  _commander.program.parse(process.argv);
}

function init() {
  // 获取
  const commands = getCommands(); // 初始化命令

  initCommand(commands);
}

init();