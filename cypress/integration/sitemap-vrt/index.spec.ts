import { SITEMAP_CHUNKS } from "./constants";

describe("Full Site VRT Batch 1", function () {
  SITEMAP_CHUNKS[0].forEach((url) => {
    it(`should vrt ${url}`, () => {
      cy.visualRegressionTestUrl({ url, testName: url });
    });
  });
});
