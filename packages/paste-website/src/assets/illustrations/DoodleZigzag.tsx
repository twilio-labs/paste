import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from '@twilio-paste/animation-library';
import { useTheme } from '@twilio-paste/theme';

const dashArray = 260;

export const DoodleZigzag = (): JSX.Element => {
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
        stroke={theme.backgroundColors.colorBackgroundPrimaryStrongest}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        fill="none"
        height="62"
        width="100"
        viewBox="0 0 100 62"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m464 1781.6-14.8-37.2-17.6 38.8-22-47.2-14 50.8-29.6-24.4 2.4 33.6"
          transform="translate(-365 -1735)"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
