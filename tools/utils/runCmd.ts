import spawnAsync from '@expo/spawn-async';
import type { SpawnResult } from '@expo/spawn-async';
import chalk from 'chalk';

/**
 * Simple wrapper for spawnSync to handle failures
 *
 * @param {string} cmd command
 * @param {Array<string>} args arguments for command
 * @param {SpawnOptions} options spawn options
 * @return {SpawnResult} spawn result
 */
export async function runCmd(cmd: string, args: Array<string> = [], options = {}): Promise<SpawnResult> {
  // eslint-disable-next-line no-console
  console.log(chalk.yellow(`>> Running command: ${cmd} ${args.join(' ')}`));
  // eslint-disable-next-line sonarjs/prefer-immediate-return
  const result = await spawnAsync(cmd, args, options);
  return result;
}

// Takes a shell commands output and gets the JSON from stdout safely
export function getJsonFromCmdResults(result: SpawnResult): JSON {
  if (result == null || result.stdout == null || result.stdout === '') {
    throw new Error(`Invalid result passed to processCmdJsonOutput.  Provided: ${JSON.stringify(result)}`);
  }

  try {
    return JSON.parse(result.stdout);
  } catch {
    throw new Error(`Invalid JSON provided. Provided: ${JSON.stringify(result)}`);
  }
}

// Combines the above two functions into a single function
export async function runCmdJson(cmd: string, args: Array<string> = [], options = {}): Promise<JSON> {
  return getJsonFromCmdResults(await runCmd(cmd, args, options));
}
