import downloadGit from 'download-git-repo';

/**
 * @param api 仓库地址
 * @param projectName 新建项目名称
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function downloadRepo(api: string, projectName: string): Promise<any> {
  return new Promise((resolve, reject) => {
    downloadGit(`direct:${api}#master`, projectName, { clone: true }, function (err) {
      if (err) reject(err);
      resolve(1);
    });
  });
}