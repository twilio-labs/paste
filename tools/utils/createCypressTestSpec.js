const {readdirSync} = require('fs');
const {resolve, join} = require('path');
const difference = require('lodash.difference');
const {writeToFile} = require('./writeToFile');
const componentSpecTemplate = require('./TEMPLATE');

const getRootDir = () => resolve(__dirname, process.cwd());
const cypressFolder = './cypress/integration/e2e';
const websiteComponentPagesFolder = './packages/paste-website/src/pages/components';
const componentPageExcludeList = ['overview-page'];

/**
 * @file Utility Node.JS script that will generate cypress component spec files from a template to give basic coverage to component docs website pages.
 */

/**
 * Utility to generate file name from component name.
 *
 * @param {string} componentName
 * @returns {string} `fileName`
 * @example <caption>Example with component named "alert"</caption>
 * // returns "alert.spec.ts"
 * createFileName("alert");
 */
const createFileName = (componentName) => `${componentName.toLowerCase()}.spec.ts`;

/**
 * Async utility to create cypress test spec file for a component page from the template.
 *
 * @param {string} componentName
 * @async
 */
const generateCypressSpecFromTemplate = async (componentName) => {
  const componentSpecContent = await componentSpecTemplate(componentName);

  const componentTestsPath = join(getRootDir(), cypressFolder, '/components');

  const newFilePath = join(componentTestsPath, '/', createFileName(componentName));

  writeToFile(newFilePath, componentSpecContent, {});
};

/**
 * Utility to get list of components that have docs pages in the website package.
 *
 * @returns {string[]} `componentNames`
 * @example <caption>Example for case where the only two files in `@paste-website/src/pages/components` are `alert.ts` and `alert-dialog.ts`</caption>
 * // returns ["alert", "alert-dialog"]
 * getListOfWebsiteComponentsWithDocsPage();
 */
const getListOfWebsiteComponentsWithDocsPage = () => {
  const pathToWebsitePages = join(getRootDir(), websiteComponentPagesFolder);

  const componentNames = readdirSync(pathToWebsitePages);
  return componentNames;
};

/**
 * Utility to get list of components that have cypress test specs.
 *
 * @returns {string[]} `componentNames`
 * @example <caption>If the only three files in `cypress/integration/e2e/components` are `alert.spec.ts`, `alert-dialog.spec.ts`, and `select.spec.ts`</caption>
 * // returns ["alert", "alert-dialog", "select"]
 * getListOfWebsitePagesWithCypressSpec();
 */
const getListOfWebsitePagesWithCypressSpec = () => {
  const pathToWebsitePages = join(getRootDir(), cypressFolder, '/components');

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
const addBasicSpecForUncoveredComponentPages = () => {
  const listOfComponentsThatNeedCypressSpec = difference(
    getListOfWebsiteComponentsWithDocsPage(),
    getListOfWebsitePagesWithCypressSpec()
  );

  listOfComponentsThatNeedCypressSpec.forEach(async (componentName) => {
    try {
      await generateCypressSpecFromTemplate(componentName);
      console.log('success');
    } catch (err) {
      console.log(err); // do somthing with this.
    }
  });
};

addBasicSpecForUncoveredComponentPages();
