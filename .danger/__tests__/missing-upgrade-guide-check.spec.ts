import missingUpgradeGuideCheck, { FAIL_MESSAGE, UPGRADE_GUIDE_PAGE_FILE } from "../missing-upgrade-guide-check";
declare const global: any;

describe("missingUpgradeGuideCheck()", () => {
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

  it("should fail for a modified changeset that sets an update version if the upgrade guide is not also modified", () => {
    global.danger = {
      git: {
        modified_files: ["./.danger/__fixtures__/changeset/tiny-robot-hands.md"],
        created_files: [],
      },
    };
    missingUpgradeGuideCheck();
    expectFail();
  });

  it("should fail for a created changeset that that sets a major version if the upgrade guide is not also modified", () => {
    global.danger = {
      git: {
        modified_files: [],
        created_files: ["./.danger/__fixtures__/changeset/tiny-robot-hands.md"],
      },
    };
    missingUpgradeGuideCheck();
    expectFail();
  });

  it("should fail for a created changeset that that sets a non-core major version if the upgrade guide is not also modified", () => {
    global.danger = {
      git: {
        modified_files: [],
        created_files: ["./.danger/__fixtures__/changeset/pretty-cameras-burn.md"],
      },
    };
    missingUpgradeGuideCheck();
    expectFail();
  });

  it("should not fail for any changeset that bumps a non-core major version and bumps core minor/patch", () => {
    global.danger = {
      git: {
        modified_files: [],
        created_files: ["./.danger/__fixtures__/changeset/lost-cradle-unlimited.md"],
      },
    };
    missingUpgradeGuideCheck();
    expect(global.fail).not.toHaveBeenCalled();
  });

  it("should not fail for any changeset that sets a major version but DOES include a change to the upgrade guide", () => {
    global.danger = {
      git: {
        modified_files: [UPGRADE_GUIDE_PAGE_FILE],
        created_files: ["./.danger/__fixtures__/changeset/tiny-robot-hands.md"],
      },
    };
    missingUpgradeGuideCheck();
    expect(global.fail).not.toHaveBeenCalled();
  });

  it("should not fail for any changeset that does not set a major version", () => {
    global.danger = {
      git: {
        modified_files: [
          "./.danger/__fixtures__/changeset/heavy-peaches-repeat.md",
          "./.danger/__fixtures__/changeset/pink-masks-walk.md",
        ],
        created_files: ["./.danger/__fixtures__/changeset/popular-cheetahs-punch.md"],
      },
    };
    missingUpgradeGuideCheck();
    expect(global.fail).not.toHaveBeenCalled();
  });
});
