import { Box, type BoxProps } from "@twilio-paste/box";
import { Label } from "@twilio-paste/label";
import { Text } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { LABEL_SUFFIX } from "./constants";

export interface MeterLabelProps extends HTMLPasteProps<"div"> {
  children: string;
  /**
   * Pass the id of the associated Meter.
   *
   * @type {string}
   * @memberof MeterLabelProps
   */
  htmlFor: string;
  /**
   * Custom value label of the Meter.
   *
   * @type {string}
   * @memberof MeterLabelProps
   */
  valueLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'METER_LABEL'
   * @type {BoxProps['element']}
   * @memberof MeterLabelProps
   */
  element?: BoxProps["element"];
}

const MeterLabel = React.forwardRef<HTMLLabelElement, MeterLabelProps>(
  ({ element = "METER_LABEL", children, htmlFor, valueLabel, ...labelProps }, ref) => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        element={`${element}_WRAPPER`}
      >
        <Label {...labelProps} as="div" element={element} id={`${htmlFor}${LABEL_SUFFIX}`} ref={ref}>
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
          >
            {valueLabel}
          </Text>
        )}
      </Box>
    );
  },
);

MeterLabel.displayName = "MeterLabel";

export { MeterLabel };
