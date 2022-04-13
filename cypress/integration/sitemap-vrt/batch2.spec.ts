// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Full Site VRT', function () {
  describe('Visual regression tests', () => {
    it('vrt /components/icons/', () => {
      cy.visualRegressionTestUrl({url: '/components/icons/', testName: '/components/icons/'});
    });
    it('vrt /components/icons/usage-guidelines/', () => {
      cy.visualRegressionTestUrl({
        url: '/components/icons/usage-guidelines/',
        testName: '/components/icons/usage-guidelines/',
      });
    });
    it('vrt /components/', () => {
      cy.visualRegressionTestUrl({url: '/components/', testName: '/components/'});
    });
    it('vrt /components/input/', () => {
      cy.visualRegressionTestUrl({url: '/components/input/', testName: '/components/input/'});
    });
    it('vrt /components/label/', () => {
      cy.visualRegressionTestUrl({url: '/components/label/', testName: '/components/label/'});
    });
    it('vrt /components/list/', () => {
      cy.visualRegressionTestUrl({url: '/components/list/', testName: '/components/list/'});
    });
    it('vrt /components/media-object/', () => {
      cy.visualRegressionTestUrl({url: '/components/media-object/', testName: '/components/media-object/'});
    });
    it('vrt /components/pagination/', () => {
      cy.visualRegressionTestUrl({url: '/components/pagination/', testName: '/components/pagination/'});
    });
    it('vrt /components/modal/', () => {
      cy.visualRegressionTestUrl({url: '/components/modal/', testName: '/components/modal/'});
    });
    it('vrt /components/menu/', () => {
      cy.visualRegressionTestUrl({url: '/components/menu/', testName: '/components/menu/'});
    });
    it('vrt /components/paragraph/', () => {
      cy.visualRegressionTestUrl({url: '/components/paragraph/', testName: '/components/paragraph/'});
    });
    it('vrt /components/popover/', () => {
      cy.visualRegressionTestUrl({url: '/components/popover/', testName: '/components/popover/'});
    });
    it('vrt /components/radio-group/', () => {
      cy.visualRegressionTestUrl({url: '/components/radio-group/', testName: '/components/radio-group/'});
    });
    it('vrt /components/screen-reader-only/', () => {
      cy.visualRegressionTestUrl({url: '/components/screen-reader-only/', testName: '/components/screen-reader-only/'});
    });
    it('vrt /components/select/', () => {
      cy.visualRegressionTestUrl({url: '/components/select/', testName: '/components/select/'});
    });
    it('vrt /components/separator/', () => {
      cy.visualRegressionTestUrl({url: '/components/separator/', testName: '/components/separator/'});
    });
    it('vrt /components/stack/', () => {
      cy.visualRegressionTestUrl({url: '/components/stack/', testName: '/components/stack/'});
    });
    it('vrt /components/spinner/', () => {
      cy.visualRegressionTestUrl({url: '/components/spinner/', testName: '/components/spinner/'});
    });
    it('vrt /components/skeleton-loader/', () => {
      cy.visualRegressionTestUrl({url: '/components/skeleton-loader/', testName: '/components/skeleton-loader/'});
    });
    it('vrt /components/tabs/', () => {
      cy.visualRegressionTestUrl({url: '/components/tabs/', testName: '/components/tabs/'});
    });
    it('vrt /components/toast/', () => {
      cy.visualRegressionTestUrl({url: '/components/toast/', testName: '/components/toast/'});
    });
    it('vrt /components/time-picker/', () => {
      cy.visualRegressionTestUrl({url: '/components/time-picker/', testName: '/components/time-picker/'});
    });
    it('vrt /components/truncate/', () => {
      cy.visualRegressionTestUrl({url: '/components/truncate/', testName: '/components/truncate/'});
    });
    it('vrt /components/tooltip/', () => {
      cy.visualRegressionTestUrl({url: '/components/tooltip/', testName: '/components/tooltip/'});
    });
    it('vrt /components/textarea/', () => {
      cy.visualRegressionTestUrl({url: '/components/textarea/', testName: '/components/textarea/'});
    });
  });
});
