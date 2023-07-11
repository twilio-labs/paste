const {getStoryContext} = require('@storybook/test-runner');
const {injectAxe, configureAxe, checkA11y} = require('axe-playwright');

const a11yConfig = {
  async preRender(page, context) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    // Get entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Allow individual stoies to opt out of axe-playwright tests by setting story parameters.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await configureAxe(page, {
      rules: [
        {
          // Page level test that states one main element is present. Not applicable for isolated components.
          id: 'landmark-unique',
          enabled: false,
        },
        {
          // Page level test that states one main element is present. Not applicable for isolated components.
          id: 'landmark-one-main',
          enabled: false,
        },
        {
          // Page level test that states one h1 element is present. Not applicable for isolated components.
          id: 'page-has-heading-one',
          enabled: false,
        },
        {
          // Page level test that states all page content must be contained by landmarks. Not applicable for isolated components.
          id: 'region',
          enabled: false,
        },
        {
          // Rule that dictates that long scrolling content should have a focusable element. Not applicable when we don't control the component children.
          id: 'scrollable-region-focusable',
          enabled: false,
        },
        // allow individual stories to configure axe-playwright rules by setting story parameters.
        ...(storyContext.parameters?.a11y?.config?.rules || []),
      ],
    });
    await checkA11y(page);
  },
};

module.exports = a11yConfig;
