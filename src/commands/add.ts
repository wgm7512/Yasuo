import { ICommand } from "../types/command-type";
import { infoSpiner } from "../utils/logs";
import { list } from "./list";


const addCommand: ICommand = {
  command: 'add <projectName> <url>',
  description: '保存自己的项目结构',
  action: handleAction,
};

function handleAction(projectName: string, url: string): void {
  const flag = list.some(item => item.name === projectName && item.url === url);
  if (flag) infoSpiner("当前项目已存在！");

  list.unshift({
    name: projectName,
    url
  });
}

export default addCommand;