const {readdirSync} = require('fs');
const {resolve, join} = require('path');
const difference = require('lodash.difference');
const {writeToFile} = require('./writeToFile');
const componentSpecTemplate = require('./TEMPLATE');

const getRootDir = () => resolve(__dirname, process.cwd());
const cypressFolder = './cypress/integration/e2e';
const websiteComponentPagesFolder = './packages/paste-website/src/pages/components';
const componentPageExcludeList = ['overview-page'];

const generateCypressSpecFromTemplate = async (componentName) => {
  const componentSpecContent = await componentSpecTemplate(componentName);

  const createFileName = (name) => `${name.toLowerCase()}.spec.ts`;

  const componentTestsPath = join(getRootDir(), cypressFolder, '/components');

  const newFilePath = join(componentTestsPath, '/', createFileName(componentName));

  writeToFile(newFilePath, componentSpecContent, {});
};

const getListOfWebsiteComponentsWithDocsPage = () => {
  const pathToWebsitePages = join(getRootDir(), websiteComponentPagesFolder);

  return readdirSync(pathToWebsitePages);
};

const getListOfWebsitePagesWithCypressSpec = () => {
  const pathToWebsitePages = join(getRootDir(), cypressFolder, '/components');

  const fileNames = readdirSync(pathToWebsitePages);
  return fileNames.reduce((accum, curr) => {
    const componentName = curr.split('.spec.')[0];

    return componentPageExcludeList.includes(componentName) ? accum : [...accum, componentName];
  }, []);
};

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
