import { program } from 'commander';
import { ICommands } from "./types/command-type";
import createCommand from "./commands/create";

// 获取命令
function getCommands(): ICommands {
  return [
    createCommand,
  ];
}



function initCommand(commands: ICommands):void {
  // 设置版本信息
  program.version('0.0.1');

  commands.forEach((item) => {
    const { command, description, options, action } = item;
    program
    .command(command)
    .description(description)
    .action(action)
  });

  // 获取命令行参数
  program.parse(process.argv);
}


function init() {
  // 获取
  const commands: ICommands = getCommands();
  
  // 初始化命令
  initCommand(commands);
}

init();