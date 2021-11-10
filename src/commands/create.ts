import { ICommand } from "../types/command-type";
import downloadRepo from "../utils/download-repo";
// import ora from "ora";
// import { startSpinner } from "../utils/logs";

const createCommand: ICommand = {
  command: 'create <projectName>',
  description: '创建一个 react 应用',
  action: handleCreateAction,
};

function handleCreateAction(projectName: string): void {
  console.log(projectName);

  // console.log(ora);

  // const loading = ora();
  // loading.start('模板下载中...');
  // startSpinner('模板下载中...');


  // https://github.com/chillley/EggGather.git
  // https://github.com/wgm7512/vue-lines-ellipsis.git

  downloadRepo('https://github.com/chillley/EggGather.git', projectName)
    .then((res) => {
      console.log(res);
      // spinner.color = 'yellow';
      // spinner.text = 'Loading rainbows';
      // loading.succeed('模板下载完成');
    })
    .catch((err) => {
      console.log(err);
      // loading.fail('模板下载失败');
    });
}

export default createCommand;