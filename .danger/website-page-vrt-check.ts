// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
import { DangerDSLType } from "danger/distribution/dsl/DangerDSL";
declare const danger: DangerDSLType;
export declare function fail(message: string): void;

export const FAIL_MESSAGE = `You have created a new Paste website page, but have not added a corresponding VRT entry.
Please update the VRT sitemap file (/cypress/integration/sitemap-vrt/constants.ts) to test any new website pages added to Paste.`;

/**
 * Check if the filepath matches our website pages directory
 *
 * @param {string} filePath
 * @return {*}
 */
export const isWebsitePage = (filePath: string) => {
  return /paste-website\/src\/pages/.test(filePath);
};

/**
 * Check if the filepath matches the sitemap VRT constants file
 *
 * @param {string} filePath
 * @return {*}
 */
export const isSitemapVRT = (filePath: string) => {
  return /cypress\/integration\/sitemap-vrt\/constants\.ts$/.test(filePath);
};

/**
 * This is a Danger plugin that will fail if you have added a new website page
 * but have not added it to our VRT pipeline explicitly
 */
export default () => {
  const hasCreatedWebsitePage = danger.git.created_files.some(isWebsitePage);
  if (!hasCreatedWebsitePage) return;

  const hasModifiedSitemapVRT = danger.git.modified_files.some(isSitemapVRT);
  if (hasModifiedSitemapVRT) return;

  fail(FAIL_MESSAGE);
};
