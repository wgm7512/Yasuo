import { readdirSync } from "fs";

/**
 * 获取当前命令行路径
 */
export function getCwd(): string {
  return process.cwd();
}

/**
 * 
 */
export function dirExist(path: string, dirName: string): boolean {

  const paths = readdirSync(path);
  if (!paths) return false;

  const result = paths?.some((item) => item === dirName);
  return result;
}