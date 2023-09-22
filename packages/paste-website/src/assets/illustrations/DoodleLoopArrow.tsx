import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from '@twilio-paste/animation-library';
import { useTheme } from '@twilio-paste/theme';

const dashArray = 250;

export const DoodleLoopArrow = (): JSX.Element => {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();

  function handleVisibilityChange(isVisible: boolean): void {
    if (!show) {
      setShow(isVisible);
    }
  }

  const styles = useSpring({
    x: show ? 0 : -1 * dashArray,
    config: { mass: 1, tension: 280, friction: 40 },
  });

  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility minTopValue={60}>
      <animated.svg
        stroke={theme.borderColors.colorBorderInverseStrongest}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.7"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        width="95"
        height="48"
        fill="none"
        viewBox="0 0 95 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={theme.borderColors.colorBorderInverseStrongest}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.225 4.388C32.53-.703 46.042 17.628 43.251 27.937c-2.79 10.309-13.123 6.71-11.162-1.758 2.668-11.52 30.204-20.032 44.586-1.554"
        />
        <path
          stroke={theme.borderColors.colorBorderInverseStrongest}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M67.65 30.703l24.992 13.844L81.73 9.203"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
