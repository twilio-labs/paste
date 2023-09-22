import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from '@twilio-paste/animation-library';
import { useTheme } from '@twilio-paste/theme';

const dashArray = 110;

export const DoodleLoopTiny = (): JSX.Element => {
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
    <VisibilitySensor onChange={handleVisibilityChange}>
      <animated.svg
        stroke={theme.borderColors.colorBorderPrimaryStrong}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        width="73"
        height="74"
        fill="none"
        viewBox="0 0 73 74"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={theme.borderColors.colorBorderPrimaryStrong}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2 47.603a38.008 38.008 0 0019.233 1.81c12.897-2.172 29.783-18.627 24.474-28.19-3.003-5.41-9.27-2.148-5.551 5.371 4.239 8.574 22.85 11.355 30.666-.06"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
