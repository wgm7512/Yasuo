interface IActionType {
  (...rest: any[]): void;
}

export interface ICommand {
  command: string,
  description: string,
  options?: any[];
  action: IActionType;
}



export type ICommands = ICommand[];