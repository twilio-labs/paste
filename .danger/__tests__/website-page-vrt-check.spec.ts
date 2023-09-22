import websitePageVrtCheck, { FAIL_MESSAGE } from '../website-page-vrt-check';

declare const global: any;

describe('websitePageVrtCheck()', () => {
  beforeEach(() => {
    global.warn = jest.fn();
    global.message = jest.fn();
    global.fail = jest.fn();
    global.markdown = jest.fn();
  });

  afterEach(() => {
    global.warn = undefined;
    global.message = undefined;
    global.fail = undefined;
    global.markdown = undefined;
  });

  describe('checking for missing vrt updates', () => {
    afterEach(() => {
      global.danger = undefined;
    });

    it('should fail when new website pages are created without a sitemap vrt modification', () => {
      global.danger = {
        git: {
          modified_files: [],
          created_files: ['packages/paste-website/src/pages/index.tsx'],
        },
      };
      websitePageVrtCheck();
      expect(global.fail).toHaveBeenCalledWith(FAIL_MESSAGE);
    });

    it('should not fail when no new website pages are created', () => {
      global.danger = {
        git: {
          modified_files: ['cypress/integration/sitemap-vrt/constants.ts'],
          created_files: [],
        },
      };
      websitePageVrtCheck();
      expect(global.fail).not.toHaveBeenCalled();
    });

    it('should not fail when new website pages are created with a sitemap vrt modification', () => {
      global.danger = {
        git: {
          modified_files: ['cypress/integration/sitemap-vrt/constants.ts'],
          created_files: ['packages/paste-website/src/pages/index.tsx'],
        },
      };
      websitePageVrtCheck();
      expect(global.fail).not.toHaveBeenCalled();
    });
  });
});
