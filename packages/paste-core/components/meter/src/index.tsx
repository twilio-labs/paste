import * as React from 'react';
import {type BoxProps, Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Text} from '@twilio-paste/text';
import type {HTMLPasteProps} from '@twilio-paste/types';
import {useMeter} from '@twilio-paste/react-spectrum-library';

export interface MeterProps extends HTMLPasteProps<'meter'>, Pick<BoxProps, 'element'> {
  minValue?: number;
  maxValue?: number;
  value?: number;
  label: string;
  showValueLabel?: boolean;
  formatOptions?: Intl.NumberFormatOptions; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
  valueLabel?: string;
  /*
   * The following props don't exist on the react-aria useMeter hook but do exist on the HTML meter element.
   * They can be added back into the Paste Meter API depending on the spec & designs.
   *
   * low?: number;
   * high?: number;
   * optimum?: number;
   */
}

const Meter = React.forwardRef<HTMLMeterElement, MeterProps>(({element = 'METER', ...props}, ref) => {
  const {label, showValueLabel = Boolean(label), value = 0, minValue = 0, maxValue = 100} = props;
  const {meterProps, labelProps} = useMeter(props);

  // Calculate the width of the bar as a percentage
  const percentage = (value - minValue) / (maxValue - minValue);
  const barWidth = `${Math.round(percentage * 100)}%`;

  return (
    <Box as="div" {...meterProps} role="meter" maxWidth="size30" element={`${element}_WRAPPER`}>
      <Box display="flex" justifyContent="space-between" element={`${element}_LABEL_WRAPPER`}>
        {label && (
          <Label {...labelProps} as="div" element={`${element}_LABEL`}>
            {label}
          </Label>
        )}
        {showValueLabel && (
          <Text as="span" element={`${element}_VALUE_LABEL`}>
            {meterProps['aria-valuetext']}
          </Text>
        )}
      </Box>
      <Box height="10px" backgroundColor="colorBackground" element={element} ref={ref}>
        <Box width={barWidth} height="10px" backgroundColor="colorBackgroundAvailable" element={`${element}_BAR`} />
      </Box>
    </Box>
  );
});

Meter.displayName = 'Meter';

export {Meter};
