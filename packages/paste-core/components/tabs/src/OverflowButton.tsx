import { Box, BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { BoxShadow } from "@twilio-paste/style-props";
import { useTheme } from "@twilio-paste/theme";
import React from "react";

import { TabsContext } from "./TabsContext";

interface OverflowButtonProps {
  onClick: () => void;
  position: "left" | "right";
  visible?: boolean;
  element?: BoxProps["element"];
  showShadow?: boolean;
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
    color: "colorTextInverse",
    cursor: "pointer",
  },
};

export const OverflowButton: React.FC<OverflowButtonProps> = ({
  onClick,
  position,
  visible,
  element = "TAB_LIST",
  showShadow,
}) => {
  const theme = useTheme();
  const { variant } = React.useContext(TabsContext);
  const isInverse = variant?.includes("inverse");
  const Chevron = position === "left" ? ChevronLeftIcon : ChevronRightIcon;

  if (!visible) return null;

  const determineShadow = (): BoxShadow | undefined => {
    if (showShadow) {
      if (position === "left") return isInverse ? theme.shadows.shadowLeftInverse : theme.shadows.shadowLeft;
      return isInverse ? theme.shadows.shadowRightInverse : theme.shadows.shadowRight;
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
      width="sizeBase70"
      padding="space20"
      boxShadow={determineShadow()}
      element={`${element}_OVERFLOW_BUTTON_${position.toUpperCase()}`}
      zIndex="zIndex10"
      {...(isInverse ? InverseStyles : Styles)}
    >
      <Chevron decorative={true} />
    </Box>
  );
};

OverflowButton.displayName = "OverflowButton";
