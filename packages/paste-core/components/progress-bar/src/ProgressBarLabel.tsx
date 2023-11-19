import { Box, type BoxProps } from "@twilio-paste/box";
import { Label, type LabelProps } from "@twilio-paste/label";
import { Text } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { LABEL_SUFFIX } from "./constants";

export interface ProgressBarLabelProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PROGRESS_BAR_LABEL'
   * @type {BoxProps['element']}
   * @memberof ProgressBarLabelProps
   */
  element?: BoxProps["element"];
  children: string;
  /**
   * The id of the ProgressBarLabel's associated ProgressBar.
   *
   * @type {string}
   * @memberof ProgressBarLabelProps
   */
  htmlFor: string;
  /**
   * Custom label text for the current value of the ProgressBar.
   *
   * @type {string}
   * @memberof ProgressBarLabelProps
   */
  valueLabel?: string;
  /**
   *
   * @type {LabelProps["disabled"]}
   * @memberof ProgressBarLabelProps
   */
  disabled?: LabelProps["disabled"];
}

export const ProgressBarLabel = React.forwardRef<HTMLLabelElement, ProgressBarLabelProps>(
  ({ element = "PROGRESS_BAR_LABEL", children, htmlFor, valueLabel, disabled, ...labelProps }, ref) => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        element={`${element}_WRAPPER`}
      >
        <Label
          {...labelProps}
          as="div"
          element={element}
          id={`${htmlFor}${LABEL_SUFFIX}`}
          ref={ref}
          disabled={disabled}
        >
          {children}
        </Label>
        {valueLabel && (
          <Text
            as="span"
            fontWeight="fontWeightSemibold"
            textAlign="end"
            marginBottom="space20"
            marginLeft="space20"
            aria-hidden="true"
            element={`${element}_VALUE_LABEL`}
            color={disabled ? "colorTextWeak" : undefined}
          >
            {valueLabel}
          </Text>
        )}
      </Box>
    );
  },
);

ProgressBarLabel.displayName = "ProgressBarLabel";
