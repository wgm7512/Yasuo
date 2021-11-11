"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _downloadRepo = _interopRequireDefault(require("../utils/download-repo"));

var _logs = require("../utils/logs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCommand = {
  command: 'create <projectName>',
  description: '创建一个 react 应用',
  action: handleCreateAction
};

function handleCreateAction(projectName) {
  (0, _logs.startSpinner)('模板下载中...'); // https://github.com/chillley/EggGather.git
  // https://github.com/wgm7512/vue-lines-ellipsis.git

  (0, _downloadRepo.default)('https://github.com/chillley/EggGather.git', projectName).then(() => {
    (0, _logs.succeedSpiner)('下载成功！');
  }).catch(err => {
    (0, _logs.failSpinner)(err);
  });
}

var _default = createCommand;
exports.default = _default;