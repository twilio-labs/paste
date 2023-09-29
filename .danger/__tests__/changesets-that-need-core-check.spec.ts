import changesetsThatNeedCoreCheck, {
  getChangesetsNotTaggingCore,
  shouldFlagChangeset,
} from "../changesets-that-need-core-check";

declare const global: any;

describe("shouldFlagChangeset", () => {
  it("should not flag icon changesets", () => {
    expect(shouldFlagChangeset("./.danger/__fixtures__/changeset/heavy-peaches-repeat.md")).toEqual(false);
  });

  it("should not flag changesets with core in", () => {
    expect(shouldFlagChangeset("./.danger/__fixtures__/changeset/pink-masks-walk.md")).toEqual(false);
  });

  it("should flag changesets without core in", () => {
    expect(shouldFlagChangeset("./.danger/__fixtures__/changeset/popular-cheetahs-punch.md")).toEqual(true);
    expect(shouldFlagChangeset("./.danger/__fixtures__/changeset/pretty-cameras-burn.md")).toEqual(true);
  });
});

describe("getChangesetsNotTaggingCore", () => {
  it("should return an array of changesets that do not tag core", () => {
    expect(
      getChangesetsNotTaggingCore([
        "./.danger/__fixtures__/changeset/heavy-peaches-repeat.md",
        "./.danger/__fixtures__/changeset/pink-masks-walk.md",
        "./.danger/__fixtures__/changeset/popular-cheetahs-punch.md",
        "./.danger/__fixtures__/changeset/pretty-cameras-burn.md",
      ]),
    ).toEqual([
      "./.danger/__fixtures__/changeset/popular-cheetahs-punch.md",
      "./.danger/__fixtures__/changeset/pretty-cameras-burn.md",
    ]);
  });
});

describe("changesetsThatNeedCoreCheck()", () => {
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

  it("should fail for each modified changeset that does not tag core", () => {
    global.danger = {
      git: {
        modified_files: [
          "./.danger/__fixtures__/changeset/heavy-peaches-repeat.md",
          "./.danger/__fixtures__/changeset/pink-masks-walk.md",
          "./.danger/__fixtures__/changeset/popular-cheetahs-punch.md",
          "./.danger/__fixtures__/changeset/pretty-cameras-burn.md",
        ],
        created_files: [],
      },
    };
    changesetsThatNeedCoreCheck();
    expect(global.fail).toHaveBeenCalledTimes(2);
  });

  it("should fail for each created changeset that does not tag core", () => {
    global.danger = {
      git: {
        modified_files: [],
        created_files: [
          "./.danger/__fixtures__/changeset/pink-masks-walk.md",
          "./.danger/__fixtures__/changeset/pretty-cameras-burn.md",
        ],
      },
    };
    changesetsThatNeedCoreCheck();
    expect(global.fail).toHaveBeenCalledTimes(1);
  });

  it("should fail for each modified and created changeset that does not tag core", () => {
    global.danger = {
      git: {
        modified_files: [
          "./.danger/__fixtures__/changeset/heavy-peaches-repeat.md",
          "./.danger/__fixtures__/changeset/pink-masks-walk.md",
          "./.danger/__fixtures__/changeset/pretty-cameras-burn.md",
        ],
        created_files: ["./.danger/__fixtures__/changeset/popular-cheetahs-punch.md"],
      },
    };
    changesetsThatNeedCoreCheck();
    expect(global.fail).toHaveBeenCalledTimes(2);
  });

  it("should name the failing changeset that does not tag core", () => {
    global.danger = {
      git: {
        modified_files: [
          "./.danger/__fixtures__/changeset/heavy-peaches-repeat.md",
          "./.danger/__fixtures__/changeset/pink-masks-walk.md",
        ],
        created_files: ["./.danger/__fixtures__/changeset/popular-cheetahs-punch.md"],
      },
    };
    changesetsThatNeedCoreCheck();
    expect(global.fail).toHaveBeenCalledWith(
      "Changeset ./.danger/__fixtures__/changeset/popular-cheetahs-punch.md does not mention a change to Paste Core. Please include core with this changeset.",
    );
  });
});
