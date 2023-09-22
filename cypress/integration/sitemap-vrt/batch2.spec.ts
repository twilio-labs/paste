import { SITEMAP_CHUNKS } from './constants';

describe('Full Site VRT Batch 2', function () {
  SITEMAP_CHUNKS[1].forEach((url) => {
    it(`should vrt ${url}`, () => {
      cy.visualRegressionTestUrl({ url, testName: url });
    });
  });
});
