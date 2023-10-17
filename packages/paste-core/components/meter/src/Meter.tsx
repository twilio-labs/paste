import { Box, type BoxProps } from "@twilio-paste/box";
import { useMeter } from "@twilio-paste/react-spectrum-library";
import { Text } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { LABEL_SUFFIX } from "./constants";

export interface MeterProps extends HTMLPasteProps<"meter">, Pick<BoxProps, "element"> {
  minValue?: number;
  maxValue?: number;
  minLabel?: string;
  maxLabel?: string;
  value?: number;
  id: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
}

const Meter = React.forwardRef<HTMLMeterElement, MeterProps>(
  ({ element = "METER", id, minLabel, maxLabel, ...props }, ref) => {
    const { value = 0, minValue = 0, maxValue = 100 } = props;

    /*
     * Since Meter isn't a form element, we cannot use htmlFor from the regular Label
     * so we created a MeterLabel component that behaves like a regular form Label
     * but leverages aria-labelledby instead of htmlFor under the hood.
     * `aria-labelledby` and `aria-label` can still be passed for custom labelling options.
     */
    let labelledBy = props["aria-labelledby"];
    if (labelledBy == null && props["aria-label"] == null && id != null) {
      labelledBy = `${id}${LABEL_SUFFIX}`;
    }

    const { meterProps } = useMeter({
      ...props,
      // Appeases useLabel's internal warning about missing labels because we're doing our own thing
      "aria-labelledby": labelledBy,
    });

    // Calculate the width of the bar as a percentage
    const percentage = (value - minValue) / (maxValue - minValue);
    const fillWidth = `${Math.round(percentage * 100)}%`;

    return (
      <Box
        as="div"
        {...meterProps}
        role="meter"
        id={id}
        ref={ref}
        width="100%"
        position="relative"
        element={element}
        aria-labelledby={labelledBy}
      >
        <Box
          height="10px"
          backgroundColor="colorBackgroundStrong"
          borderRadius="borderRadiusPill"
          element={`${element}_BAR`}
        >
          <Box
            width={fillWidth}
            height="10px"
            backgroundColor="colorBackgroundPrimaryStronger"
            borderTopLeftRadius="borderRadiusPill"
            borderBottomLeftRadius="borderRadiusPill"
            borderTopRightRadius={fillWidth === "100%" ? "borderRadiusPill" : "borderRadius10"}
            borderBottomRightRadius={fillWidth === "100%" ? "borderRadiusPill" : "borderRadius10"}
            element={`${element}_FILL`}
          />
        </Box>
        {(minLabel || maxLabel) && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            columnGap="space20"
            marginTop="space20"
            aria-hidden="true"
            overflowWrap="anywhere"
            element={`${element}_MIN_MAX_WRAPPER`}
          >
            {minLabel ? (
              <Text as="span" color="colorTextWeak" fontWeight="fontWeightNormal" element={`${element}_MIN`}>
                {minLabel}
              </Text>
            ) : (
              <span />
            )}
            {maxLabel ? (
              <Text
                as="span"
                color="colorTextWeak"
                fontWeight="fontWeightNormal"
                textAlign="end"
                element={`${element}_MAX`}
              >
                {maxLabel}
              </Text>
            ) : (
              <span />
            )}
          </Box>
        )}
      </Box>
    );
  },
);

Meter.displayName = "Meter";

export { Meter };
