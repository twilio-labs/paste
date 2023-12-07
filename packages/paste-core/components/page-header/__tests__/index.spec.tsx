// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { render, screen } from "@testing-library/react";

import * as React from "react";

import { Customized, Default } from "../stories/index.stories";

describe("PageHeader", () => {
  it("should render", () => {
    const { getByText } = render(<Default />);
    expect(getByText("Wizard title")).toBeDefined();
    expect(getByText("Page title")).toBeDefined();
    expect(getByText("Badge")).toBeDefined();
    expect(getByText("Paragraph text")).toBeDefined();
  });
});

describe("Customization", () => {
  it("should set defeault data-paste-element attribute on page header", () => {
    render(<Customized />);
    expect(screen.getByTestId("page_header")).toHaveAttribute("data-paste-element", "PAGE_HEADER");
    expect(screen.getByTestId("page_header_setting")).toHaveAttribute("data-paste-element", "PAGE_HEADER_SETTING");
    expect(screen.getByTestId("page_header_details")).toHaveAttribute("data-paste-element", "PAGE_HEADER_DETAILS");
    expect(screen.getByTestId("page_header_keyword")).toHaveAttribute("data-paste-element", "PAGE_HEADER_KEYWORD");
    expect(screen.getByTestId("page_header_prefix")).toHaveAttribute("data-paste-element", "PAGE_HEADER_PREFIX");
    expect(screen.getByTestId("page_header_heading")).toHaveAttribute(
      "data-paste-element",
      "PAGE_HEADER_HEADING_WRAPPER",
    );
    expect(screen.getByTestId("page_header_heading").firstChild).toHaveAttribute(
      "data-paste-element",
      "PAGE_HEADER_HEADING",
    );
    expect(screen.getByTestId("page_header_actions")).toHaveAttribute("data-paste-element", "PAGE_HEADER_ACTIONS");
    expect(screen.getByTestId("page_header_meta")).toHaveAttribute("data-paste-element", "PAGE_HEADER_META");
    expect(screen.getByTestId("page_header_paragraph")).toHaveAttribute(
      "data-paste-element",
      "PAGE_HEADER_PARAGRAPH_WRAPPER",
    );
    expect(screen.getByTestId("page_header_paragraph").firstChild).toHaveAttribute(
      "data-paste-element",
      "PAGE_HEADER_PARAGRAPH",
    );
    expect(screen.getByTestId("page_header_in_page_navigation")).toHaveAttribute(
      "data-paste-element",
      "PAGE_HEADER_IN_PAGE_NAVIGATION",
    );
  });
});
