import { Box, BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { useTheme } from "@twilio-paste/theme";
import React from "react";

interface OverflowButtonProps {
  onClick: () => void;
  position: "left" | "right";
  visible?: boolean;
  element?: BoxProps["element"];
  showShadow?: boolean;
}

const Styles: BoxStyleProps = {
  color: "colorTextIconInverse",
  _hover: {
    color: "colorTextInverseWeak",
    cursor: "pointer",
  },
};

export const OverflowButton: React.FC<OverflowButtonProps> = ({
  onClick,
  position,
  visible,
  element = "CODE_BLOCK_TAB_LIST",
  showShadow,
}) => {
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
      boxShadow={visible && showShadow ? theme.shadows.shadowScrollInverse : undefined}
      element={`${element}_OVERFLOW_BUTTON_${position.toUpperCase()}`}
      cursor={visible ? "pointer" : "none"}
      {...Styles}
    >
      {/* For left button to align with spacing of header we hide icon */}
      {visible && <Chevron decorative={true} />}
    </Box>
  );
};

OverflowButton.displayName = "OverflowButton";
