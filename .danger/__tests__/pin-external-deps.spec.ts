import pinExternalDeps, {
  getUnPinnedExternalDepsFromPackageJSONFiles,
  getUnpinnedExternalDeps,
} from '../pin-external-deps';

declare const global: any;

describe('pin external dependencies check', () => {
  describe('getUnpinnedExternalDeps()', () => {
    it('should return the names of external deps that are not pinned', () => {
      expect(getUnpinnedExternalDeps({ lodash: '^4.17.21' })).toEqual(['lodash']);
      expect(getUnpinnedExternalDeps({ csstype: '3.0.11', lodash: '^4.17.21' })).toEqual(['lodash']);
      expect(getUnpinnedExternalDeps({ csstype: '^3.0.11', lodash: '^4.17.21' })).toEqual(['csstype', 'lodash']);
      expect(getUnpinnedExternalDeps({ csstype: '3.0.11' })).toEqual([]);
    });
  });
  describe('getUnPinnedExternalDepsFromPackageJSONFiles()', () => {
    it('should return an array of all the unpinned external deps across every provided package.json file', () => {
      expect(
        getUnPinnedExternalDepsFromPackageJSONFiles(['./.danger/__fixtures__/mock_package/package.json']),
      ).toMatchSnapshot();

      expect(
        getUnPinnedExternalDepsFromPackageJSONFiles(['./.danger/__fixtures__/mock_package_2/package.json']),
      ).toMatchSnapshot();

      expect(
        getUnPinnedExternalDepsFromPackageJSONFiles(['./.danger/__fixtures__/mock_package_3/package.json']),
      ).toMatchSnapshot();

      expect(
        getUnPinnedExternalDepsFromPackageJSONFiles([
          './.danger/__fixtures__/mock_package/package.json',
          './.danger/__fixtures__/mock_package_3/package.json',
        ]),
      ).toMatchSnapshot();

      expect(
        getUnPinnedExternalDepsFromPackageJSONFiles([
          './.danger/__fixtures__/mock_package/package.json',
          './.danger/__fixtures__/mock_package_2/package.json',
          './.danger/__fixtures__/mock_package_3/package.json',
        ]),
      ).toMatchSnapshot();
    });
  });

  describe('pinExternalDeps()', () => {
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
      global.danger = undefined;
    });

    it('should not fail when there are not unpinned external deps', () => {
      global.danger = {
        git: {
          modified_files: ['./.danger/__fixtures__/mock_package_3/package.json'],
          created_files: [],
        },
      };
      pinExternalDeps();
      expect(global.fail).not.toHaveBeenCalled();
    });

    it('should fail when there are unpinned external deps', () => {
      global.danger = {
        git: {
          modified_files: ['./.danger/__fixtures__/mock_package_2/package.json'],
          created_files: [],
        },
      };
      pinExternalDeps();
      expect(global.fail).toHaveBeenCalled();
    });

    it('should fail even when there are mixed pinned and unpinned external deps', () => {
      global.danger = {
        git: {
          modified_files: ['./.danger/__fixtures__/mock_package/package.json'],
          created_files: [],
        },
      };
      pinExternalDeps();
      expect(global.fail).toHaveBeenCalled();
    });
  });
});
