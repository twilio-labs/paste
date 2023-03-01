import missingChangesetCheck, {getMissingPackagesFromChangesets} from '../missing-changesets-check';

declare const global: any;

const mockPackList = [
  {
    name: '@twilio-paste/avatar',
    version: '0.0.0',
    private: false,
    location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-core/components/avatar',
  },

  {
    name: '@twilio-paste/icons',
    version: '0.0.0',
    private: false,
    location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-icons',
  },

  {
    name: '@twilio-paste/core',
    version: '0.0.0',
    private: false,
    location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-core/core-bundle',
  },
  {
    name: '@twilio-paste/box',
    version: '0.0.0',
    private: true,
    location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-core/primitives/box',
  },
  {
    name: '@twilio-paste/design-tokens',
    version: '0.0.0',
    private: false,
    location: '/Users/simon/dev/twilio/design-systems/paste/packages/paste-design-tokens',
  },
];

describe('getMissingPackagesFromChangesets()', () => {
  it('should not return the names of packages if none are missing from changesets', () => {
    expect(
      getMissingPackagesFromChangesets(
        [
          './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
          './.danger/__fixtures__/changeset/pink-masks-walk.md',
          './.danger/__fixtures__/changeset/popular-cheetahs-punch.md',
          './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        ],
        ['@twilio-paste/avatar', '@twilio-paste/box', '@twilio-paste/icons', '@twilio-paste/core']
      )
    ).toEqual([]);
  });

  it('should return the names of packages that are missing from changesets', () => {
    expect(
      getMissingPackagesFromChangesets(
        [
          './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
          './.danger/__fixtures__/changeset/popular-cheetahs-punch.md',
          './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        ],
        [
          '@twilio-paste/avatar',
          '@twilio-paste/box',
          '@twilio-paste/icons',
          '@twilio-paste/core',
          '@twilio-paste/design-tokens',
        ]
      )
    ).toEqual(['@twilio-paste/core', '@twilio-paste/design-tokens']);

    expect(
      getMissingPackagesFromChangesets(
        ['./.danger/__fixtures__/changeset/pretty-cameras-burn.md'],
        ['@twilio-paste/avatar', '@twilio-paste/box', '@twilio-paste/icons', '@twilio-paste/core']
      )
    ).toEqual(['@twilio-paste/box', '@twilio-paste/icons', '@twilio-paste/core']);
  });
});

describe('missingChangesetCheck()', () => {
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

  it('should fail once for a single package that is not in a changeset', () => {
    global.danger = {
      git: {
        modified_files: [
          'package.json',
          'packages/paste-codemods/package.json',
          'packages/paste-icons/src/index.tsx',
          'packages/paste-core/components/avatar/src/index.tsx',
          'packages/paste-core/primitives/box/src/index.tsx',
          'packages/paste-design-tokens/tokens/themes/evergreen/global/background-color.yml',
          'yarn.lock',
          './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        ],
        created_files: [],
      },
    };
    missingChangesetCheck(mockPackList);
    expect(global.fail).toHaveBeenCalledTimes(2);
  });

  it('should fail twice for two packages that are not in a changeset', () => {
    global.danger = {
      git: {
        modified_files: [
          'package.json',
          'packages/paste-codemods/package.json',
          'packages/paste-icons/src/index.tsx',
          'packages/paste-core/components/avatar/src/index.tsx',
          'packages/paste-core/primitives/box/src/index.tsx',
          'yarn.lock',
        ],
        created_files: [],
      },
    };
    missingChangesetCheck(mockPackList);
    expect(global.fail).toHaveBeenCalledTimes(2);
  });

  it('should not fail if all packages are covered', () => {
    global.danger = {
      git: {
        modified_files: [
          'package.json',
          'packages/paste-codemods/package.json',
          'packages/paste-icons/src/index.tsx',
          'packages/paste-core/components/avatar/src/index.tsx',
          'packages/paste-core/primitives/box/src/index.tsx',
          'yarn.lock',
          './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
          './.danger/__fixtures__/changeset/pink-masks-walk.md',
          './.danger/__fixtures__/changeset/popular-cheetahs-punch.md',
          './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        ],
        created_files: [],
      },
    };
    missingChangesetCheck(mockPackList);
    expect(global.fail).toHaveBeenCalledTimes(0);
  });

  it('should be called with an fail message that lists the missing package that is not in a changeset', () => {
    global.danger = {
      git: {
        modified_files: [
          'packages/paste-icons/src/index.tsx',
          'packages/paste-core/components/avatar/src/index.tsx',
          './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        ],
        created_files: [],
      },
    };
    missingChangesetCheck(mockPackList);
    expect(global.fail).toHaveBeenCalledWith(
      'Looks like @twilio-paste/icons was not included in a changeset - *edit an existing changeset or run `yarn changeset` to create one*'
    );
  });
});
