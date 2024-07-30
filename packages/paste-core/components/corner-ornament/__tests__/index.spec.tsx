import { render } from "@testing-library/react";
import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { IconSizeOptions } from "@twilio-paste/style-props";
import * as React from "react";

import { CornerOrnament, CornerOrnamentBase, CornerOrnamentContainer } from "../src";
import { CornerOrnamentType } from "../src/types";

const ExampleCornerOrnament: React.FC<{
  size?: IconSizeOptions;
  type?: CornerOrnamentType;
  element?: string;
}> = ({ size, type, element }) => (
  <CornerOrnamentContainer
    data-testid="cornerOrnamentContainer"
    cornerOrnamentType={type || "dot"}
    size={size || "sizeIcon50"}
    element={element ? `${element}_CORNER_ORNAMENT_CONTAINER` : undefined}
  >
    <CornerOrnamentBase
      data-testid="cornerOrnamentBase"
      element={element ? `${element}_CORNER_ORNAMENT_BASE` : undefined}
    >
      <Avatar data-testid="ornament-element" size="sizeIcon50" src="./avatars/avatar8.png" name="GitHub avatar" />
    </CornerOrnamentBase>
    <CornerOrnament data-testid="cornerOrnament" element={element ? `${element}_CORNER_ORNAMENT` : undefined}>
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
      expect(getByTestId("cornerOrnamentBase").getAttribute("data-paste-element")).toEqual("CORNER_ORNAMENT_BASE");
      expect(getByTestId("cornerOrnament").getAttribute("data-paste-element")).toEqual("CORNER_ORNAMENT");
    });

    it("should set custom element data attribute", () => {
      const { getByTestId } = render(<ExampleCornerOrnament element="CUSTOMIZED" />);
      expect(getByTestId("cornerOrnamentContainer").getAttribute("data-paste-element")).toEqual(
        "CUSTOMIZED_CORNER_ORNAMENT_CONTAINER",
      );
      expect(getByTestId("cornerOrnamentBase").getAttribute("data-paste-element")).toEqual(
        "CUSTOMIZED_CORNER_ORNAMENT_BASE",
      );
      expect(getByTestId("cornerOrnament").getAttribute("data-paste-element")).toEqual("CUSTOMIZED_CORNER_ORNAMENT");
    });
  });
});
