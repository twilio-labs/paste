import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import {
  ListItem,
  OrderedDisplayList,
  OrderedDisplayListHeading,
  OrderedDisplayListItem,
  OrderedList,
  UnorderedList,
} from "../src";

describe("Ordered List", () => {
  describe("Render", () => {
    it("should allow marginTop and marginBottom styling props", () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <OrderedList marginTop="space40" marginBottom="space40">
            Children
          </OrderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveStyleRule("margin-top", "0.75rem");
      expect(renderedList).toHaveStyleRule("margin-bottom", "0.75rem");
    });

    it("should set list style type styles to combat css reset stylesheets", () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <OrderedList data-testid="ordered-list">Children</OrderedList>
          <UnorderedList data-testid="unordered-list">Children</UnorderedList>
        </CustomizationProvider>,
      );
      const renderedOrderedList = screen.getByTestId("ordered-list");
      const renderedUnorderedList = screen.getByTestId("unordered-list");
      expect(renderedOrderedList).toHaveStyleRule("list-style-type", "decimal");
      expect(renderedUnorderedList).toHaveStyleRule("list-style-type", "disc");
    });

    it("should allow aria attributes", () => {
      render(<OrderedList aria-expanded="true">Children</OrderedList>);
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveAttribute("aria-expanded", "true");
    });

    it("should allow data attributes", () => {
      render(<OrderedList data-test="test-hook">Children</OrderedList>);
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveAttribute("data-test", "test-hook");
    });

    it("should allow HTML attributes", () => {
      render(<OrderedList title="random title">Children</OrderedList>);
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveAttribute("title", "random title");
    });
  });

  describe("HTML attributes", () => {
    it("should set a element data attribute for OrderedList", () => {
      render(<OrderedList>ordered list</OrderedList>);
      expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("ORDERED_LIST");
    });
    it("should set a custom element data attribute for OrderedList", () => {
      render(<OrderedList element="foo">ordered list</OrderedList>);
      expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("foo");
    });
  });
});

describe("Unordered List", () => {
  describe("Render", () => {
    it("should allow marginTop and marginBottom styling props", () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <UnorderedList marginTop="space40" marginBottom="space40">
            Children
          </UnorderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveStyleRule("margin-top", "0.75rem");
      expect(renderedList).toHaveStyleRule("margin-bottom", "0.75rem");
    });

    it("should allow aria attributes", () => {
      render(<UnorderedList aria-label="label">Children</UnorderedList>);
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveAttribute("aria-label", "label");
    });

    it("should allow data attributes", () => {
      render(<UnorderedList data-rando="test-hook">Children</UnorderedList>);
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveAttribute("data-rando", "test-hook");
    });

    it("should allow HTML attributes", () => {
      render(<UnorderedList title="random title">Children</UnorderedList>);
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveAttribute("title", "random title");
    });
  });

  describe("HTML attributes", () => {
    it("should set a element data attribute for UnorderedList", () => {
      render(<UnorderedList>unordered list</UnorderedList>);
      expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("UNORDERED_LIST");
    });
    it("should set a custom element data attribute for UnorderedList", () => {
      render(<UnorderedList element="foo">unordered list</UnorderedList>);
      expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("foo");
    });
  });
});

describe("ListItem", () => {
  describe("Render", () => {
    it("should allow aria, html, and data attributes", () => {
      render(
        <ListItem aria-pressed="true" data-rando="test-hook" title="random title">
          Children
        </ListItem>,
      );
      const renderedListItem = screen.getByRole("listitem");
      expect(renderedListItem).toHaveAttribute("aria-pressed", "true");
      expect(renderedListItem).toHaveAttribute("data-rando", "test-hook");
      expect(renderedListItem).toHaveAttribute("title", "random title");
    });
  });

  describe("HTML attributes", () => {
    it("should set a element data attribute for ListItem", () => {
      render(<ListItem>list item</ListItem>);
      expect(screen.getByRole("listitem").getAttribute("data-paste-element")).toEqual("LIST_ITEM");
    });
    it("should set a custom element data attribute for ListItem", () => {
      render(<ListItem element="foo">list item</ListItem>);
      expect(screen.getByRole("listitem").getAttribute("data-paste-element")).toEqual("foo");
    });
  });
});

describe("Ordered Display List", () => {
  describe("Render", () => {
    it("should allow marginTop and marginBottom styling props", () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <OrderedDisplayList marginTop="space40" marginBottom="space40">
            Children
          </OrderedDisplayList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveStyleRule("margin-top", "0.75rem");
      expect(renderedList).toHaveStyleRule("margin-bottom", "0.75rem");
    });

    it("should allow aria, data, and html attributes", () => {
      render(
        <OrderedDisplayList aria-expanded="true" data-test="test-hook" title="random title">
          <OrderedDisplayListItem aria-expanded="true" data-test="test-hook">
            <OrderedDisplayListHeading aria-expanded="true" data-test="test-hook" as="h2">
              Heading20
            </OrderedDisplayListHeading>
            Text beneath heading
          </OrderedDisplayListItem>
        </OrderedDisplayList>,
      );
      const renderedList = screen.getByRole("list");
      expect(renderedList).toHaveAttribute("aria-expanded", "true");
      expect(renderedList).toHaveAttribute("data-test", "test-hook");
      expect(renderedList).toHaveAttribute("title", "random title");
      const renderedListItem = screen.getByRole("listitem");
      expect(renderedListItem).toHaveAttribute("aria-expanded", "true");
      expect(renderedListItem).toHaveAttribute("data-test", "test-hook");
      const renderedHeading = screen.getByRole("heading");
      expect(renderedHeading).toHaveAttribute("aria-expanded", "true");
      expect(renderedHeading).toHaveAttribute("data-test", "test-hook");
    });
  });

  describe("Customization", () => {
    it("should set a element data attribute for OrderedDisplayList", () => {
      render(
        <OrderedDisplayList>
          <OrderedDisplayListItem>
            <OrderedDisplayListHeading as="h2">Heading</OrderedDisplayListHeading>
            Text
          </OrderedDisplayListItem>
        </OrderedDisplayList>,
      );
      expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("ORDERED_DISPLAY_LIST");
      expect(screen.getByRole("listitem").getAttribute("data-paste-element")).toEqual("ORDERED_DISPLAY_LIST_ITEM");
      expect(screen.getByRole("heading").getAttribute("data-paste-element")).toEqual("ORDERED_DISPLAY_LIST_HEADING");
    });
    it("should set a custom element data attribute for OrderedDisplayList", () => {
      render(
        <OrderedDisplayList element="foo">
          <OrderedDisplayListItem element="fooitem">
            <OrderedDisplayListHeading element="foohead" as="h2">
              Heading
            </OrderedDisplayListHeading>
            Text
          </OrderedDisplayListItem>
        </OrderedDisplayList>,
      );
      expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("foo");
      expect(screen.getByRole("listitem").getAttribute("data-paste-element")).toEqual("fooitem");
      expect(screen.getByRole("heading").getAttribute("data-paste-element")).toEqual("foohead");
    });
  });
});
