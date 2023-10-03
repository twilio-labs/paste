import {
  type ComponentApi,
  type GroupedComponentApi,
  getPathFromPackageName,
  groupPropsByExternal,
} from "../componentApiUtils";

jest.mock("../../../../../tools/.cache/packages.json", () => [
  {
    name: "@twilio-paste/codemods",
    version: "0.4.0",
    private: false,
    location: "foo/bar/paste-codemods",
  },
  {
    name: "@twilio-paste/color-contrast-utils",
    version: "5.0.0",
    private: false,
    location: "foo/bar/paste-color-contrast-utils",
  },
  {
    name: "@twilio-paste/account-switcher",
    version: "2.0.0",
    private: false,
    location: "foo/bar/paste-core/components/account-switcher",
  },
]);

describe("getPathFromPackageName", () => {
  it("should return an empty string for an unknown package name", () => {
    expect(getPathFromPackageName("unknown-package")).toBe("");
  });

  it("should return the package location for a known package name", () => {
    const packageName = "@twilio-paste/account-switcher";
    const result = getPathFromPackageName(packageName);
    expect(result).toBe("foo/bar/paste-core/components/account-switcher");
  });
});

describe("groupPropsByExternal", () => {
  it("should group props by external", () => {
    const api: ComponentApi = {
      Button: {
        onClick: {
          type: "function",
          required: true,
          description: "Function to be called when the button is clicked",
          externalProp: true,
        },
        children: {
          type: "ReactNode",
          required: true,
          description: "The content of the button",
          externalProp: false,
        },
        foo: {
          type: "ReactNode",
          required: false,
          description: "The content of the button",
          externalProp: true,
        },
      },
      Input: {
        value: {
          type: "string",
          required: true,
          description: "The value of the input",
          externalProp: true,
        },
        onChange: {
          type: "function",
          required: true,
          description: "Function to be called when the input value changes",
          externalProp: true,
        },
        bar: {
          type: "function",
          required: false,
          description: "Function to be called when the input value changes",
          externalProp: true,
        },
      },
    };

    const expected: GroupedComponentApi = {
      Button: {
        internalProps: {
          children: {
            type: "ReactNode",
            required: true,
            description: "The content of the button",
            externalProp: false,
          },
          onClick: {
            type: "function",
            required: true,
            description: "Function to be called when the button is clicked",
            externalProp: true,
          },
        },
        externalProps: {
          foo: {
            type: "ReactNode",
            required: false,
            description: "The content of the button",
            externalProp: true,
          },
        },
      },
      Input: {
        internalProps: {
          value: {
            type: "string",
            required: true,
            description: "The value of the input",
            externalProp: true,
          },
          onChange: {
            type: "function",
            required: true,
            description: "Function to be called when the input value changes",
            externalProp: true,
          },
        },
        externalProps: {
          bar: {
            type: "function",
            required: false,
            description: "Function to be called when the input value changes",
            externalProp: true,
          },
        },
      },
    };

    const result = groupPropsByExternal(api);
    expect(result).toEqual(expected);
  });
});
