import * as React from 'react';
import {type BoxProps, Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {HTMLPasteProps} from '@twilio-paste/types';
import {useMeter} from '@twilio-paste/react-spectrum-library';

import {LABEL_SUFFIX} from './constants';

export interface MeterProps extends HTMLPasteProps<'meter'>, Pick<BoxProps, 'element'> {
  minValue?: number;
  maxValue?: number;
  value?: number;
  id: string;
  showValueLabel?: boolean;
  formatOptions?: Intl.NumberFormatOptions; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
  valueLabel?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  /*
   * The following props don't exist on the react-aria useMeter hook but do exist on the HTML meter element.
   * They can be added back into the Paste Meter API depending on the finalized spec & designs.
   *
   * low?: number;
   * high?: number;
   * optimum?: number;
   */
}

const Meter = React.forwardRef<HTMLMeterElement, MeterProps>(({element = 'METER', id, ...props}, ref) => {
  const {value = 0, minValue = 0, maxValue = 100, showValueLabel = true} = props;
  const {meterProps} = useMeter(props);

  // Calculate the width of the bar as a percentage
  const percentage = (value - minValue) / (maxValue - minValue);
  const fillWidth = `${Math.round(percentage * 100)}%`;

  /*
   * Since ProgressBar isn't a form element, we cannot use htmlFor from the regular label
   * so we create a ProgressBarLabel component that behaves like a regular form Label
   * but leverages aria-labelledby instead of htmlFor transparently.
   */
  let labelledBy = props['aria-labelledby'];
  if (labelledBy == null && props['aria-label'] == null && id != null) {
    labelledBy = `${id}${LABEL_SUFFIX}`;
  }

  return (
    <Box
      as="div"
      {...meterProps}
      role="meter"
      id={id}
      maxWidth="size30"
      position="relative"
      element={element}
      aria-labelledby={labelledBy}
    >
      <Box
        display="flex"
        width="fit-content"
        position="absolute"
        right="0"
        top="spaceNegative70"
        element={`${element}_VALUE_LABEL_WRAPPER`}
      >
        {showValueLabel && (
          <Text as="span" element={`${element}_VALUE_LABEL`}>
            {meterProps['aria-valuetext']}
          </Text>
        )}
      </Box>
      <Box height="10px" backgroundColor="colorBackground" element={`${element}_BAR`} ref={ref}>
        <Box width={fillWidth} height="10px" backgroundColor="colorBackgroundAvailable" element={`${element}_FILL`} />
      </Box>
    </Box>
  );
});

Meter.displayName = 'Meter';

export {Meter};
