import majorMissingUpgradeGuideCheck, {
  hasMajorUpdate,
  getChangesetsWithMajorUpdate,
  UPGRADE_GUIDE_PAGE_FILE,
  FAIL_MESSAGE,
} from '../major-missing-upgrade-guide';
declare const global: any;

const expectedFailureFiles = [
  './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
  './.danger/__fixtures__/changeset/tiny-robot-hands.md',
];

describe('hasMajorUpdate()', () => {
  it('should not flag changesets with minor or patch updates to core', () => {
    expect(hasMajorUpdate('./.danger/__fixtures__/changeset/pink-masks-walk.md')).toEqual(false);
  });

  it('should not flag changesets with minor or patch updates to other packages', () => {
    expect(hasMajorUpdate('./.danger/__fixtures__/changeset/heavy-peaches-repeat.md')).toEqual(false);
  });

  it('should flag changesets with major updates to core', () => {
    expect(hasMajorUpdate('./.danger/__fixtures__/changeset/tiny-robot-hands.md')).toEqual(true);
  });

  it('should flag changesets with major updates to other packages', () => {
    expect(hasMajorUpdate('./.danger/__fixtures__/changeset/pretty-cameras-burn.md')).toEqual(true);
  });
});

describe('getChangesetsWithMajorUpdate', () => {
  it('should return an array of changesets that have a major update', () => {
    expect(
      getChangesetsWithMajorUpdate([
        './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
        './.danger/__fixtures__/changeset/pink-masks-walk.md',
        './.danger/__fixtures__/changeset/popular-cheetahs-punch.md',
        './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        './.danger/__fixtures__/changeset/tiny-robot-hands.md',
      ])
    ).toEqual(expectedFailureFiles);
  });
});

describe('majorMissingUpgradeGuideCheck()', () => {
  const expectFail = (): void => {
    expect(global.fail).toHaveBeenCalledTimes(1);
    expect(global.fail).toHaveBeenCalledWith(FAIL_MESSAGE);
  };

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

  it('should fail for any modified changeset that sets an update version if the upgrade guide is not also modifided', () => {
    global.danger = {
      git: {
        modified_files: [
          './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
          './.danger/__fixtures__/changeset/pink-masks-walk.md',
          './.danger/__fixtures__/changeset/popular-cheetahs-punch.md',
          './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
          './.danger/__fixtures__/changeset/tiny-robot-hands.md',
        ],
        created_files: [],
      },
    };
    majorMissingUpgradeGuideCheck();
    expectFail();
  });

  it('should fail for any created changeset that that sets a major version if the upgrade guide is not also modifided', () => {
    global.danger = {
      git: {
        modified_files: [],
        created_files: [
          './.danger/__fixtures__/changeset/pink-masks-walk.md',
          './.danger/__fixtures__/changeset/tiny-robot-hands.md',
        ],
      },
    };
    majorMissingUpgradeGuideCheck();
    expectFail();
  });

  it('should fail for any modified and created changeset that sets a major version if the upgrade guide is not also modifided', () => {
    global.danger = {
      git: {
        modified_files: [
          './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
          './.danger/__fixtures__/changeset/pink-masks-walk.md',
          './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        ],
        created_files: [
          './.danger/__fixtures__/changeset/popular-cheetahs-punch.md',
          './.danger/__fixtures__/changeset/tiny-robot-hands.md',
        ],
      },
    };
    majorMissingUpgradeGuideCheck();
    expectFail();
  });

  it('should not fail for any changeset that sets a major version but DOES include a change to the upgrade guide.', () => {
    global.danger = {
      git: {
        modified_files: ['./.danger/__fixtures__/changeset/pink-masks-walk.md', UPGRADE_GUIDE_PAGE_FILE],
        created_files: ['./.danger/__fixtures__/changeset/popular-cheetahs-punch.md'],
      },
    };
    majorMissingUpgradeGuideCheck();
    expect(global.fail).not.toHaveBeenCalled();
  });
});
