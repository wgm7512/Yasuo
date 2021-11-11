interface IActionType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...rest: any[]): void;
}

export interface ICommand {
  command: string,
  description: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[];
  action: IActionType
}



export type ICommands = ICommand[];