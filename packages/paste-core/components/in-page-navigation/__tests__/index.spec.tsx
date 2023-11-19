import { render } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { InPageNavigation, InPageNavigationItem } from "../src";

describe("InPageNavigation", () => {
  it("should render semantically correct with aria properly", () => {
    const { getByRole, getAllByRole, getByText } = render(
      <InPageNavigation aria-label="my-nav">
        <InPageNavigationItem data-test-id="page-1" href="#">
          page 1
        </InPageNavigationItem>
        <InPageNavigationItem currentPage href="#">
          page 2
        </InPageNavigationItem>
      </InPageNavigation>,
    );

    expect(getByRole("navigation")).toHaveAttribute("aria-label", "my-nav");
    expect(getAllByRole("list")).toHaveLength(1);
    expect(getAllByRole("listitem")).toHaveLength(2);
    expect(getAllByRole("link")).toHaveLength(2);
    expect(getByText("page 2")).toHaveAttribute("aria-current", "page");
    expect(getByText("page 1")).toHaveAttribute("data-test-id", "page-1");
  });
});

describe("Customization", () => {
  it("should add custom styles to the default element name", () => {
    const { getByRole } = render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          IN_PAGE_NAVIGATION: { fontWeight: "fontWeightLight" },
          IN_PAGE_NAVIGATION_ITEMS: { padding: "space40" },
          IN_PAGE_NAVIGATION_ITEM: { margin: "space40" },
          IN_PAGE_NAVIGATION_ITEM_ANCHOR: { fontSize: "fontSize40" },
        }}
      >
        <InPageNavigation aria-label="my-nav">
          <InPageNavigationItem href="#">page 1</InPageNavigationItem>
        </InPageNavigation>
        ,
      </CustomizationProvider>,
    );

    const nav = getByRole("navigation");
    const list = getByRole("list");
    const listitem = getByRole("listitem");
    const link = getByRole("link");

    expect(nav).toHaveAttribute("data-paste-element", "IN_PAGE_NAVIGATION");
    expect(list).toHaveAttribute("data-paste-element", "IN_PAGE_NAVIGATION_ITEMS");
    expect(listitem).toHaveAttribute("data-paste-element", "IN_PAGE_NAVIGATION_ITEM");
    expect(link).toHaveAttribute("data-paste-element", "IN_PAGE_NAVIGATION_ITEM_ANCHOR");

    expect(nav).toHaveStyleRule("font-weight", "400");
    expect(list).toHaveStyleRule("padding", "0.75rem");
    expect(listitem).toHaveStyleRule("margin", "0.75rem");
    expect(link).toHaveStyleRule("font-size", "1rem");
  });

  it("should add custom styles to custom element names", () => {
    const { getByRole } = render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          MY_IN_PAGE_NAVIGATION: { fontWeight: "fontWeightLight" },
          MY_IN_PAGE_NAVIGATION_ITEMS: { padding: "space40" },
          MY_IN_PAGE_NAVIGATION_ITEM: { margin: "space40" },
          MY_IN_PAGE_NAVIGATION_ITEM_ANCHOR: { fontSize: "fontSize40" },
        }}
      >
        <InPageNavigation element="MY_IN_PAGE_NAVIGATION" aria-label="my-nav">
          <InPageNavigationItem element="MY_IN_PAGE_NAVIGATION_ITEM" href="#">
            page 1
          </InPageNavigationItem>
        </InPageNavigation>
      </CustomizationProvider>,
    );

    const nav = getByRole("navigation");
    const list = getByRole("list");
    const listitem = getByRole("listitem");
    const link = getByRole("link");

    expect(nav).toHaveAttribute("data-paste-element", "MY_IN_PAGE_NAVIGATION");
    expect(list).toHaveAttribute("data-paste-element", "MY_IN_PAGE_NAVIGATION_ITEMS");
    expect(listitem).toHaveAttribute("data-paste-element", "MY_IN_PAGE_NAVIGATION_ITEM");
    expect(link).toHaveAttribute("data-paste-element", "MY_IN_PAGE_NAVIGATION_ITEM_ANCHOR");

    expect(nav).toHaveStyleRule("font-weight", "400");
    expect(list).toHaveStyleRule("padding", "0.75rem");
    expect(listitem).toHaveStyleRule("margin", "0.75rem");
    expect(link).toHaveStyleRule("font-size", "1rem");
  });
});
