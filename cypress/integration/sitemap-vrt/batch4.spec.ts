// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Full Site VRT', function () {
  describe('Visual regression tests', () => {
    it('vrt /introduction/contributing/patterns/', () => {
      cy.visualRegressionTestUrl({
        url: '/introduction/contributing/patterns/',
        testName: '/introduction/contributing/patterns/',
      });
    });
    it('vrt /introduction/for-designers/design-guidelines/', () => {
      cy.visualRegressionTestUrl({
        url: '/introduction/for-designers/design-guidelines/',
        testName: '/introduction/for-designers/design-guidelines/',
      });
    });
    it('vrt /introduction/for-engineers/manual-installation/', () => {
      cy.visualRegressionTestUrl({
        url: '/introduction/for-engineers/manual-installation/',
        testName: '/introduction/for-engineers/manual-installation/',
      });
    });
    it('vrt /introduction/for-engineers/quickstart/', () => {
      cy.visualRegressionTestUrl({
        url: '/introduction/for-engineers/quickstart/',
        testName: '/introduction/for-engineers/quickstart/',
      });
    });
    it('vrt /patterns/button-vs-anchor/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/button-vs-anchor/', testName: '/patterns/button-vs-anchor/'});
    });
    it('vrt /introduction/working-with-us/', () => {
      cy.visualRegressionTestUrl({url: '/introduction/working-with-us/', testName: '/introduction/working-with-us/'});
    });
    it('vrt /patterns/delete/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/delete/', testName: '/patterns/delete/'});
    });
    it('vrt /patterns/data-export/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/data-export/', testName: '/patterns/data-export/'});
    });
    it('vrt /patterns/filter-group/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/filter-group/', testName: '/patterns/filter-group/'});
    });
    it('vrt /patterns/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/', testName: '/patterns/'});
    });
    it('vrt /patterns/empty-state/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/empty-state/', testName: '/patterns/empty-state/'});
    });
    it('vrt /patterns/notifications-and-feedback/', () => {
      cy.visualRegressionTestUrl({
        url: '/patterns/notifications-and-feedback/',
        testName: '/patterns/notifications-and-feedback/',
      });
    });
    it('vrt /patterns/object-details/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/object-details/', testName: '/patterns/object-details/'});
    });
    it('vrt /patterns/privacy/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/privacy/', testName: '/patterns/privacy/'});
    });
    it('vrt /patterns/status/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/status/', testName: '/patterns/status/'});
    });
    it('vrt /primitives/combobox-primitive/', () => {
      cy.visualRegressionTestUrl({url: '/primitives/combobox-primitive/', testName: '/primitives/combobox-primitive/'});
    });
    it('vrt /patterns/create/', () => {
      cy.visualRegressionTestUrl({url: '/patterns/create/', testName: '/patterns/create/'});
    });
    it('vrt /primitives/', () => {
      cy.visualRegressionTestUrl({url: '/primitives/', testName: '/primitives/'});
    });
    it('vrt /primitives/menu-primitive/', () => {
      cy.visualRegressionTestUrl({url: '/primitives/menu-primitive/', testName: '/primitives/menu-primitive/'});
    });
    it('vrt /primitives/disclosure-primitive/', () => {
      cy.visualRegressionTestUrl({
        url: '/primitives/disclosure-primitive/',
        testName: '/primitives/disclosure-primitive/',
      });
    });
    it('vrt /primitives/modal-dialog-primitive/', () => {
      cy.visualRegressionTestUrl({
        url: '/primitives/modal-dialog-primitive/',
        testName: '/primitives/modal-dialog-primitive/',
      });
    });
    it('vrt /primitives/non-modal-dialog-primitive/', () => {
      cy.visualRegressionTestUrl({
        url: '/primitives/non-modal-dialog-primitive/',
        testName: '/primitives/non-modal-dialog-primitive/',
      });
    });
    it('vrt /primitives/tabs-primitive/', () => {
      cy.visualRegressionTestUrl({url: '/primitives/tabs-primitive/', testName: '/primitives/tabs-primitive/'});
    });
    it('vrt /primitives/text/', () => {
      cy.visualRegressionTestUrl({url: '/primitives/text/', testName: '/primitives/text/'});
    });
    it('vrt /primitives/tooltip-primitive/', () => {
      cy.visualRegressionTestUrl({url: '/primitives/tooltip-primitive/', testName: '/primitives/tooltip-primitive/'});
    });
    it('vrt /roadmap/', () => {
      cy.visualRegressionTestUrl({url: '/roadmap/', testName: '/roadmap/'});
    });
    it('vrt /tokens/design-tokens-package/', () => {
      cy.visualRegressionTestUrl({url: '/tokens/design-tokens-package/', testName: '/tokens/design-tokens-package/'});
    });
    it('vrt /tokens/', () => {
      cy.visualRegressionTestUrl({url: '/tokens/', testName: '/tokens/'});
    });
    it('vrt /tokens/list/', () => {
      cy.visualRegressionTestUrl({url: '/tokens/list/', testName: '/tokens/list/'});
    });
    it('vrt /primitives/box/', () => {
      cy.visualRegressionTestUrl({url: '/primitives/box/', testName: '/primitives/box/'});
    });
  });
});
