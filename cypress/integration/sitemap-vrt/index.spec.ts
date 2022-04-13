// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Full Site VRT', function () {
  describe('Visual regression tests', () => {
    it('vrt homepage', () => {
      cy.visualRegressionTestUrl({url: '/', testName: 'Homepage'});
    });
    it('vrt accessibility', () => {
      cy.visualRegressionTestUrl({url: '/inclusive-design/', testName: 'Accessibility'});
    });
    it('vrt /customization/', () => {
      cy.visualRegressionTestUrl({url: '/customization/', testName: '/customization/'});
    });
    it('vrt /blog/', () => {
      cy.visualRegressionTestUrl({url: '/blog/', testName: '/blog/'});
    });
    it('vrt /components/aspect-ratio/', () => {
      cy.visualRegressionTestUrl({url: '/components/aspect-ratio/', testName: '/components/aspect-ratio/'});
    });
    it('vrt /components/anchor/', () => {
      cy.visualRegressionTestUrl({url: '/components/anchor/', testName: '/components/anchor/'});
    });
    it('vrt /components/alert-dialog/', () => {
      cy.visualRegressionTestUrl({url: '/components/alert-dialog/', testName: '/components/alert-dialog/'});
    });
    it('vrt /components/avatar/', () => {
      cy.visualRegressionTestUrl({url: '/components/avatar/', testName: '/components/avatar/'});
    });
    it('vrt /blog/2021-07-26-pastes-path-to-a-transparent-package-categorization-system/', () => {
      cy.visualRegressionTestUrl({
        url: '/blog/2021-07-26-pastes-path-to-a-transparent-package-categorization-system/',
        testName: '/blog/2021-07-26-pastes-path-to-a-transparent-package-categorization-system/',
      });
    });
    it('vrt /components/breadcrumb/', () => {
      cy.visualRegressionTestUrl({url: '/components/breadcrumb/', testName: '/components/breadcrumb/'});
    });
    it('vrt /components/badge/', () => {
      cy.visualRegressionTestUrl({url: '/components/badge/', testName: '/components/badge/'});
    });
    it('vrt /components/card/', () => {
      cy.visualRegressionTestUrl({url: '/components/card/', testName: '/components/card/'});
    });
    it('vrt /components/checkbox/', () => {
      cy.visualRegressionTestUrl({url: '/components/checkbox/', testName: '/components/checkbox/'});
    });
    it('vrt /components/data-grid/', () => {
      cy.visualRegressionTestUrl({url: '/components/data-grid/', testName: '/components/data-grid/'});
    });
    it('vrt /components/display-pill-group/', () => {
      cy.visualRegressionTestUrl({url: '/components/display-pill-group/', testName: '/components/display-pill-group/'});
    });
    it('vrt /components/disclosure/', () => {
      cy.visualRegressionTestUrl({url: '/components/disclosure/', testName: '/components/disclosure/'});
    });
    it('vrt /components/button/', () => {
      cy.visualRegressionTestUrl({url: '/components/button/', testName: '/components/button/'});
    });
    it('vrt /components/flex/', () => {
      cy.visualRegressionTestUrl({url: '/components/flex/', testName: '/components/flex/'});
    });
    it('vrt /components/combobox/', () => {
      cy.visualRegressionTestUrl({url: '/components/combobox/', testName: '/components/combobox/'});
    });
    it('vrt /components/date-picker/', () => {
      cy.visualRegressionTestUrl({url: '/components/date-picker/', testName: '/components/date-picker/'});
    });
    it('vrt /components/grid/', () => {
      cy.visualRegressionTestUrl({url: '/components/grid/', testName: '/components/grid/'});
    });
    it('vrt /components/heading/', () => {
      cy.visualRegressionTestUrl({url: '/components/heading/', testName: '/components/heading/'});
    });
    it('vrt /components/form-pill-group/', () => {
      cy.visualRegressionTestUrl({url: '/components/form-pill-group/', testName: '/components/form-pill-group/'});
    });
    it('vrt /components/alert/', () => {
      cy.visualRegressionTestUrl({url: '/components/alert/', testName: '/components/alert/'});
    });
    it('vrt /components/help-text/', () => {
      cy.visualRegressionTestUrl({url: '/components/help-text/', testName: '/components/help-text/'});
    });
  });
});
