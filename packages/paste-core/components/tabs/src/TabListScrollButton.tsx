import * as React from "react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";

export const TabListScrollButton: React.FC<{ direction: "left" | "right"; label: string }> = ({ direction, label }) => {
  return (
    <Box
      position="fixed"
      height="38px"
      zIndex="zIndex10"
      backgroundColor="colorBackgroundBody"
      display="flex"
      alignItems="center"
      right={direction === "right" ? "0" : "auto"} // currently 0 of the page, make 0 of the tab list
    >
      <Button
        display="grid"
        alignItems="center"
        justifyContent="center"
        variant="reset"
        width="28px"
        height="28px"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderWidth="borderWidth10"
        borderRadius="borderRadius20"
        backgroundColor="colorBackgroundBody"
        boxShadow="shadowLow"
      >
        {direction === "left" && (
          <ChevronLeftIcon
            decorative={false}
            title={label}
            size="sizeIcon20"
            color="colorTextWeak"
          />
        )}
        {direction === "right" && (
          <ChevronRightIcon
            decorative={false}
            title={label}
            size="sizeIcon20"
            color="colorTextWeak"
          />
        )}
      </Button>
    </Box>
  );
};

TabListScrollButton.displayName = "TabListScrollButton";
