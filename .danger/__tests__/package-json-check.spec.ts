import packageJsonCheck from '../package-json-check';

declare const global: any;

describe('packageJsonCheck()', () => {
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

  describe('checking for missing lockfile updates', () => {
    afterEach(() => {
      global.danger = undefined;
    });

    it('should not warn when the lockfile is modified', () => {
      global.danger = {
        git: {
          modified_files: [
            'package.json',
            'packages/paste-codemods/package.json',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            'pnpm-lock.yaml',
            '.changeset/pretty-cameras-burn.md',
          ],
          created_files: [],
        },
      };
      packageJsonCheck();
      expect(global.warn).not.toHaveBeenCalled();
    });
    it('should not warn when the root package.json is modified', () => {
      global.danger = {
        git: {
          modified_files: [
            'package.json',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            '.changeset/pretty-cameras-burn.md',
          ],
          created_files: [],
        },
      };
      packageJsonCheck();
      expect(global.warn).not.toHaveBeenCalled();
    });
    it('should warn when a package package.json is modified', () => {
      global.danger = {
        git: {
          modified_files: [
            'packages/paste-codemods/package.json',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            '.changeset/pretty-cameras-burn.md',
          ],
          created_files: [],
        },
      };
      packageJsonCheck();
      expect(global.warn).toHaveBeenCalled();
    });
    it('should warn when a new package package.json is created', () => {
      global.danger = {
        git: {
          modified_files: [
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            '.changeset/pretty-cameras-burn.md',
          ],
          created_files: ['packages/paste-codemods/package.json'],
        },
      };
      packageJsonCheck();
      expect(global.warn).toHaveBeenCalled();
    });
    it('should not warn when a new package package.json is created but lockfile is updated', () => {
      global.danger = {
        git: {
          modified_files: [
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            '.changeset/pretty-cameras-burn.md',
            'pnpm-lock.yaml',
          ],
          created_files: ['packages/paste-codemods/package.json'],
        },
      };
      packageJsonCheck();
      expect(global.warn).not.toHaveBeenCalled();
    });
  });
});
