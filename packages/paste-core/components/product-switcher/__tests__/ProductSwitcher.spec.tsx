import { act, render, screen } from "@testing-library/react";
import * as React from "react";

import {
  CustomElementName,
  DefaultElementName,
  WithoutProductIcons,
} from "../stories/ProductSwitcher.customization.stories";
import { ProductSwitcherMenu } from "../stories/ProductSwitcher.stories";

describe("ProductSwitcher", () => {
  describe("element naming", () => {
    it("should set all default element names", async () => {
      await act(async () => {
        render(<ProductSwitcherMenu />);
      });
      expect(screen.getByRole("button", { name: "Switch products" }).dataset.pasteElement).toEqual(
        "PRODUCT_SWITCHER_BUTTON",
      );
      expect(screen.getByRole("menu").dataset.pasteElement).toEqual("PRODUCT_SWITCHER");
      expect(screen.getByRole("menuitemradio", { name: "Twilio SMS, Voice & Video" }).dataset.pasteElement).toEqual(
        "PRODUCT_SWITCHER_ITEM",
      );
    });
  });
  describe("custom element naming", () => {
    it("should set all custom element names", async () => {
      await act(async () => {
        render(<CustomElementName />);
      });
      expect(screen.getByRole("button", { name: "Switch products" }).dataset.pasteElement).toEqual("FOO");
      expect(screen.getByRole("menu").dataset.pasteElement).toEqual("BAR");
      expect(screen.getByRole("menuitemradio", { name: "Twilio SMS, Voice & Video" }).dataset.pasteElement).toEqual(
        "BAZ",
      );
    });
  });
  describe("customization of styles", () => {
    it("should set all custom styles", async () => {
      await act(async () => {
        render(<DefaultElementName />);
      });
      expect(screen.getByRole("button", { name: "Switch products" })).toHaveStyleRule(
        "background-color",
        "rgb(2, 99, 224)",
      );
      expect(screen.getByRole("menu")).toHaveStyleRule("border-color", "rgb(117, 12, 12)");
      expect(screen.getByRole("menuitemradio", { name: "Twilio SMS, Voice & Video" })).toHaveStyleRule(
        "text-decoration",
        "underline",
      );
    });
  });
  describe("customization of styles with custom name", () => {
    it("should set all custom styles", async () => {
      await act(async () => {
        render(<CustomElementName />);
      });
      expect(screen.getByRole("button", { name: "Switch products" })).toHaveStyleRule(
        "background-color",
        "rgb(2, 99, 224)",
      );
      expect(screen.getByRole("menu")).toHaveStyleRule("border-color", "rgb(117, 12, 12)");
      expect(screen.getByRole("menuitemradio", { name: "Twilio SMS, Voice & Video" })).toHaveStyleRule(
        "text-decoration",
        "underline",
      );
    });
  });
});
describe("customization of productIcon", () => {
  it("should render product icon if set", async () => {
    await act(async () => {
      render(<DefaultElementName />);
    });
    const menuItem = screen.getByRole("menuitemradio", { name: "Twilio SMS, Voice & Video" });
    const imgChildren = Array.from(menuItem.querySelectorAll('[role="img"]'));
    expect(imgChildren).toHaveLength(2);
  });
  it("should not render product icon if none is set", async () => {
    await act(async () => {
      render(<WithoutProductIcons />);
    });
    const menuItem = screen.getByRole("menuitemradio", { name: "Twilio SMS, Voice & Video" });
    const imgChildren = Array.from(menuItem.querySelectorAll('[role="img"]'));
    expect(imgChildren).toHaveLength(1);
  });
});
