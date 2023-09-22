import { SITEMAP_CHUNKS } from "./constants";

describe("Full Site VRT Batch 3", function () {
  SITEMAP_CHUNKS[2].forEach((url) => {
    it(`should vrt ${url}`, () => {
      cy.visualRegressionTestUrl({ url, testName: url });
    });
  });
});
