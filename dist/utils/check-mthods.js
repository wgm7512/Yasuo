"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dirExist = dirExist;
exports.getCwd = getCwd;

var _fs = require("fs");

/**
 * 获取当前命令行路径
 */
function getCwd() {
  return process.cwd();
}
/**
 * 
 */


function dirExist(path, dirName) {
  const paths = (0, _fs.readdirSync)(path);
  if (!paths) return false;
  const result = paths === null || paths === void 0 ? void 0 : paths.some(item => item === dirName);
  return result;
}