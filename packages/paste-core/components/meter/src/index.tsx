import * as React from 'react';
import {type BoxProps, Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface MeterProps extends HTMLPasteProps<'meter'>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  ariaLabelledby: string;
  min?: number;
  low?: number;
  max?: number;
  high?: number;
  value?: number;
  optimum?: number;
}

const Meter = React.forwardRef<HTMLMeterElement, MeterProps>(
  ({element = 'METER', ariaLabelledby, children, min = 0, max = 1, value = 0, ...props}, ref) => {
    const meterWidthInPixels = 296; // size30
    const barWidthInPixels = meterWidthInPixels / ((max - min) / value);

    return (
      <>
        <Box
          {...safelySpreadBoxProps(props)}
          as="div"
          role="meter"
          element={element}
          ref={ref}
          aria-labelledby={ariaLabelledby}
          width="size30"
          height="size10"
          backgroundColor="colorBackgroundWeak"
          borderStyle="solid"
          borderWidth="borderWidth10"
          borderColor="colorBorder"
          borderRadius="borderRadiusPill"
        >
          <Box
            element={`${element}_BAR`}
            borderWidth="borderWidth10"
            backgroundColor="colorBackgroundAvailable"
            height="size10"
            width={barWidthInPixels}
            borderTopLeftRadius="borderRadiusPill"
            borderBottomLeftRadius="borderRadiusPill"
          />
          <ScreenReaderOnly>{children}</ScreenReaderOnly>
        </Box>
      </>
    );
  }
);

Meter.displayName = 'Meter';

export {Meter};
