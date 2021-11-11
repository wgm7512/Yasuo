

import { exec } from "child_process";
import { promisify } from "util";
import { infoSpiner } from "./logs";

export default async function execCommand(command: string, params: object) {

  const execPromise = promisify(exec);

  infoSpiner(command);

  await execPromise(command, params);

  infoSpiner(`${command} 结束`);
}