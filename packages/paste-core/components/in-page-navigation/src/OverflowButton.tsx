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
}

const Styles: BoxStyleProps = {
  color: "colorTextIcon",
  _hover: {
    color: "colorTextPrimaryStrongest",
    cursor: "pointer",
  },
};

export const OverflowButton: React.FC<OverflowButtonProps> = ({
  onClick,
  position,
  visible,
  element = "IN_PAGE_NAVIGATION",
}) => {
  const theme = useTheme();
  const Chevron = position === "left" ? ChevronLeftIcon : ChevronRightIcon;
  if (!visible) return null;

  return (
    <Box
      onClick={onClick}
      aria-hidden={true}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="sizeSquare70"
      position="relative"
      boxShadow={theme.shadows.shadowScroll}
      element={`${element}_OVERFLOW_BUTTON_${position.toUpperCase()}`}
      {...Styles}
    >
      <Chevron decorative={true} />
    </Box>
  );
};

OverflowButton.displayName = "OverflowButton";
