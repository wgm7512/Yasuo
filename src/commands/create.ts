import { ICommand } from "../types/command-type";

const createCommand: ICommand = {
  command: 'create <projectName>',
  description: '创建一个 react 应用',
  action: handleCreateAction,
}


function handleCreateAction(projectName) {
  console.log(projectName)
}


export default createCommand;