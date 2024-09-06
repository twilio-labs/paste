import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import { ProgressStepsContext } from "./ProgressStepsContext";
import { ProgressErrorIcon } from "./icons/ProgressErrorIcon";
import type { ProgressStepErrorProps } from "./types";

export const ProgressStepError = React.forwardRef<HTMLDivElement, ProgressStepErrorProps>(
  ({ element = "PROGRESS_STEP_ERROR", as = "div", children, i18nErrorLabel = "Error", content, ...props }, ref) => {
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
          color="colorTextError"
          _hover={as !== "div" ? { textDecoration: "none", color: "colorTextErrorStrongest" } : undefined}
          _focus={as !== "div" ? { boxShadow: "shadowFocus" } : undefined}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <ProgressErrorIcon decorative={false} title={i18nErrorLabel} />
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
ProgressStepError.displayName = "ProgressStepError";
