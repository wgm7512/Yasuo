import ora from 'ora';
import chalk from 'chalk';

const spinner = ora();

export const startSpinner = (text?: string) => {
  const msg = `${text}...\n`;
  spinner.start(msg);
};

export const infoSpiner = (text: string) => {
  spinner.info(chalk.cyan(`\n${text}\n`));
};

export const indentSpiner = (text: string) => {
  chalk.whiteBright(text);
};

export const succeedSpiner = (text?: string) => {
  spinner.stopAndPersist({
    symbol: '🎉',
    text: `${text}\n`
  });
};

export const failSpinner = (text?: string) => {
  spinner.fail( `${text}\n`);
};
