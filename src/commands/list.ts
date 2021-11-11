import { ICommand } from "../types/command-type";
import { getCwd, dirExist } from "../utils/check-mthods";
import { infoSpiner, indentSpiner } from "../utils/logs";

interface IItem {
  name: string,
  url: string
}

type IList = IItem[];

export const list: IList = [
  {
    name: 'api',
    url: "www.baidu.com"
  }
];

const listCommand: ICommand = {
  command: 'list',
  description: '查看保存的所有应用',
  action: handleAction,
};

function handleAction(): void {
  list.forEach((item) => {
    console.log(item.name);
  });
}

export default listCommand;