import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';
import {useProgressBar} from '@twilio-paste/react-spectrum-library';
import {animated, useSpring} from '@twilio-paste/animation-library';
import {keyframes} from '@twilio-paste/styling-library';

import {LABEL_SUFFIX} from './constants';

const AnimatedBox = animated(Box);
const IndeterminateKeyframes = keyframes`
  from {
    left: -10%;
  }
  to {
    left: 105%;
  }
`;

export interface ProgressBarProps extends HTMLPasteProps<'progress'> {
  element?: BoxProps['element'];
  id?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  value?: number;
  valueLabel?: string;
  /**
   * Minimum value of the progress bar is always set to 0 per the spec.
   */
  minValue?: never;
  maxValue?: number;
  isIndeterminate?: boolean;
  /**
   * Used to adjust how the numbers are rendered and interpreted.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat \
   */
  formatOptions?: Intl.NumberFormatOptions;
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const {element = 'PROGRESS_BAR', id, value = 0, maxValue = 100, isIndeterminate = false} = props;
  /*
   * Since ProgressBar isn't a form element, we cannot use htmlFor from the regular label
   * so we create a ProgressBarLabel component that behaves like a regular form Label
   * but leverages aria-labelledby instead of htmlFor transparently.
   */
  let labelledBy = props['aria-labelledby'];
  if (labelledBy == null && props['aria-label'] == null && id != null) {
    labelledBy = `${id}${LABEL_SUFFIX}`;
  }

  const {progressBarProps} = useProgressBar({
    ...props,
    // Appeases useLabel's internal warning about missing labels because we're doing our own thing
    'aria-labelledby': labelledBy,
  });

  const springConfig = React.useMemo(() => {
    if (!isIndeterminate) {
      const clampedValue = Math.min(Math.max(value, 0), maxValue);
      const percentage = Math.round((clampedValue / maxValue) * 100);
      return {width: `${percentage}%`, config: {tension: 280, friction: 60}};
    }

    return {
      width: '15%',
    };
  }, [isIndeterminate, value, maxValue]);

  const style = useSpring(springConfig);

  return (
    <Box
      {...progressBarProps}
      ref={ref}
      element={element}
      id={id}
      aria-labelledby={labelledBy}
      height="20px"
      width="100%"
      backgroundColor="colorBackgroundWeak"
      borderRadius="borderRadiusPill"
      position="relative"
      overflow="hidden"
    >
      <AnimatedBox
        style={style}
        element={`${element}_FILL`}
        position="absolute"
        height="100%"
        backgroundColor="colorBackgroundPrimary"
        borderRadius="borderRadius30"
        backgroundImage={
          isIndeterminate
            ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent)'
            : 'none'
        }
        animation={isIndeterminate ? `${IndeterminateKeyframes} 3s linear infinite` : undefined}
      />
    </Box>
  );
});

ProgressBar.displayName = 'ProgressBar';
