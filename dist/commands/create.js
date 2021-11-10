"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _downloadRepo = _interopRequireDefault(require("../utils/download-repo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ora from "ora";
// import { startSpinner } from "../utils/logs";
var createCommand = {
  command: 'create <projectName>',
  description: '创建一个 react 应用',
  action: handleCreateAction
};

function handleCreateAction(projectName) {
  console.log(projectName); // console.log(ora);
  // const loading = ora();
  // loading.start('模板下载中...');
  // startSpinner('模板下载中...');
  // https://github.com/chillley/EggGather.git
  // https://github.com/wgm7512/vue-lines-ellipsis.git

  (0, _downloadRepo["default"])('https://github.com/chillley/EggGather.git', projectName).then(function (res) {
    console.log(res); // spinner.color = 'yellow';
    // spinner.text = 'Loading rainbows';
    // loading.succeed('模板下载完成');
  })["catch"](function (err) {
    console.log(err); // loading.fail('模板下载失败');
  });
}

var _default = createCommand;
exports["default"] = _default;