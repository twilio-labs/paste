import { SITEMAP_CHUNKS } from "./constants";

describe("Full Site VRT Batch 5", function () {
  SITEMAP_CHUNKS[4].forEach((url) => {
    it(`should vrt ${url}`, () => {
      cy.visualRegressionTestUrl({ url, testName: url });
    });
  });
});
