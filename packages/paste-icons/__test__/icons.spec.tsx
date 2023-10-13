import { render } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { AgentIcon } from "../src/AgentIcon";
import { filterBuiltFiles } from "../tools/actions/convertAllAction";
import { normalizeSourceFiles } from "../tools/actions/convertNewAction";
import { getIconNames } from "../tools/actions/listIconsAction";
import { buildListTemplate } from "../tools/templates/buildListTemplate";
import { createIconsFilesObject, jsonTemplate } from "../tools/templates/jsonTemplate";
import { reactIconTemplate } from "../tools/templates/reactIconTemplate";
import {
  cleanFileName,
  getBuildFileName,
  getInputPath,
  getOutputComponentName,
  getReactOutputPath,
  maybeHandleError,
  normalizeFileName,
  pascalCaseWordSplitter,
  removeTsxExtension,
} from "../tools/utils";

describe("Icons", () => {
  describe("HTML attributes", () => {
    it("should have the default element name", () => {
      const { container } = render(<AgentIcon decorative />);
      expect(container.querySelector('[data-paste-element="ICON"]')).toBeInTheDocument();
    });
    it("should have a custom element name", () => {
      const { container } = render(<AgentIcon element="CUSTOM_ICON" decorative />);
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toBeInTheDocument();
    });
  });

  describe("Customization", () => {
    it("should apply custom styles to customizaed icons", () => {
      const { container } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            ICON: { borderRadius: "borderRadius20", backgroundColor: "colorBackgroundSuccess" },
            CUSTOM_ICON: { borderRadius: "borderRadius20", backgroundColor: "colorBackgroundDestructive" },
          }}
        >
          <>
            <AgentIcon decorative />
            <AgentIcon element="CUSTOM_ICON" decorative />
          </>
        </CustomizationProvider>,
      );
      expect(container.querySelector('[data-paste-element="ICON"]')).toHaveStyleRule("border-radius", "4px");
      expect(container.querySelector('[data-paste-element="ICON"]')).toHaveStyleRule(
        "background-color",
        "rgb(20, 176, 83)",
      );
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toHaveStyleRule("border-radius", "4px");
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toHaveStyleRule(
        "background-color",
        "rgb(214, 31, 31)",
      );
    });
  });
});

describe("icons util functions", () => {
  let testIconList: string[];
  beforeEach(() => {
    testIconList = ["icon1", "icon2", "icon3"];
  });

  describe("tools/templates/buildListTemplate util", () => {
    it("accepts an array of icon names and returns a formatted string for esbuild", () => {
      const buildList = `module.exports = [\"src/icon1.tsx\",\"src/icon2.tsx\",\"src/icon3.tsx\"];`;
      expect(buildListTemplate(testIconList)).toEqual(buildList);
    });
  });

  describe("tools/templates/jsonTemplate util", () => {
    it("accepts an array of icon names and returns an array of objects detaiil icon files", () => {
      const expectedOutput = [
        { cjs: "/cjs/icon1.js", esm: "/esm/icon1.js", name: "icon1", svg: "/svg/icon1.svg" },
        { cjs: "/cjs/icon2.js", esm: "/esm/icon2.js", name: "icon2", svg: "/svg/icon2.svg" },
        { cjs: "/cjs/icon3.js", esm: "/esm/icon3.js", name: "icon3", svg: "/svg/icon3.svg" },
      ];
      expect(createIconsFilesObject(testIconList)).toEqual(expectedOutput);
    });

    it("accepts an array of icon names and returns json", () => {
      const expectedOutput =
        '{"icons":[{"name":"icon1","svg":"/svg/icon1.svg","cjs":"/cjs/icon1.js","esm":"/esm/icon1.js"},{"name":"icon2","svg":"/svg/icon2.svg","cjs":"/cjs/icon2.js","esm":"/esm/icon2.js"},{"name":"icon3","svg":"/svg/icon3.svg","cjs":"/cjs/icon3.js","esm":"/esm/icon3.js"}],"deprecatedIcons":[]}';
      expect(jsonTemplate(testIconList)).toEqual(expectedOutput);
    });
  });

  describe("tools/templates/reactIconTemplate util", () => {
    const testReactIconTemplateArgs = { componentName: "testIcon", svg: "testIconSVG" };
    const name = testReactIconTemplateArgs.componentName;
    const TestReactIcon = reactIconTemplate(testReactIconTemplateArgs);
    it("accepts an object and creates a React component template literal", () => {
      expect(typeof TestReactIcon).toBe("string");
      expect(TestReactIcon.includes(`export interface ${name}Props extends IconWrapperProps`)).toBeTruthy();
      expect(TestReactIcon.includes(`${name}.displayName = '${name}'`)).toBeTruthy();
    });
  });

  describe("tools/actions/convertAllAction util", () => {
    it("filterBuiltFiles accepts an array of icon files and filters non tsx files", () => {
      expect(filterBuiltFiles(["icon1.tsx", "icon2", "icon3.tsx"])).toEqual(["icon1.tsx", "icon3.tsx"]);
    });
  });

  describe("tools/actions/convertNewAction util", () => {
    it("normalizeSourceFiles accepts an array of icon files and filters blocked directories", () => {
      expect(normalizeSourceFiles(["icon1.tsx", "helpers", "types", "icon2.tsx"])).toEqual(["icon1", "icon2"]);
    });
  });

  describe("tools/actions/listIconsAction util", () => {
    it("gets all the icon names of non blocked icons", async () => {
      const iconNames = await getIconNames();
      expect(iconNames).toMatchSnapshot();
    });
  });

  describe("tools/utils.ts utils", () => {
    it("getOutputComponentName util takes an icon svg and strips extension and suffix and converts to startcase", () => {
      expect(getOutputComponentName("brandLogoIcon.svg")).toEqual("BrandLogoIcon");
    });

    it("pascalCaseWordSplitter util takes a string and splits at lowercase-uppercase instances", () => {
      expect(pascalCaseWordSplitter("hElLo iM nORA")).toEqual("h El Lo i M n ORA");
    });
    it("cleanFileName util takes a file name string and converts to startcase and removes spaces", () => {
      expect(cleanFileName("iAmAFile.tsx")).toEqual("IAmAFileTsx");
    });
    it("normalizeFileName util takes a file name and removes dashes and extensions and suffix and converts to lowercase", () => {
      expect(normalizeFileName("iAmA File.tsx--.svg")).toEqual("iamafile");
    });

    it("removeTsxExtension util takes an icon file and removes the tsx extension", () => {
      expect(removeTsxExtension("icons.tsx")).toEqual("icons");
    });
    it("getInputPath util takes a file name and returns the complete path", () => {
      expect(getInputPath("iAmAFile.tsx").includes("paste/packages/paste-icons/svg/iAmAFile.tsx")).toBeTruthy();
    });
    it("getReactOutputPath util takes a file name and returns the complete path for the React component", () => {
      expect(
        getReactOutputPath("iAmAFile.tsx").includes(`paste/packages/paste-icons/src/IAmAFileTsxIcon.tsx`),
      ).toBeTruthy();
    });
    it("getBuildFileName util takes a file and adds src/ and .tsx", () => {
      expect(getBuildFileName("iAmAFile")).toEqual("src/iAmAFile.tsx");
    });

    it("maybeHandleError util throws if error is present", () => {
      // hide console errors from terminal when throwing expected errors
      const spy = jest.spyOn(console, "error");
      spy.mockImplementation(() => {});
      const testError = { message: "test error" };
      expect(() => maybeHandleError("test", testError)).toThrow();
      spy.mockRestore();
    });
  });
});
