import { Box } from "@twilio-paste/box";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { useTheme } from "@twilio-paste/theme";
import React from "react";

interface OverflowButtonProps {
  onClick: () => void;
  position: "left" | "right";
  visible?: boolean;
}

export const OverflowButton: React.FC<OverflowButtonProps> = ({ onClick, position, visible }) => {
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
      minWidth="sizeSquare70"
      position="relative"
      overflowY="clip"
      boxShadow={theme.shadows.shadowScroll}
    >
      <Chevron color="colorTextIcon" decorative={true} />
    </Box>
  );
};

OverflowButton.displayName = "OverflowButton";
