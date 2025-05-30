import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import * as React from "react";
import type { JSX } from "react";

const BouncyAnchor: React.FC<{ text: string; href: string; inverse?: boolean }> = ({
  text,
  href,
  inverse = false,
}): JSX.Element => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };
  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  return (
    <Box as="span" display="flex" alignItems="center">
      <Anchor
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant={inverse ? "inverse" : "default"}
      >
        {text}
      </Anchor>
      <Box
        as="span"
        display="flex"
        transform={hovered ? "translateY(1px) translateX(4px)" : "translateY(1px) translateX(0)"}
        transition="all 100ms ease"
      >
        <ArrowForwardIcon
          decorative
          display="inline-block"
          size="sizeIcon40"
          color={inverse ? "colorTextInverse" : "colorTextLink"}
        />
      </Box>
    </Box>
  );
};

export { BouncyAnchor };
