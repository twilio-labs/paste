/*
 *.eslint/index.js
 * This file acts as the root for our Paste internal eslint plugin
 * Source: https://stevenpetryk.com/blog/custom-eslint-rules/
 */

const fs = require('fs');
const path = require('path');

const projectName = 'paste-internal';

/*
 * This allRuleFiles constant will include ALL the rules in our rules directory.
 * We create an array of these rule files by filtering out this index.js file and any test files.
 */
const allRuleFiles = fs
  .readdirSync(path.join(__dirname, './rules'))
  .filter((file) => file !== 'index.js' && !file.endsWith('test.js'));

/*
 * Create a config object for our plugin
 *
 * This config object is extended in our eslint config file: .eslintrc.js
 * The 'all' config includes all the rules in our rules directory.
 * To specify these rules, loop through the allRuleFiles constant and create an object matching eslint's syntax: {rule: rule ID}.
 * More information here: https://eslint.org/docs/user-guide/configuring/rules
 *
 */
const configs = {
  all: {
    plugins: [projectName],
    rules: Object.fromEntries(allRuleFiles.map((file) => [`${projectName}/${path.basename(file, '.js')}`, 'error'])),
  },
};

/*
 * Create rules (independently from the above configs) by looping through the allRuleFiles constant
 * and specifying the file paths in the format required by eslint.
 */
// eslint-disable-next-line global-require
const rules = Object.fromEntries(allRuleFiles.map((file) => [path.basename(file, '.js'), require(`./rules/${file}`)]));

module.exports = { configs, rules };
