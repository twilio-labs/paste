import { render, screen } from "@testing-library/react";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import * as React from "react";

import { Avatar } from "../src";
import {
  getComputedTokenNames,
  getCorrespondingFontSizeFromSizeToken,
  getCorrespondingIconSizeFromSizeToken,
  getCorrespondingLineHeightFromSizeToken,
  getGroupSpacing,
  getInitialsFromName,
} from "../src/utils";

describe("Avatar", () => {
  describe("Utils", () => {
    describe("getInitialsFromName", () => {
      it("should return first and last initial from a name", () => {
        expect(getInitialsFromName("Philando Castile")).toEqual("PC");
        expect(getInitialsFromName("Tamir")).toEqual("T");
        expect(getInitialsFromName("Chimamanda Ngozi Adichie")).toEqual("CA");
        expect(getInitialsFromName("Super Long Name Example")).toEqual("SE");
      });
    });
    describe("getCorrespondingLineHeightFromSizeToken", () => {
      it("should return a line height to match icon size", () => {
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon10")).toEqual("lineHeight10");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon20")).toEqual("lineHeight20");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon30")).toEqual("lineHeight30");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon40")).toEqual("lineHeight40");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon50")).toEqual("lineHeight50");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon60")).toEqual("lineHeight60");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon70")).toEqual("lineHeight70");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon80")).toEqual("lineHeight80");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon90")).toEqual("lineHeight90");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon100")).toEqual("lineHeight100");
        expect(getCorrespondingLineHeightFromSizeToken("sizeIcon110")).toEqual("lineHeight110");
      });
      it("should throw an error when non IconSize values are passed in", () => {
        // @ts-expect-error non-icon size token
        expect(() => getCorrespondingLineHeightFromSizeToken("size50")).toThrow();
        // @ts-expect-error boolean
        expect(() => getCorrespondingLineHeightFromSizeToken(true)).toThrow();
      });
    });

    describe("getCorrespondingFontSizeFromSizeToken", () => {
      it("should return a font size to match icon size", () => {
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon10")).toEqual("fontSize10");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon20")).toEqual("fontSize10");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon30")).toEqual("fontSize10");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon40")).toEqual("fontSize10");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon50")).toEqual("fontSize10");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon60")).toEqual("fontSize10");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon70")).toEqual("fontSize20");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon80")).toEqual("fontSize30");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon90")).toEqual("fontSize40");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon100")).toEqual("fontSize60");
        expect(getCorrespondingFontSizeFromSizeToken("sizeIcon110")).toEqual("fontSize70");
      });
      it("should throw an error when non IconSize values are passed in", () => {
        // @ts-expect-error non-icon token
        expect(() => getCorrespondingFontSizeFromSizeToken("size50")).toThrow();
        // @ts-expect-error doesn't accept booleans
        expect(() => getCorrespondingFontSizeFromSizeToken(true)).toThrow();
      });
    });

    describe("getCorrespondingIconSizeFromSizeToken", () => {
      it("should return a reduced sizeIcon to match icon size", () => {
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon10")).toEqual("sizeIcon10");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon20")).toEqual("sizeIcon10");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon30")).toEqual("sizeIcon10");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon40")).toEqual("sizeIcon10");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon50")).toEqual("sizeIcon20");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon60")).toEqual("sizeIcon20");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon70")).toEqual("sizeIcon30");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon80")).toEqual("sizeIcon40");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon90")).toEqual("sizeIcon50");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon100")).toEqual("sizeIcon70");
        expect(getCorrespondingIconSizeFromSizeToken("sizeIcon110")).toEqual("sizeIcon80");
      });
      it("should throw an error when non IconSize values are passed in", () => {
        // @ts-expect-error non-icon token
        expect(() => getCorrespondingIconSizeFromSizeToken("size50")).toThrow();
        // @ts-expect-error doesn't accept booleans
        expect(() => getCorrespondingIconSizeFromSizeToken(true)).toThrow();
      });
    });

    describe("getComputedTokenNames", () => {
      it("should handle single size values", () => {
        expect(getComputedTokenNames("sizeIcon50")).toEqual({
          fontSize: "fontSize10",
          lineHeight: "lineHeight50",
          iconSize: "sizeIcon20",
        });
      });
      it("should handle responsive size values", () => {
        expect(getComputedTokenNames(["sizeIcon50", "sizeIcon100"])).toEqual({
          fontSize: ["fontSize10", "fontSize60"],
          lineHeight: ["lineHeight50", "lineHeight100"],
          iconSize: ["sizeIcon20", "sizeIcon70"],
        });
      });
    });

    describe("getGroupSpacing", () => {
      it("should return the correct space token", () => {
        expect(getGroupSpacing("sizeIcon30", "user")).toEqual("spaceNegative10");
        expect(getGroupSpacing("sizeIcon100", "user")).toEqual("spaceNegative40");
        expect(getGroupSpacing("sizeIcon30", "entity")).toEqual("spaceNegative10");
        expect(getGroupSpacing("sizeIcon100", "entity")).toEqual("spaceNegative20");
      });
    });
  });

  describe("intials", () => {
    it("should render responsive css", (): void => {
      render(<Avatar data-testid="avatar" size={["sizeIcon10", "sizeIcon60", "sizeIcon100"]} name="Simon Taggart" />);
      const renderedAvatar = screen.getByTestId("avatar");
      expect(renderedAvatar).toHaveStyleRule("width", "sizeIcon10");
      expect(renderedAvatar).toHaveStyleRule("width", "sizeIcon60", {
        media: "screen and (min-width:40em)",
      });
      expect(renderedAvatar).toHaveStyleRule("width", "sizeIcon100", {
        media: "screen and (min-width:52em)",
      });
    });
  });
  describe("image", () => {
    it("should render alt and src attributes", (): void => {
      render(<Avatar size="sizeIcon10" name="avatar example" src="/avatars/avatar2.png" />);
      expect(screen.getByRole("img").getAttribute("src")).toEqual("/avatars/avatar2.png");
      expect(screen.getByRole("img").getAttribute("alt")).toEqual("avatar example");
    });
    it("should render responsive css with an image", (): void => {
      render(
        <Avatar
          data-testid="avatar"
          size={["sizeIcon30", "sizeIcon40", "sizeIcon90"]}
          name="avatar example"
          src="/avatars/avatar2.png"
        />,
      );
      const renderedAvatar = screen.getByTestId("avatar");
      expect(renderedAvatar).toHaveStyleRule("width", "sizeIcon30");
      expect(renderedAvatar).toHaveStyleRule("width", "sizeIcon40", {
        media: "screen and (min-width:40em)",
      });
      expect(renderedAvatar).toHaveStyleRule("width", "sizeIcon90", {
        media: "screen and (min-width:52em)",
      });
    });

    it("should render an image if src and icon are passed", () => {
      render(
        <Avatar
          data-testid="avatar"
          size="sizeIcon20"
          name="avatar example"
          icon={UserIcon}
          src="/avatars/avatar2.png"
        />,
      );

      expect(screen.getByRole("img").getAttribute("src")).toEqual("/avatars/avatar2.png");
      expect(screen.getByRole("img").getAttribute("alt")).toEqual("avatar example");
      expect(screen.getByTestId("avatar").querySelectorAll("svg").length).toEqual(0);
    });
  });

  describe("ensure icon is a Paste Icon", () => {
    it("should fail if icon is not a Paste Icon", () => {
      // hide console errors from terminal when throwing expected errors
      const spy = jest.spyOn(console, "error");
      spy.mockImplementation(() => {});
      // @ts-expect-error icon doesn't expect string
      expect(() => render(<Avatar size="sizeIcon20" name="avatar example" icon="UserIcon" />)).toThrow();
      // @ts-expect-error icon doesn't expect boolean
      // eslint-disable-next-line react/jsx-boolean-value
      expect(() => render(<Avatar size="sizeIcon20" name="avatar example" icon={true} />)).toThrow();
      // @ts-expect-error icon only expects icon component
      expect(() => render(<Avatar size="sizeIcon20" name="avatar example" icon={<Box />} />)).toThrow();
      spy.mockRestore();
    });
  });

  describe("Render an icon and its attributes", () => {
    it("should render an svg", () => {
      render(<Avatar data-testid="avatar" size="sizeIcon20" name="avatar example" icon={UserIcon} />);
      const avatarComponent = screen.getByTestId("avatar");
      expect(avatarComponent.querySelectorAll("svg").length).toEqual(1);
    });
    it("should not have an aria-hidden attribute set to true", () => {
      render(<Avatar data-testid="avatar" size="sizeIcon20" name="avatar example" icon={UserIcon} />);
      const avatarComponent = screen.getByTestId("avatar");
      expect(avatarComponent.getAttribute("aria-hidden")).not.toEqual(true);
    });
    it("should have a title equal to name attribute of Avatar", () => {
      const name = "avatar example";
      render(<Avatar data-testid="avatar" size="sizeIcon20" name={name} icon={UserIcon} />);
      const avatarComponent = screen.getByTestId("avatar");
      expect(avatarComponent.querySelector("title")).toHaveTextContent(name);
    });
  });

  describe("Customization", () => {
    it("should set an element data attribute for Avatar", () => {
      render(<Avatar data-testid="avatar" size="sizeIcon20" name="avatar example" icon={UserIcon} />);
      const avatarComponent = screen.getByTestId("avatar");
      expect(avatarComponent.getAttribute("data-paste-element")).toEqual("AVATAR");
    });
    it("should set a custom element data attribute for Avatar", () => {
      render(<Avatar data-testid="avatar" element="FOO" size="sizeIcon20" name="avatar example" icon={UserIcon} />);
      const avatarComponent = screen.getByTestId("avatar");
      expect(avatarComponent.getAttribute("data-paste-element")).toEqual("FOO");
    });

    it("should add custom styles to Avatar", () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{ AVATAR: { backgroundColor: "colorBackgroundAvailable" } }}
        >
          <Avatar data-testid="avatar" size="sizeIcon20" name="avatar example" />
        </CustomizationProvider>,
      );
      const renderedAvatar = screen.getByTestId("avatar");
      expect(renderedAvatar).toHaveStyleRule("background-color", "rgb(20, 176, 83)");
    });
    it("should add custom styles to custom element Avatar", () => {
      render(
        <CustomizationProvider baseTheme="default" elements={{ FOO: { backgroundColor: "colorBackgroundAvailable" } }}>
          <Avatar data-testid="avatar" element="FOO" size="sizeIcon20" name="avatar example" />
        </CustomizationProvider>,
      );
      const renderedAvatar = screen.getByTestId("avatar");
      expect(renderedAvatar).toHaveStyleRule("background-color", "rgb(20, 176, 83)");
    });
  });
});
