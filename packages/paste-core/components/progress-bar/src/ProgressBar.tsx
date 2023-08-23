import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import {useProgressBar} from '@twilio-paste/react-spectrum-library';
import {animated, useSpring} from '@twilio-paste/animation-library';
import {keyframes} from '@twilio-paste/styling-library';

const AnimatedBox = animated(Box);
const IndeterminateKeyframes = keyframes`
  from {
    left: -10%;
  }
  to {
    left: 105%;
  }
`;

export interface ProgressBarProps {
  element?: BoxProps['element'];
  id?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  value?: number;
  valueLabel?: string;
  minValue?: number;
  maxValue?: number;
  isIndeterminate?: boolean;
  /**
   * Used to adjust how the numbers are rendered and interpreted.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat \
   */
  formatOptions?: Intl.NumberFormatOptions;
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const {progressBarProps} = useProgressBar(props);

  const {element = 'PROGRESS_BAR', value = 0, minValue = 0, maxValue = 100, isIndeterminate = false} = props;

  const springConfig = React.useMemo(() => {
    if (!isIndeterminate) {
      const clampedValue = Math.min(Math.max(value, minValue), maxValue);
      const percentage = (clampedValue - minValue) / (maxValue - minValue);
      return {width: `${Math.round(percentage * 100)}%`, config: {tension: 280, friction: 60}};
    }

    return {
      width: '10%',
    };
  }, [isIndeterminate, value, minValue, maxValue]);

  const style = useSpring(springConfig);

  return (
    <Box
      ref={ref}
      element={element}
      {...progressBarProps}
      height="16px"
      width="100%"
      backgroundColor="colorBackgroundWeak"
      borderRadius="borderRadius30"
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
            : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.05))'
        }
        animation={isIndeterminate ? `${IndeterminateKeyframes} 3s linear infinite` : undefined}
      />
    </Box>
  );
});

ProgressBar.displayName = 'ProgressBar';
