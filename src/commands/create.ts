import { ICommand } from "../types/command-type";
import downloadRepo from "../utils/download-repo";
import { startSpinner, succeedSpiner, failSpinner } from "../utils/logs";

const createCommand: ICommand = {
  command: 'create <projectName>',
  description: '创建一个 react 应用',
  action: handleCreateAction,
};

function handleCreateAction(projectName: string): void {
  startSpinner('模板下载中...');

  // https://github.com/chillley/EggGather.git
  // https://github.com/wgm7512/vue-lines-ellipsis.git

  downloadRepo('https://github.com/chillley/EggGather.git', projectName)
    .then(() => {
      succeedSpiner('下载成功！');
    })
    .catch((err) => {
      failSpinner(err);
    });
}

export default createCommand;