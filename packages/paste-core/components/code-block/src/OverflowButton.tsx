import { Box, BoxStyleProps } from "@twilio-paste/box";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { useTheme } from "@twilio-paste/theme";
import React from "react";

interface OverflowButtonProps {
  onClick: () => void;
  position: "left" | "right";
  visible?: boolean;
}

const Styles: BoxStyleProps = {
  color: "colorTextIconInverse",
  _hover: {
    color: "colorTextInverseWeak",
    cursor: "pointer",
  },
};

export const OverflowButton: React.FC<OverflowButtonProps> = ({ onClick, position, visible }) => {
  const theme = useTheme();
  const Chevron = position === "left" ? ChevronLeftIcon : ChevronRightIcon;
  if (!visible && position === "right") return null;

  return (
    <Box
      onClick={onClick}
      aria-hidden={true}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="sizeSquare70"
      position="relative"
      boxShadow={visible ? theme.shadows.shadowScrollInverse : undefined}
      {...Styles}
    >
      {visible && <Chevron decorative={true} />}
    </Box>
  );
};

OverflowButton.displayName = "OverflowButton";
