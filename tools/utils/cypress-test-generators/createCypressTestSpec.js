const {readdirSync} = require('fs');
const chalk = require('chalk');

const {resolve, join} = require('path');
const difference = require('lodash.difference');
const {writeToFile} = require('../writeToFile');
const specTemplate = require('./TEMPLATE');

const getRootDir = () => resolve(__dirname, process.cwd());
const cypressFolder = './cypress/integration/e2e';
const websiteComponentPagesFolder = './packages/paste-website/src/pages';
const componentPageExcludeList = ['overview-page'];

/**
 * @file Utility Node.JS script that will generate cypress component spec files from a template to give basic coverage to component docs website pages.
 */

/**
 * Utility to generate file name from component name.
 *
 * @param {string} name
 * @returns {string} `fileName`
 * @example <caption>Example with component named "alert"</caption>
 * // returns "alert.spec.ts"
 * createFileName("alert");
 */
const createFileName = (name) => `${name.toLowerCase()}.spec.ts`;

/**
 * Async utility to create cypress test spec file for a page from the template.
 *
 * @param {string} targetName
 * @async
 */
const generateCypressSpecFromTemplate = async (targetName, targetType) => {
  const specContent = await specTemplate(targetName, targetType);

  const directoryPath = join(getRootDir(), cypressFolder, `/${targetType}`);

  const newFilePath = join(directoryPath, '/', createFileName(targetName));

  writeToFile(newFilePath, specContent, {});
};

/**
 * Utility to get list of items (e.g. components) that have docs pages in the website package.
 *
 * @param {string} targetType
 * @returns {string[]} [`name`]
 * @example <caption>Example for case where the only two files in `@paste-website/src/pages/components` are `alert.ts` and `alert-dialog.ts`</caption>
 * // returns ["alert", "alert-dialog"]
 * getListOfWebsiteEntitiesWithDocsPage();
 */
const getListOfWebsiteEntitiesWithDocsPage = (targetType) => {
  const pathToWebsitePages = join(getRootDir(), websiteComponentPagesFolder, `/${targetType}`);

  const result = readdirSync(pathToWebsitePages, {withFileTypes: true});

  // component pages are in directories with component name
  // filer out non-directory results
  return result.filter((dirent) => dirent.isDirectory()).map(({name}) => name);
};

/**
 * Utility to get list of items (e.g. components) that have cypress test specs.
 *
 * @param {string} targetType
 * @returns {string[]} [`name`]
 * @example <caption>If the only three files in `cypress/integration/e2e/components` are `alert.spec.ts`, `alert-dialog.spec.ts`, and `select.spec.ts`</caption>
 * // returns ["alert", "alert-dialog", "select"]
 * getListOfWebsitePagesWithCypressSpec();
 */
const getListOfWebsitePagesWithCypressSpec = (targetType) => {
  const pathToWebsitePages = join(getRootDir(), cypressFolder, `/${targetType}`);

  const fileNames = readdirSync(pathToWebsitePages);
  return fileNames.reduce((accum, curr) => {
    const componentName = curr.split('.spec.')[0];

    return componentPageExcludeList.includes(componentName) ? accum : [...accum, componentName];
  }, []);
};

/**
 * Utility that writes new test spec file for any component pages on in the website package that do not have a cypress test page.
 *
 * @example
 * <caption>If only cypress test is `alert.spec.ts` and docs page exist for `alert`, `alert-dialog`, and `select`</caption>
 * // generates test specs named `alert-dialog.spec.ts` and `select.spec.ts` from template;
 * getListOfWebsitePagesWithCypressSpec();
 */

const addBasicSpecForUncoveredPages = (targetType = process.env.TARGET_TYPE) => {
  // const itemsThatNeedACypressSpec = difference(
  //   getListOfWebsiteEntitiesWithDocsPage(targetType),
  //   getListOfWebsitePagesWithCypressSpec(targetType)
  // );

  const itemsThatNeedACypressSpec = getListOfWebsiteEntitiesWithDocsPage(targetType);

  if (itemsThatNeedACypressSpec.length !== 0) {
    console.log(
      chalk.magenta(
        `[Info]: running generateCypressSpecFromTemplate for ${
          itemsThatNeedACypressSpec.length
        } ${targetType}: ${itemsThatNeedACypressSpec.join(', ')}`
      )
    );

    itemsThatNeedACypressSpec.forEach(async (name) => {
      try {
        await generateCypressSpecFromTemplate(name, targetType);
        console.log(chalk.green(`${chalk.green.bold('[Success]')} Generated cypress spec for ${targetType} ${name}`));
      } catch (err) {
        console.log(
          chalk.yellow(
            `${chalk.yellow.bold('[Error]')}Unable to generate cypress spec for ${targetType} ${name}: %o`,
            err
          )
        );
        throw err;
      }
    });
  } else {
    console.log(chalk.white(`${chalk.white.bold('[Info]')}: no specs to generate; exiting`));
  }
};

addBasicSpecForUncoveredPages();
