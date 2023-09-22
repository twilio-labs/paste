import {
  getChangesetsFromFiles,
  getPackJsonsFromFiles,
  getPackageNameFromPath,
  getPackagePaths,
  getPublicPackageFilesFromFiles,
  getPublicPackages,
  getRepoPackagePath,
  getUnpublishedPackageNames,
} from '../utils';

describe('danger utils', () => {
  describe('getPublicPackages', () => {
    it('should only return public packages', () => {
      expect(
        getPublicPackages([
          {
            name: '@twilio-paste/style-props',
            version: '3.1.0',
            private: false,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
          },
        ]),
      ).toEqual([
        {
          name: '@twilio-paste/style-props',
          version: '3.1.0',
          private: false,
          location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
        },
      ]);

      expect(
        getPublicPackages([
          {
            name: '@twilio-paste/private',
            version: '3.1.0',
            private: true,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
          },
          {
            name: '@twilio-paste/public',
            version: '3.1.0',
            private: false,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
          },
        ]),
      ).toEqual([
        {
          name: '@twilio-paste/public',
          version: '3.1.0',
          private: false,
          location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
        },
      ]);

      expect(
        getPublicPackages([
          {
            name: '@twilio-paste/private',
            version: '3.1.0',
            private: true,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
          },
        ]),
      ).toEqual([]);
    });
  });

  describe('getRepoPackagePath', () => {
    it('should return a file path after and including the packages/', () => {
      expect(getRepoPackagePath('/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props')).toEqual(
        'packages/paste-style-props',
      );
      expect(getRepoPackagePath('/dev/twilio/design-systems/paste/packages/paste-style-props')).toEqual(
        'packages/paste-style-props',
      );
      expect(getRepoPackagePath('paste/packages/paste-style-props')).toEqual('packages/paste-style-props');
      expect(getRepoPackagePath('/design-systems/paste/packages/paste-style-props/foo/bar')).toEqual(
        'packages/paste-style-props/foo/bar',
      );
      expect(getRepoPackagePath('packages/paste-style-props/foo/')).toEqual('packages/paste-style-props/foo/');
    });
  });

  describe('getPackagePaths', () => {
    it('should return a string array of files paths relative to the root of the repo', () => {
      expect(
        getPackagePaths([
          {
            name: '@twilio-paste/private',
            version: '3.1.0',
            private: true,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/box',
          },
          {
            name: '@twilio-paste/public',
            version: '3.1.0',
            private: false,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
          },
        ]),
      ).toEqual(['packages/box', 'packages/paste-style-props']);
    });
  });

  describe('getPublicPackageFilesFromFiles', () => {
    it('should only return files that are in public package folders', () => {
      expect(
        getPublicPackageFilesFromFiles(
          [
            'package.json',
            'packages/box/package.json',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            'yarn.lock',
            '.changeset/pretty-cameras-burn.md',
          ],
          ['packages/box', 'packages/paste-core/components/alert-dialog'],
        ),
      ).toEqual(['packages/box/package.json', 'packages/paste-core/components/alert-dialog/stories/index.stories.tsx']);

      expect(
        getPublicPackageFilesFromFiles(
          ['package.json', 'yarn.lock', '.changeset/pretty-cameras-burn.md'],
          ['packages/box', 'packages/paste-core/components/alert-dialog'],
        ),
      ).toEqual([]);
    });
  });

  describe('getPackageNameFromPath', () => {
    it('should return the name of a package a file belongs to', () => {
      expect(
        getPackageNameFromPath('packages/box/package.json', [
          {
            name: '@twilio-paste/private',
            version: '3.1.0',
            private: true,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/box',
          },
          {
            name: '@twilio-paste/public',
            version: '3.1.0',
            private: false,
            location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
          },
        ]),
      ).toEqual('@twilio-paste/private');
    });
  });

  describe('getUnpublishedPackageNames', () => {
    it('should return an empty list if no files are in src', () => {
      expect(
        getUnpublishedPackageNames(
          [
            'package.json',
            'packages/box/package.json',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            'yarn.lock',
            '.changeset/pretty-cameras-burn.md',
          ],
          [
            {
              name: '@twilio-paste/alert-dialog',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-core/components/alert-dialog',
            },
            {
              name: '@twilio-paste/style-props',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
            },
          ],
        ),
      ).toEqual([]);
    });

    it('should return the names of packages with src files updated', () => {
      expect(
        getUnpublishedPackageNames(
          [
            'package.json',
            'packages/paste-style-props/src/index.ts',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            'yarn.lock',
            '.changeset/pretty-cameras-burn.md',
          ],
          [
            {
              name: '@twilio-paste/alert-dialog',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-core/components/alert-dialog',
            },
            {
              name: '@twilio-paste/style-props',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
            },
          ],
        ),
      ).toEqual(['@twilio-paste/style-props']);

      expect(
        getUnpublishedPackageNames(
          [
            'package.json',
            'packages/paste-style-props/src/index.ts',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            'packages/paste-core/components/alert-dialog/src/index.tsx',
            'yarn.lock',
            '.changeset/pretty-cameras-burn.md',
          ],
          [
            {
              name: '@twilio-paste/alert-dialog',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-core/components/alert-dialog',
            },
            {
              name: '@twilio-paste/style-props',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
            },
          ],
        ),
      ).toEqual(['@twilio-paste/style-props', '@twilio-paste/alert-dialog']);
    });

    it('should return the design-tokens and codemods package with even though no src files are updated', () => {
      expect(
        getUnpublishedPackageNames(
          [
            'package.json',
            'packages/paste-style-props/src/index.ts',
            'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
            'packages/paste-design-tokens/tokens/themes/evergreen/global/background-color.yml',
            'packages/paste-codemods/tools/.cache/mappings.json',
            'yarn.lock',
            '.changeset/pretty-cameras-burn.md',
          ],
          [
            {
              name: '@twilio-paste/alert-dialog',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-core/components/alert-dialog',
            },
            {
              name: '@twilio-paste/style-props',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-style-props',
            },
            {
              name: '@twilio-paste/design-tokens',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-design-tokens',
            },
            {
              name: '@twilio-paste/codemods',
              version: '3.1.0',
              private: false,
              location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-codemods',
            },
          ],
        ),
      ).toEqual(['@twilio-paste/style-props', '@twilio-paste/design-tokens', '@twilio-paste/codemods']);
    });
  });

  describe('getChangesetsFromFiles', () => {
    it('should return the changesets from a change list', () => {
      expect(
        getChangesetsFromFiles([
          'package.json',
          'packages/box/package.json',
          'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
          'yarn.lock',
          '.changeset/pretty-cameras-burn.md',
        ]),
      ).toEqual(['.changeset/pretty-cameras-burn.md']);
    });

    it('should return a list of more than one changesets from a change list', () => {
      expect(
        getChangesetsFromFiles([
          'package.json',
          'packages/box/package.json',
          'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
          'yarn.lock',
          '.changeset/pretty-cameras-burn.md',
          '.changeset/pretty-silly-sheep.md',
        ]),
      ).toEqual(['.changeset/pretty-cameras-burn.md', '.changeset/pretty-silly-sheep.md']);
    });
  });

  describe('getPackJsonsFromFiles', () => {
    it('should return package json files from a changelist', () => {
      expect(
        getPackJsonsFromFiles([
          'package.json',
          'packages/paste-core/components/alert-dialog/package.json',
          'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
          'yarn.lock',
          '.changeset/pretty-cameras-burn.md',
        ]),
      ).toEqual(['packages/paste-core/components/alert-dialog/package.json']);
    });

    it('should return more than one package json file from a changelist', () => {
      expect(
        getPackJsonsFromFiles([
          'package.json',
          'packages/paste-core/components/alert-dialog/package.json',
          'packages/box/package.json',
          'packages/paste-core/components/alert-dialog/stories/index.stories.tsx',
          'yarn.lock',
          '.changeset/pretty-cameras-burn.md',
        ]),
      ).toEqual(['packages/paste-core/components/alert-dialog/package.json', 'packages/box/package.json']);
    });
  });
});
