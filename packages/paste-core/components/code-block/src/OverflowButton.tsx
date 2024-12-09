import { Box, BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { BoxShadow } from "@twilio-paste/style-props";
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
    color: "colorTextInverse",
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

  const determineShadow = (): BoxShadow | undefined => {
    if (visible && showShadow) {
      if (position === "left") return theme.shadows.shadowLeftInverse;
      return theme.shadows.shadowRightInverse;
    }
    return undefined;
  };

  return (
    <Box
      onClick={onClick}
      aria-hidden={true}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="sizeIcon60"
      padding="space10"
      position="relative"
      boxShadow={determineShadow()}
      element={`${element}_OVERFLOW_BUTTON_${position.toUpperCase()}`}
      cursor={visible ? "pointer" : "none"}
      zIndex="zIndex10"
      {...Styles}
    >
      {/* For left button to align with spacing of header we hide icon */}
      {visible && <Chevron decorative={true} />}
    </Box>
  );
};

OverflowButton.displayName = "OverflowButton";
