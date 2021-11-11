"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _downloadRepo = _interopRequireDefault(require("../utils/download-repo"));

var _checkMthods = require("../utils/check-mthods");

var _execCommand = _interopRequireDefault(require("../utils/exec-command"));

var _path = require("path");

var _logs = require("../utils/logs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCommand = {
  command: 'create <projectName>',
  description: '创建一个 react 应用',
  action: handleAction
};

function handleAction(projectName) {
  // 1. 安装之前先判断当前目录是否存在
  const isExist = (0, _checkMthods.dirExist)((0, _checkMthods.getCwd)(), projectName);

  if (isExist) {
    (0, _logs.failSpinner)("该项目已存在！");
    return;
  }

  (0, _logs.startSpinner)('模板下载中');
  (0, _downloadRepo.default)('https://github.com/wgm7512/vue-lines-ellipsis.git', projectName).then(() => {
    (0, _execCommand.default)(`git init`, {
      cwd: (0, _path.join)((0, _checkMthods.getCwd)(), projectName)
    });
    (0, _execCommand.default)(`npm install`, {
      cwd: (0, _path.join)((0, _checkMthods.getCwd)(), projectName)
    });
    (0, _logs.succeedSpiner)('下载成功！');
  }).catch(err => {
    (0, _logs.failSpinner)(err);
  });
}

var _default = createCommand;
exports.default = _default;