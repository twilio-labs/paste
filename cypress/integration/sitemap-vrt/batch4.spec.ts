import { SITEMAP_CHUNKS } from "./constants";

describe("Full Site VRT Batch 4", function () {
  SITEMAP_CHUNKS[3].forEach((url) => {
    it(`should vrt ${url}`, () => {
      cy.visualRegressionTestUrl({ url, testName: url });
    });
  });
});
