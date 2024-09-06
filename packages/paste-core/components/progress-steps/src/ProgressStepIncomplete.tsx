import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import { ProgressStepsContext } from "./ProgressStepsContext";
import { ProgressIncompleteIcon } from "./icons/ProgressIncompleteIcon";
import type { ProgressStepIncompleteProps } from "./types";

export const ProgressStepIncomplete = React.forwardRef<HTMLDivElement, ProgressStepIncompleteProps>(
  (
    {
      element = "PROGRESS_STEP_INCOMPLETE",
      as = "div",
      disabled = false,
      children,
      i18nIncompleteLabel = "Incomplete",
      content,
      ...props
    },
    ref,
  ) => {
    const { orientation } = React.useContext(ProgressStepsContext);

    return (
      <div role="listitem">
        <Box
          {...safelySpreadBoxProps(props)}
          element={element}
          as={as}
          type={as === "button" ? "button" : undefined}
          disabled={disabled}
          ref={ref}
          display="flex"
          columnGap="space30"
          border="none"
          background="none"
          padding="space0"
          margin="space0"
          marginX={orientation === "horizontal" ? "space30" : "space0"}
          fontFamily="fontFamilyText"
          fontSize="fontSize20"
          lineHeight="lineHeight20"
          fontWeight={as === "button" ? "fontWeightSemibold" : "fontWeightMedium"}
          outline="none"
          borderRadius="borderRadius20"
          cursor={as !== "div" ? "pointer" : "default"}
          color={disabled ? "colorTextWeaker" : "colorTextWeak"}
          _hover={as !== "div" ? { textDecoration: "none", color: "colorTextPrimary" } : undefined}
          _focus={as !== "div" ? { boxShadow: "shadowFocus" } : undefined}
          _disabled={{ textDecoration: "none", color: "colorTextWeaker", cursor: "not-allowed" }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <ProgressIncompleteIcon decorative={false} title={i18nIncompleteLabel} />
          </Box>
          <Box textAlign="left">
            {children}{" "}
            <Box
              marginTop={orientation === "vertical" ? "space30" : "space0"}
              paddingBottom={orientation === "vertical" ? "space70" : "space0"}
            >
              {content}
            </Box>
          </Box>
        </Box>
      </div>
    );
  },
);
ProgressStepIncomplete.displayName = "ProgressStepIncomplete";
