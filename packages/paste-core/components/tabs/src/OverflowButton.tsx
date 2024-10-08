import { Box, BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { useTheme } from "@twilio-paste/theme";
import React from "react";

import { TabsContext } from "./TabsContext";

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

const InverseStyles: BoxStyleProps = {
  color: "colorTextIconInverse",
  _hover: {
    color: "colorTextInverseWeak",
    cursor: "pointer",
  },
};

export const OverflowButton: React.FC<OverflowButtonProps> = ({ onClick, position, visible, element = "TAB_LIST" }) => {
  const theme = useTheme();
  const { variant } = React.useContext(TabsContext);
  const isInverse = variant?.includes("inverse");
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
      boxShadow={isInverse ? theme.shadows.shadowScrollInverse : theme.shadows.shadowScroll}
      element={`${element}_OVERFLOW_BUTTON_${position.toUpperCase()}`}
      {...(isInverse ? InverseStyles : Styles)}
    >
      <Chevron decorative={true} />
    </Box>
  );
};

OverflowButton.displayName = "OverflowButton";
