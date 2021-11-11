"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = downloadRepo;

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param api 仓库地址
 * @param projectName 新建项目名称
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function downloadRepo(api, projectName) {
  return new Promise((resolve, reject) => {
    (0, _downloadGitRepo.default)(`direct:${api}#master`, projectName, {
      clone: true
    }, function (err) {
      if (err) reject(err);
      resolve(1);
    });
  });
}