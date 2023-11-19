import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box, type BoxProps } from "@twilio-paste/box";
import { useProgressBar } from "@twilio-paste/react-spectrum-library";
import { SkeletonLoader } from "@twilio-paste/skeleton-loader";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { LABEL_SUFFIX } from "./constants";

const AnimatedBox = animated(Box);

export interface ProgressBarProps extends HTMLPasteProps<"progress"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PROGRESS_BAR'
   * @type {BoxProps['element']}
   * @memberof ProgressBarProps
   */
  element?: BoxProps["element"];
  /**
   * Id of the ProgressBar. Used for the ProgressBarLabel's `htmlFor` prop.
   *
   * @type {string}
   * @memberof ProgressBarProps
   */
  id?: string;
  /**
   * If not using a ProgressBarLabel, you can provide a custom `aria-label` to describe the ProgressBar.
   *
   * @type {string}
   * @memberof ProgressBarProps
   */
  "aria-label"?: string;
  /**
   * Id of the HelpText that describes the ProgressBar.
   *
   * @type {string}
   * @memberof ProgressBarProps
   */
  "aria-describedby"?: string;
  /**
   * If not using a ProgressBarLabel, you can use a custom label with `aria-labelledby` to describe the ProgressBar.
   *
   * @type {string}
   * @memberof ProgressBarProps
   */
  "aria-labelledby"?: string;
  /**
   * The current value of the ProgressBar.
   *
   * @type {number}
   * @default 0
   * @memberof ProgressBarProps
   */
  value?: number;
  /**
   * Screen reader only: used to describe the current value of the ProgressBar in plain text.
   *
   * @type {string}
   * @memberof ProgressBarProps
   */
  valueLabel?: string;
  /**
   * Minimum value of the ProgressBar.
   *
   * @type {number}
   * @default 0
   * @memberof ProgressBarProps
   */
  minValue?: never;
  /**
   * Maximum value of the ProgressBar.
   *
   * @type {number}
   * @default 100
   * @memberof ProgressBarProps
   */
  maxValue?: number;
  /**
   * Sets the ProgressBar to an indeterminate state.
   *
   * @type {boolean}
   * @default false
   * @memberof ProgressBarProps
   */
  isIndeterminate?: boolean;
  /**
   * Sets the ProgressBar to an error state.
   *
   * @type {boolean}
   * @default false
   * @memberof ProgressBarProps
   */
  hasError?: boolean;
  /**
   * Sets the ProgressBar to an disabled state.
   *
   * @type {boolean}
   * @default false
   * @memberof ProgressBarProps
   */
  disabled?: boolean;
  /**
   * Used to adjust how the numbers are rendered and interpreted. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   *
   * @type {Intl.NumberFormatOptions}
   * @memberof ProgressBarProps
   */
  formatOptions?: Intl.NumberFormatOptions;
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const {
    element = "PROGRESS_BAR",
    id,
    value = 0,
    maxValue = 100,
    disabled = false,
    hasError = false,
    isIndeterminate = false,
  } = props;
  /*
   * Since ProgressBar isn't a form element, we cannot use htmlFor from the regular label
   * so we create a ProgressBarLabel component that behaves like a regular form Label
   * but leverages aria-labelledby instead of htmlFor transparently.
   */
  let labelledBy = props["aria-labelledby"];
  if (labelledBy == null && props["aria-label"] == null && id != null) {
    labelledBy = `${id}${LABEL_SUFFIX}`;
  }

  const { progressBarProps } = useProgressBar({
    ...props,
    // Appeases useLabel's internal warning about missing labels because we're doing our own thing
    "aria-labelledby": labelledBy,
  });

  const springConfig = React.useMemo(() => {
    if (isIndeterminate) {
      return {};
    }
    const clampedValue = Math.min(Math.max(value, 0), maxValue);
    const percentage = Math.round((clampedValue / maxValue) * 100);
    return { width: `${percentage}%`, config: { tension: 280, friction: 60 } };
  }, [isIndeterminate, value, maxValue]);

  const style = useSpring(springConfig);

  let barColor: BoxProps["backgroundColor"] = "colorBackgroundPrimary";
  if (hasError) {
    barColor = "colorBackgroundError";
  } else if (disabled) {
    barColor = "colorBackgroundStronger";
  }

  return (
    <Box
      {...progressBarProps}
      ref={ref}
      element={element}
      id={id}
      aria-labelledby={labelledBy}
      height="8px"
      width="100%"
      backgroundColor={disabled ? "colorBackground" : "colorBackgroundStrong"}
      borderRadius="borderRadiusPill"
      position="relative"
      overflow="hidden"
    >
      {isIndeterminate ? (
        <SkeletonLoader />
      ) : (
        <AnimatedBox
          style={style}
          element={`${element}_FILL`}
          position="absolute"
          height="100%"
          backgroundColor={barColor}
          borderRadius="borderRadius30"
        />
      )}
    </Box>
  );
});

ProgressBar.displayName = "ProgressBar";
