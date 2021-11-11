"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logs = require("../utils/logs");

var _list = require("./list");

const addCommand = {
  command: 'add <projectName> <url>',
  description: '保存自己的项目结构',
  action: handleAction
};

function handleAction(projectName, url) {
  const flag = _list.list.some(item => item.name === projectName && item.url === url);

  if (flag) (0, _logs.infoSpiner)("当前项目已存在！");

  _list.list.unshift({
    name: projectName,
    url
  });
}

var _default = addCommand;
exports.default = _default;