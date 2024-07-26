import { render } from "@testing-library/react";
import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { IconSizeOptions } from "@twilio-paste/style-props";
import * as React from "react";

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
    const { getByText } = render(<CornerOrnament>test</CornerOrnament>);
    expect(getByText("test")).toBeDefined();
  });
});
