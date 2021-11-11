const spawnAsync = require('@expo/spawn-async');
const chalk = require('chalk');

/**
 * Simple wrapper for spawnSync to handle failures
 *
 * @param {string} cmd command
 * @param {Array<T>} args arguments for command
 * @param {SpawnOptions} options spawn options
 * @return {Object} spawn result
 */
async function runCmd(cmd, args = [], options = {}) {
  // eslint-disable-next-line no-console
  console.log(chalk.yellow(`>> Running command: ${cmd} ${args.join(' ')}`));
  const result = await spawnAsync(cmd, args, options);
  return result;
}

// Takes a shell commands output and gets the JSON from stdout safely
function getJsonFromCmdResults(result) {
  if (result == null || result.stdout == null || result.stdout === '') {
    throw new Error(`Invalid result passed to processCmdJsonOutput.  Provided: ${JSON.stringify(result)}`);
  }

  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`Invalid JSON provided. Provided: ${JSON.stringify(result)}`);
  }
}

// Combines the above two functions into a single function
async function runCmdJson(cmd, args = [], options = {}) {
  return getJsonFromCmdResults(await runCmd(cmd, args, options));
}

module.exports = {runCmd, getJsonFromCmdResults, runCmdJson};
