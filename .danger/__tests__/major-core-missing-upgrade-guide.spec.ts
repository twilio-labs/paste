import majorCoreMissingUpgradeGuideCheck, {
  hasMajorCoreUpgrade,
  getChangesetsWithMajorCoreUpgrade,
  UPGRADE_GUIDE_PAGE_FILE,
} from '../major-core-missing-upgrade-guide';
declare const global: any;

describe('hasMajorCoreUpgrade()', () => {
  it('should not flag icon changesets', () => {
    expect(hasMajorCoreUpgrade('./.danger/__fixtures__/changeset/heavy-peaches-repeat.md')).toEqual(false);
  });

  it('should not flag changesets with minor or patch updates to core', () => {
    expect(hasMajorCoreUpgrade('./.danger/__fixtures__/changeset/pink-masks-walk.md')).toEqual(false);
  });

  it('should flag changesets with major updates to core', () => {
    expect(hasMajorCoreUpgrade('./.danger/__fixtures__/changeset/tiny-robot-hands.md')).toEqual(true);
  });
});

describe('getChangesetsWithMajorCoreUpgrade', () => {
  it('should return an array of changesets that have a major release of core', () => {
    expect(
      getChangesetsWithMajorCoreUpgrade([
        './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
        './.danger/__fixtures__/changeset/pink-masks-walk.md',
        './.danger/__fixtures__/changeset/popular-cheetahs-punch.md',
        './.danger/__fixtures__/changeset/pretty-cameras-burn.md',
        './.danger/__fixtures__/changeset/tiny-robot-hands.md',
      ])
    ).toEqual(['./.danger/__fixtures__/changeset/tiny-robot-hands.md']);
  });
});

describe('majorCoreMissingUpgradeGuideCheck()', () => {
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

  it('should fail for any modified changeset that sets a major core version if the upgrade guide is not also modifided', () => {
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
    majorCoreMissingUpgradeGuideCheck();
    expect(global.fail).toHaveBeenCalledTimes(1);
  });

  it('should fail for any created changeset that that sets a major core version if the upgrade guide is not also modifided', () => {
    global.danger = {
      git: {
        modified_files: [],
        created_files: [
          './.danger/__fixtures__/changeset/pink-masks-walk.md',
          './.danger/__fixtures__/changeset/tiny-robot-hands.md',
        ],
      },
    };
    majorCoreMissingUpgradeGuideCheck();
    expect(global.fail).toHaveBeenCalledTimes(1);
  });

  it('should fail for any modified and created changeset that sets a major core version if the upgrade guide is not also modifided', () => {
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
    majorCoreMissingUpgradeGuideCheck();
    expect(global.fail).toHaveBeenCalledTimes(1);
  });

  it('should not fail for any changeset that sets a major core versions but DOES include a change to the upgrade guide.', () => {
    global.danger = {
      git: {
        modified_files: [
          './.danger/__fixtures__/changeset/heavy-peaches-repeat.md',
          './.danger/__fixtures__/changeset/pink-masks-walk.md',
          UPGRADE_GUIDE_PAGE_FILE,
        ],
        created_files: ['./.danger/__fixtures__/changeset/popular-cheetahs-punch.md'],
      },
    };
    majorCoreMissingUpgradeGuideCheck();
    expect(global.fail).not.toHaveBeenCalled();
  });
});
