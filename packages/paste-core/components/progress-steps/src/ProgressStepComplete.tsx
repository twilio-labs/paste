import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { SuccessIcon as ProgressSuccessIcon } from "@twilio-paste/icons/esm/SuccessIcon";
import * as React from "react";

import { ProgressStepsContext } from "./ProgressStepsContext";
import type { ProgressStepCompleteProps } from "./types";

export const ProgressStepComplete = React.forwardRef<HTMLDivElement, ProgressStepCompleteProps>(
  ({ element = "PROGRESS_STEP_COMPLETE", as = "div", children, i18nCompleteLabel = "Completed", ...props }, ref) => {
    const { orientation } = React.useContext(ProgressStepsContext);

    return (
      <div role="listitem">
        <Box
          {...safelySpreadBoxProps(props)}
          element={element}
          as={as}
          type={as === "button" ? "button" : undefined}
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
          color="colorTextWeak"
          _hover={as !== "div" ? { textDecoration: "none", color: "colorTextPrimary" } : undefined}
          _focus={as !== "div" ? { boxShadow: "shadowFocus" } : undefined}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <ProgressSuccessIcon decorative={false} title={i18nCompleteLabel} />
          </Box>
          <Box textAlign="left">{children}</Box>
        </Box>
      </div>
    );
  },
);
ProgressStepComplete.displayName = "ProgressStepComplete";
