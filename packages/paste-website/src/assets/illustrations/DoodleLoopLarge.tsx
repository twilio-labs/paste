import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from '@twilio-paste/animation-library';
import { useTheme } from '@twilio-paste/theme';

const dashArray = 350;

export const DoodleLoopLarge = (): JSX.Element => {
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
        stroke={theme.backgroundColors.colorBackgroundPrimaryStronger}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.464"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        fill="none"
        height="260"
        width="78"
        viewBox="0 0 78 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m1243 2198c64.87467-44.8 80.72191-116.48 51.50355-122.58462-12.47475-2.6043-18.93746 4.47508-6.43794 7.87693 53.66769 14.61169 23.27564-111.75385-15.35202-141.29231"
          transform="translate(-1241 -1940)"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
