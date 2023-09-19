const camelCase = require('lodash/camelCase');
const startCase = require('lodash/startCase');

module.exports = function (plop) {
  plop.setHelper('export', (txt) => `export {${startCase(camelCase(txt)).replace(/ /g, '')}}`);
  plop.setHelper('import', (txt) => `import {${startCase(camelCase(txt)).replace(/ /g, '')}}`);
  plop.setGenerator('create-package', {
    description: 'Creates a new component package',
    prompts: [
      {
        type: 'list',
        name: 'component-type',
        message: 'What type of component package?',
        choices: ['components', 'layout', 'primitives'],
      },
      {
        type: 'input',
        name: 'component-name',
        message: 'What is the component package name?',
      },
      {
        type: 'list',
        name: 'component-category',
        message: 'What is the component package category?',
        choices: [
          'data display',
          'feedback',
          'interaction',
          'layout',
          'navigation',
          'overlays',
          'typography',
          'user input',
        ],
      },
      {
        type: 'list',
        name: 'component-status',
        message: 'What is the component package status?',
        choices: ['alpha', 'beta', 'production'],
      },
      {
        type: 'input',
        name: 'component-description',
        message: 'What is the component package description?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/paste-core/{{component-type}}/{{kebabCase component-name}}/src/index.tsx',
        templateFile: 'tools/plop-templates/component-index.hbs',
      },
      {
        type: 'add',
        path: 'packages/paste-core/{{component-type}}/{{kebabCase component-name}}/src/{{pascalCase component-name}}.tsx',
        templateFile: 'tools/plop-templates/component-component.hbs',
      },
      {
        type: 'add',
        path: 'packages/paste-core/{{component-type}}/{{kebabCase component-name}}/__tests__/index.spec.tsx',
        templateFile: 'tools/plop-templates/component-tests.hbs',
      },
      {
        type: 'add',
        path: 'packages/paste-core/{{component-type}}/{{kebabCase component-name}}/stories/index.stories.tsx',
        templateFile: 'tools/plop-templates/component-stories.hbs',
      },
      {
        type: 'add',
        path: 'packages/paste-core/{{component-type}}/{{kebabCase component-name}}/build.js',
        templateFile: 'tools/plop-templates/build.hbs',
      },
      {
        type: 'add',
        path: 'packages/paste-core/{{component-type}}/{{kebabCase component-name}}/package.json',
        templateFile: 'tools/plop-templates/package.hbs',
      },
      {
        type: 'add',
        path: 'packages/paste-core/{{component-type}}/{{kebabCase component-name}}/tsconfig.json',
        templateFile: 'tools/plop-templates/tsconfig.hbs',
      },
    ],
  });
};
