import { ICommand } from "../types/command-type";
import downloadRepo from "../utils/download-repo";
import { getCwd, dirExist } from "../utils/check-mthods";
import execCommand from "../utils/exec-command";
import { join } from "path";
import { startSpinner, succeedSpiner, failSpinner } from "../utils/logs";

const createCommand: ICommand = {
  command: 'create <projectName>',
  description: '创建一个 react 应用',
  action: handleAction,
};

function handleAction(projectName: string): void {
  // 1. 安装之前先判断当前目录是否存在
  const isExist = dirExist(getCwd(), projectName);

  if (isExist) {
    failSpinner("该项目已存在！");
    return;
  }

  startSpinner('模板下载中');

  downloadRepo('https://github.com/wgm7512/vue-lines-ellipsis.git', projectName)
    .then(() => {
      
      execCommand(`git init`, { cwd: join(getCwd(), projectName) });
      execCommand(`npm install`, { cwd: join(getCwd(), projectName) });

      succeedSpiner('下载成功！');
    })
    .catch((err) => {
      failSpinner(err);
    });
}

export default createCommand;