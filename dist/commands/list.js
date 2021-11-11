"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = exports.default = void 0;
const list = [{
  name: 'api',
  url: "www.baidu.com"
}];
exports.list = list;
const listCommand = {
  command: 'list',
  description: '查看保存的所有应用',
  action: handleAction
};

function handleAction() {
  list.forEach(item => {
    console.log(item.name);
  });
}

var _default = listCommand;
exports.default = _default;