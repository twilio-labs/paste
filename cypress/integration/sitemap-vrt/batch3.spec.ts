// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Full Site VRT', function () {
  describe('Visual regression tests', () => {
    it('vrt /core/changelog/', () => {
      cy.visualRegressionTestUrl({url: '/core/changelog/', testName: '/core/changelog/'});
    });
    it('vrt /core/changing-theme/', () => {
      cy.visualRegressionTestUrl({url: '/core/changing-theme/', testName: '/core/changing-theme/'});
    });
    it('vrt /components/table/', () => {
      cy.visualRegressionTestUrl({url: '/components/table/', testName: '/components/table/'});
    });
    it('vrt /core/libraries/', () => {
      cy.visualRegressionTestUrl({url: '/core/libraries/', testName: '/core/libraries/'});
    });
    it('vrt /core/libraries/data-visualization/', () => {
      cy.visualRegressionTestUrl({
        url: '/core/libraries/data-visualization/',
        testName: '/core/libraries/data-visualization/',
      });
    });
    it('vrt /core/libraries/codemods/', () => {
      cy.visualRegressionTestUrl({url: '/core/libraries/codemods/', testName: '/core/libraries/codemods/'});
    });
    it('vrt /core/theme-package/', () => {
      cy.visualRegressionTestUrl({url: '/core/theme-package/', testName: '/core/theme-package/'});
    });
    it('vrt /core/upgrade-guide/', () => {
      cy.visualRegressionTestUrl({url: '/core/upgrade-guide/', testName: '/core/upgrade-guide/'});
    });
    it('vrt /customization/composing-custom-components-with-design-tokens/', () => {
      cy.visualRegressionTestUrl({
        url: '/customization/composing-custom-components-with-design-tokens/',
        testName: '/customization/composing-custom-components-with-design-tokens/',
      });
    });
    it('vrt /customization/creating-a-custom-theme/', () => {
      cy.visualRegressionTestUrl({
        url: '/customization/creating-a-custom-theme/',
        testName: '/customization/creating-a-custom-theme/',
      });
    });
    it('vrt /core/libraries/uid-library/', () => {
      cy.visualRegressionTestUrl({url: '/core/libraries/uid-library/', testName: '/core/libraries/uid-library/'});
    });
    it('vrt /customization/customization-provider/', () => {
      cy.visualRegressionTestUrl({
        url: '/customization/customization-provider/',
        testName: '/customization/customization-provider/',
      });
    });
    it('vrt /customization/customizing-component-elements/', () => {
      cy.visualRegressionTestUrl({
        url: '/customization/customizing-component-elements/',
        testName: '/customization/customizing-component-elements/',
      });
    });
    it('vrt /foundations/colors/', () => {
      cy.visualRegressionTestUrl({url: '/foundations/colors/', testName: '/foundations/colors/'});
    });
    it('vrt /foundations/content/content-checklist/', () => {
      cy.visualRegressionTestUrl({
        url: '/foundations/content/content-checklist/',
        testName: '/foundations/content/content-checklist/',
      });
    });
    it('vrt /foundations/content/voice-and-tone/', () => {
      cy.visualRegressionTestUrl({
        url: '/foundations/content/voice-and-tone/',
        testName: '/foundations/content/voice-and-tone/',
      });
    });
    it('vrt /foundations/illustrations/', () => {
      cy.visualRegressionTestUrl({url: '/foundations/illustrations/', testName: '/foundations/illustrations/'});
    });
    it('vrt /foundations/data-visualization/', () => {
      cy.visualRegressionTestUrl({
        url: '/foundations/data-visualization/',
        testName: '/foundations/data-visualization/',
      });
    });
    it('vrt /inclusive-design/', () => {
      cy.visualRegressionTestUrl({url: '/inclusive-design/', testName: '/inclusive-design/'});
    });
    it('vrt /core/', () => {
      cy.visualRegressionTestUrl({url: '/core/', testName: '/core/'});
    });
    it('vrt /foundations/content/product-style-guide/', () => {
      cy.visualRegressionTestUrl({
        url: '/foundations/content/product-style-guide/',
        testName: '/foundations/content/product-style-guide/',
      });
    });
    it('vrt /introduction/about-paste/', () => {
      cy.visualRegressionTestUrl({url: '/introduction/about-paste/', testName: '/introduction/about-paste/'});
    });
    it('vrt /introduction/contributing/components/', () => {
      cy.visualRegressionTestUrl({
        url: '/introduction/contributing/components/',
        testName: '/introduction/contributing/components/',
      });
    });
    it('vrt /foundations/content/', () => {
      cy.visualRegressionTestUrl({url: '/foundations/content/', testName: '/foundations/content/'});
    });
    it('vrt /introduction/contributing/icons/', () => {
      cy.visualRegressionTestUrl({
        url: '/introduction/contributing/icons/',
        testName: '/introduction/contributing/icons/',
      });
    });
  });
});
