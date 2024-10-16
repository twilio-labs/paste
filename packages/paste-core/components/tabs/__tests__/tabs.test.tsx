import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../src";
import { getElementName } from "../src/utils";
import { StateHookTabs } from "../stories/index.stories";

describe("Tabs", () => {
  window.HTMLElement.prototype.scrollIntoView = function () {};

  const [tabOneId, tabTwoId, tabThreeId, panelOneId, panelTwoId, panelThreeId] = [...new Array(6)].map(
    (_, i) => `${i}`,
  );

  const ManualIdExample = (): JSX.Element => {
    return (
      <Theme.Provider theme="default">
        <Tabs orientation="horizontal" selectedId={tabOneId} baseId="">
          <TabList aria-label="My tabs">
            <Tab id={tabOneId}>Tab 1 is a long tab name because the server sent a long tab name</Tab>
            <Tab id={tabTwoId}>Tab 2</Tab>
            <Tab id={tabThreeId}>Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId={tabOneId} id={panelOneId}>
              Tab 1
            </TabPanel>
            <TabPanel tabId={tabTwoId} id={panelTwoId}>
              Tab 1
            </TabPanel>
            <TabPanel tabId={tabThreeId} id={panelThreeId}>
              Tab 1
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Theme.Provider>
    );
  };

  describe("Utils", () => {
    describe("getElementName", () => {
      const mockFallbackName = "TEST_ELEMENT_FALLBACK";

      it("should return the correct string when element is undefined", () => {
        expect(getElementName("horizontal", mockFallbackName)).toEqual("HORIZONTAL_TEST_ELEMENT_FALLBACK");
        expect(getElementName("vertical", mockFallbackName)).toEqual("VERTICAL_TEST_ELEMENT_FALLBACK");
      });

      it("should return the correct string when element is defined", () => {
        expect(getElementName("horizontal", mockFallbackName, "CUSTOM_NAME")).toEqual("CUSTOM_NAME");
        expect(getElementName("vertical", mockFallbackName, "CUSTOM_NAME")).toEqual("CUSTOM_NAME");
      });

      it("should return the correct string when element is an empty string", () => {
        expect(getElementName("horizontal", mockFallbackName, "")).toEqual("");
        expect(getElementName("vertical", mockFallbackName, "")).toEqual("");
      });
    });
  });
  describe("Render", () => {
    // eslint-disable-next-line consistent-return
    it("relevant html and aria attributes", async () => {
      render(<ManualIdExample />);

      const renderedTabList = screen.getByRole("tablist");
      expect(renderedTabList.getAttribute("aria-orientation")).toEqual("horizontal");
      expect(renderedTabList.getAttribute("aria-label")).toEqual("My tabs");

      const [TabOne, TabTwo, TabThree] = screen.queryAllByRole("tab");

      expect(TabOne.getAttribute("aria-controls")).toBe(panelOneId);
      expect(TabOne.getAttribute("aria-selected")).toBe("true");
      expect(TabOne.getAttribute("id")).toBe(tabOneId);
      expect(TabOne.getAttribute("tabindex")).toBe("0");

      expect(TabTwo.getAttribute("aria-controls")).toBe(panelTwoId);
      expect(TabTwo.getAttribute("aria-selected")).toBe("false");
      expect(TabTwo.getAttribute("id")).toBe(tabTwoId);
      expect(TabTwo.getAttribute("tabindex")).toBe("-1");

      expect(TabThree.getAttribute("aria-controls")).toBe(panelThreeId);
      expect(TabThree.getAttribute("aria-selected")).toBe("false");
      expect(TabThree.getAttribute("id")).toBe(tabThreeId);
      expect(TabThree.getAttribute("tabindex")).toBe("-1");

      let activePanel = screen.queryByRole("tabpanel");
      if (activePanel === null) return false;
      expect(activePanel.getAttribute("aria-labelledby")).toBe(tabOneId);
      expect(activePanel.getAttribute("id")).toBe(panelOneId);
      expect(activePanel.getAttribute("tabindex")).toBe("0");

      userEvent.click(TabTwo);

      activePanel = screen.queryByRole("tabpanel");
      if (activePanel === null) return false;
      expect(activePanel.getAttribute("aria-labelledby")).toBe(tabTwoId);
      expect(activePanel.getAttribute("id")).toBe(panelTwoId);
      expect(activePanel.getAttribute("tabindex")).toBe("0");
    });

    // eslint-disable-next-line consistent-return
    it("should render tabs using the state prop and go to the next tab on button click", async () => {
      render(
        <Theme.Provider theme="default">
          <StateHookTabs />
        </Theme.Provider>,
      );

      const [ButtonOne] = screen.queryAllByRole("button");

      let activePanel = screen.queryByRole("tabpanel");
      if (activePanel === null) return false;
      expect(activePanel.getAttribute("aria-labelledby")).toBe(screen.getAllByRole("tab")[0].id);
      expect(activePanel.getAttribute("tabindex")).toBe("0");

      userEvent.click(ButtonOne);

      expect(screen.getAllByRole("tab")[1].getAttribute("aria-selected")).toBe("true");
      activePanel = screen.queryByRole("tabpanel");
      if (activePanel === null) return false;
      expect(activePanel.getAttribute("aria-labelledby")).toBe(screen.getAllByRole("tab")[1].id);
      expect(activePanel.getAttribute("tabindex")).toBe("0");
    });
  });

  describe("HTML Attribute", () => {
    it("should set an element data attribute for Horizontal Tabs (default)", () => {
      render(
        <Theme.Provider theme="default">
          <Tabs orientation="horizontal" baseId="">
            <TabList data-testid="tab-list" aria-label="My tabs">
              <Tab data-testid="tab-1">Tab 1 is a long tab name because the server sent a long tab name</Tab>
              <Tab data-testid="tab-2">Tab 2</Tab>
              <Tab data-testid="tab-3">Tab 3</Tab>
            </TabList>
            <TabPanels data-testid="tab-panels">
              <TabPanel data-testid="tab-panel-1">Tab 1</TabPanel>
              <TabPanel data-testid="tab-panel-2">Tab 2</TabPanel>
              <TabPanel data-testid="tab-panel-3">Tab 3</TabPanel>
            </TabPanels>
          </Tabs>
        </Theme.Provider>,
      );

      const outerDiv = screen.getByTestId("tab-list").parentElement as HTMLElement;

      expect(outerDiv.getAttribute("data-paste-element")).toEqual("HORIZONTAL_TABS");
      expect(screen.getByTestId("tab-list").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB_LIST");
      expect(
        (screen.getByTestId("tab-list").firstChild?.firstChild as HTMLElement).getAttribute("data-paste-element"),
      ).toEqual("HORIZONTAL_TAB_LIST_CHILD_SCROLL_WRAPPER");
      expect(
        (screen.getByTestId("tab-list").firstChild?.firstChild?.firstChild as HTMLElement).getAttribute(
          "data-paste-element",
        ),
      ).toEqual("HORIZONTAL_TAB_LIST_CHILD");
      expect(screen.getByTestId("tab-1").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB");
      expect(screen.getByTestId("tab-2").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB");
      expect(screen.getByTestId("tab-3").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB");
      expect(screen.getByTestId("tab-panels").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB_PANELS");
      expect(screen.getByTestId("tab-panel-1").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB_PANEL");
      expect(screen.getByTestId("tab-panel-2").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB_PANEL");
      expect(screen.getByTestId("tab-panel-3").getAttribute("data-paste-element")).toEqual("HORIZONTAL_TAB_PANEL");
    });

    it("should set an element data attribute for Vertical Tabs (default)", () => {
      render(
        <Theme.Provider theme="default">
          <Tabs orientation="vertical" baseId="">
            <TabList data-testid="tab-list" aria-label="My tabs">
              <Tab data-testid="tab-1">Tab 1 is a long tab name because the server sent a long tab name</Tab>
              <Tab data-testid="tab-2">Tab 2</Tab>
              <Tab data-testid="tab-3">Tab 3</Tab>
            </TabList>
            <TabPanels data-testid="tab-panels">
              <TabPanel data-testid="tab-panel-1">Tab 1</TabPanel>
              <TabPanel data-testid="tab-panel-2">Tab 2</TabPanel>
              <TabPanel data-testid="tab-panel-3">Tab 3</TabPanel>
            </TabPanels>
          </Tabs>
        </Theme.Provider>,
      );

      const outerDiv = screen.getByTestId("tab-list").parentElement as HTMLElement;

      expect(outerDiv.getAttribute("data-paste-element")).toEqual("VERTICAL_TABS");
      expect(screen.getByTestId("tab-list").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB_LIST");
      expect((screen.getByTestId("tab-list").firstChild as HTMLElement).getAttribute("data-paste-element")).toEqual(
        "VERTICAL_TAB_LIST_CHILD",
      );
      expect(screen.getByTestId("tab-1").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB");
      expect(screen.getByTestId("tab-2").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB");
      expect(screen.getByTestId("tab-3").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB");
      expect(screen.getByTestId("tab-panels").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB_PANELS");
      expect(screen.getByTestId("tab-panel-1").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB_PANEL");
      expect(screen.getByTestId("tab-panel-2").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB_PANEL");
      expect(screen.getByTestId("tab-panel-3").getAttribute("data-paste-element")).toEqual("VERTICAL_TAB_PANEL");
    });

    it("should set an element data attribute Horizontal Tabs", () => {
      render(
        <Theme.Provider theme="default">
          <Tabs element="HORSE" orientation="horizontal" baseId="">
            <TabList element="CAT" data-testid="tab-list" aria-label="My tabs">
              <Tab element="TIGER" data-testid="tab-1">
                Tab 1 is a long tab name because the server sent a long tab name
              </Tab>
              <Tab element="PANTHER" data-testid="tab-2">
                Tab 2
              </Tab>
              <Tab element="SCOTTISH_FOLD" data-testid="tab-3">
                Tab 3
              </Tab>
            </TabList>
            <TabPanels element="DOG" data-testid="tab-panels">
              <TabPanel element="CORGI" data-testid="tab-panel-1">
                Tab 1
              </TabPanel>
              <TabPanel element="GOLDEN_DOODLE" data-testid="tab-panel-2">
                Tab 2
              </TabPanel>
              <TabPanel element="PUG" data-testid="tab-panel-3">
                Tab 3
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Theme.Provider>,
      );

      const outerDiv = screen.getByTestId("tab-list").parentElement as HTMLElement;

      expect(outerDiv.getAttribute("data-paste-element")).toEqual("HORSE");
      expect(screen.getByTestId("tab-list").getAttribute("data-paste-element")).toEqual("CAT");
      expect(
        (screen.getByTestId("tab-list").firstChild?.firstChild as HTMLElement).getAttribute("data-paste-element"),
      ).toEqual("CAT_CHILD_SCROLL_WRAPPER");
      expect(screen.getByTestId("tab-1").getAttribute("data-paste-element")).toEqual("TIGER");
      expect(screen.getByTestId("tab-2").getAttribute("data-paste-element")).toEqual("PANTHER");
      expect(screen.getByTestId("tab-3").getAttribute("data-paste-element")).toEqual("SCOTTISH_FOLD");
      expect(screen.getByTestId("tab-panels").getAttribute("data-paste-element")).toEqual("DOG");
      expect(screen.getByTestId("tab-panel-1").getAttribute("data-paste-element")).toEqual("CORGI");
      expect(screen.getByTestId("tab-panel-2").getAttribute("data-paste-element")).toEqual("GOLDEN_DOODLE");
      expect(screen.getByTestId("tab-panel-3").getAttribute("data-paste-element")).toEqual("PUG");
    });

    it("should set an element data attribute for Vertical Tabs", () => {
      render(
        <Theme.Provider theme="default">
          <Tabs element="HORSE" orientation="vertical" baseId="">
            <TabList element="CAT" data-testid="tab-list" aria-label="My tabs">
              <Tab element="TIGER" data-testid="tab-1">
                Tab 1 is a long tab name because the server sent a long tab name
              </Tab>
              <Tab element="PANTHER" data-testid="tab-2">
                Tab 2
              </Tab>
              <Tab element="SCOTTISH_FOLD" data-testid="tab-3">
                Tab 3
              </Tab>
            </TabList>
            <TabPanels element="DOG" data-testid="tab-panels">
              <TabPanel element="CORGI" data-testid="tab-panel-1">
                Tab 1
              </TabPanel>
              <TabPanel element="GOLDEN_DOODLE" data-testid="tab-panel-2">
                Tab 2
              </TabPanel>
              <TabPanel element="PUG" data-testid="tab-panel-3">
                Tab 3
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Theme.Provider>,
      );

      const outerDiv = screen.getByTestId("tab-list").parentElement as HTMLElement;

      expect(outerDiv.getAttribute("data-paste-element")).toEqual("HORSE");
      expect(screen.getByTestId("tab-list").getAttribute("data-paste-element")).toEqual("CAT");
      expect((screen.getByTestId("tab-list").firstChild as HTMLElement).getAttribute("data-paste-element")).toEqual(
        "CAT_CHILD",
      );
      expect(screen.getByTestId("tab-1").getAttribute("data-paste-element")).toEqual("TIGER");
      expect(screen.getByTestId("tab-2").getAttribute("data-paste-element")).toEqual("PANTHER");
      expect(screen.getByTestId("tab-3").getAttribute("data-paste-element")).toEqual("SCOTTISH_FOLD");
      expect(screen.getByTestId("tab-panels").getAttribute("data-paste-element")).toEqual("DOG");
      expect(screen.getByTestId("tab-panel-1").getAttribute("data-paste-element")).toEqual("CORGI");
      expect(screen.getByTestId("tab-panel-2").getAttribute("data-paste-element")).toEqual("GOLDEN_DOODLE");
      expect(screen.getByTestId("tab-panel-3").getAttribute("data-paste-element")).toEqual("PUG");
    });
  });

  describe("Customization", () => {
    it("should add custom styles to Tabs", () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            HORIZONTAL_TABS: {
              margin: "space100",
              padding: "space100",
              borderStyle: "solid",
              borderWidth: "borderWidth30",
              borderColor: "colorBorderPrimary",
            },
            HORIZONTAL_TAB_LIST: {
              borderColor: "colorBorderDestructive",
              marginY: "space100",
            },
            HORIZONTAL_TAB: {
              fontFamily: "fontFamilyCode",
            },
            HORIZONTAL_TAB_PANELS: {
              marginY: "space10",
            },
            HORIZONTAL_TAB_PANEL: {
              paddingX: "space30",
            },
          }}
        >
          <Tabs orientation="horizontal" baseId="">
            <TabList data-testid="tab-list" aria-label="My tabs">
              <Tab data-testid="tab-1">Tab 1 is a long tab name because the server sent a long tab name</Tab>
              <Tab data-testid="tab-2">Tab 2</Tab>
              <Tab data-testid="tab-3">Tab 3</Tab>
            </TabList>
            <TabPanels data-testid="tab-panels">
              <TabPanel data-testid="tab-panel-1">Tab 1</TabPanel>
              <TabPanel data-testid="tab-panel-2">Tab 2</TabPanel>
              <TabPanel data-testid="tab-panel-3">Tab 3</TabPanel>
            </TabPanels>
          </Tabs>
        </CustomizationProvider>,
      );

      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("margin", "2.25rem");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("padding", "2.25rem");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("border-style", "solid");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("border-width", "4px");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("border-color", "rgb(2, 99, 224)");

      expect(screen.getByTestId("tab-list")).toHaveStyleRule("margin-top", "2.25rem");
      expect(screen.getByTestId("tab-list")).toHaveStyleRule("margin-bottom", "2.25rem");

      expect(screen.getByTestId("tab-1")).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");
      expect(screen.getByTestId("tab-2")).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");
      expect(screen.getByTestId("tab-3")).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");

      expect(screen.getByTestId("tab-panels")).toHaveStyleRule("margin-top", "0.125rem");
      expect(screen.getByTestId("tab-panels")).toHaveStyleRule("margin-bottom", "0.125rem");

      expect(screen.getByTestId("tab-panel-1")).toHaveStyleRule("padding-right", "0.5rem");
      expect(screen.getByTestId("tab-panel-2")).toHaveStyleRule("padding-left", "0.5rem");
    });

    it("should add custom styles to Tabs with a custom element data attribute", () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            HORSE: {
              margin: "space100",
              padding: "space100",
              borderStyle: "solid",
              borderWidth: "borderWidth30",
              borderColor: "colorBorderPrimary",
            },
            CATS: {
              borderColor: "colorBorderDestructive",
              marginY: "space100",
            },
            RAGDOLL: {
              fontFamily: "fontFamilyCode",
            },
            JAGUAR: {
              fontFamily: "fontFamilyCode",
            },
            CHEETAH: {
              fontFamily: "fontFamilyCode",
            },
            DOGS: {
              marginY: "space10",
            },
            CORGI: {
              paddingX: "space0",
            },
            DOODLE: {
              paddingX: "space20",
            },
            TERRIER: {
              paddingX: "space40",
            },
          }}
        >
          <Tabs element="HORSE" orientation="horizontal" baseId="">
            <TabList element="CATS" data-testid="tab-list" aria-label="My tabs">
              <Tab element="RAGDOLL" data-testid="tab-1">
                Tab 1 is a long tab name because the server sent a long tab name
              </Tab>
              <Tab element="JAGUAR" data-testid="tab-2">
                Tab 2
              </Tab>
              <Tab element="CHEETAH" data-testid="tab-3">
                Tab 3
              </Tab>
            </TabList>
            <TabPanels element="DOGS" data-testid="tab-panels">
              <TabPanel element="CORGI" data-testid="tab-panel-1">
                Tab 1
              </TabPanel>
              <TabPanel element="DOODLE" data-testid="tab-panel-2">
                Tab 2
              </TabPanel>
              <TabPanel element="TERRIER" data-testid="tab-panel-3">
                Tab 3
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CustomizationProvider>,
      );

      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("margin", "2.25rem");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("padding", "2.25rem");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("border-style", "solid");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("border-width", "4px");
      expect(screen.getByTestId("tab-list").parentElement).toHaveStyleRule("border-color", "rgb(2, 99, 224)");

      expect(screen.getByTestId("tab-list")).toHaveStyleRule("margin-top", "2.25rem");
      expect(screen.getByTestId("tab-list")).toHaveStyleRule("margin-bottom", "2.25rem");

      expect(screen.getByTestId("tab-1")).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");
      expect(screen.getByTestId("tab-2")).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");
      expect(screen.getByTestId("tab-3")).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");

      expect(screen.getByTestId("tab-panels")).toHaveStyleRule("margin-top", "0.125rem");
      expect(screen.getByTestId("tab-panels")).toHaveStyleRule("margin-bottom", "0.125rem");

      expect(screen.getByTestId("tab-panel-1")).toHaveStyleRule("padding-right", "0");
      expect(screen.getByTestId("tab-panel-2")).toHaveStyleRule("padding-left", "0.25rem");
      expect(screen.getByTestId("tab-panel-3")).toHaveStyleRule("padding-left", "0.75rem");
    });
  });
});
