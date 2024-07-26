import { render, screen } from "@testing-library/react";
import * as React from "react";

import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { IconSizeOptions } from "@twilio-paste/style-props";
import {
  CornerOrnament,
  CornerOrnamentContainer,
  CornerOrnamentElement,
  CornerOrnamentPosition,
  CornerOrnamentType,
} from "../src";

const ExampleCornerOrnament: React.FC<{
  size?: IconSizeOptions;
  position?: CornerOrnamentPosition;
  type?: CornerOrnamentType;
}> = ({ size, type }) => (
  <CornerOrnamentContainer
    data-testid="cornerOrnamentContainer"
    cornerOrnamentType={type || "dot"}
    size={size || "sizeIcon50"}
  >
    <CornerOrnamentElement data-testid="cornerOrnamentElement">
      <Avatar data-testid="ornament-element" size="sizeIcon50" src="./avatars/avatar8.png" name="GitHub avatar" />
    </CornerOrnamentElement>
    <CornerOrnament data-testid="cornerOrnament">
      <Box data-testid="ornament">
        <LogoTwilioIcon decorative size="sizeIcon40" />
      </Box>
    </CornerOrnament>
  </CornerOrnamentContainer>
);

const CustomizedCornerOrnament: React.FC<{
  size?: IconSizeOptions;
  position?: CornerOrnamentPosition;
  type?: CornerOrnamentType;
}> = ({ size, type }) => (
  <CornerOrnamentContainer
    data-testid="cornerOrnamentContainer"
    cornerOrnamentType={type || "dot"}
    size={size || "sizeIcon50"}
    element="CUSTOMIZED_CORNER_ORNAMENT_CONTAINER"
  >
    <CornerOrnamentElement data-testid="cornerOrnamentElement" element="CUSTOMIZED_CORNER_ORNAMENT_ELEMENT">
      <Avatar data-testid="ornament-element" size="sizeIcon50" src="./avatars/avatar8.png" name="GitHub avatar" />
    </CornerOrnamentElement>
    <CornerOrnament data-testid="cornerOrnament" element="CUSTOMIZED_CORNER_ORNAMENT">
      <Box data-testid="ornament">
        <LogoTwilioIcon decorative size="sizeIcon40" />
      </Box>
    </CornerOrnament>
  </CornerOrnamentContainer>
);

describe("CornerOrnament", () => {
  it("should render", () => {
    const { getByTestId } = render(<ExampleCornerOrnament />);
    expect(getByTestId("ornament-element")).toBeDefined();
    expect(getByTestId("ornament")).toBeDefined();
  });

  it("should throw errors for unsupported size and type combinations", () => {
    expect(() => {
      render(<ExampleCornerOrnament size="sizeIcon30" type="avatar" />);
    }).toThrow();
  });

  describe("Customization", () => {
    it("should set element data attribute", () => {
      const { getByTestId } = render(<ExampleCornerOrnament />);
      expect(getByTestId("cornerOrnamentContainer").getAttribute("data-paste-element")).toEqual(
        "CORNER_ORNAMENT_CONTAINER",
      );
      expect(getByTestId("cornerOrnamentElement").getAttribute("data-paste-element")).toEqual(
        "CORNER_ORNAMENT_ELEMENT",
      );
      expect(getByTestId("cornerOrnament").getAttribute("data-paste-element")).toEqual("CORNER_ORNAMENT");
    });

    it("should set custom element data attribute", () => {
      const { getByTestId } = render(<CustomizedCornerOrnament />);
      expect(getByTestId("cornerOrnamentContainer").getAttribute("data-paste-element")).toEqual(
        "CUSTOMIZED_CORNER_ORNAMENT_CONTAINER",
      );
      expect(getByTestId("cornerOrnamentElement").getAttribute("data-paste-element")).toEqual(
        "CUSTOMIZED_CORNER_ORNAMENT_ELEMENT",
      );
      expect(getByTestId("cornerOrnament").getAttribute("data-paste-element")).toEqual("CUSTOMIZED_CORNER_ORNAMENT");
    });
  });
});
