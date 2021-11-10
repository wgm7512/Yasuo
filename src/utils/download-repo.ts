import downloadGit from 'download-git-repo';

/**
 * @param api 仓库地址
 * @param projectName 新建项目名称
 */
export default function downloadRepo(api: string, projectName: string) {
  return new Promise((resolve, reject) => {
    downloadGit(`direct:${api}`, projectName, { }, function (err) {
      if (err) reject(err);
      resolve(1);
    });
  });
}