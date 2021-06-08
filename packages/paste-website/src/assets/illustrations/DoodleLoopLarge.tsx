import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {useTheme} from '@twilio-paste/theme';

const dashArray = 350;

export const DoodleLoopLarge: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();

  function handleVisibilityChange(isVisible: boolean): void {
    if (!show) {
      setShow(isVisible);
    }
  }

  const styles = useSpring({
    x: show ? 0 : -1 * dashArray,
    config: {mass: 1, tension: 280, friction: 40},
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
          stroke="#001489"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M48.76 170.658l-19.484 28.028-7.676-31.39"
        />
        <path
          stroke="#001489"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M191.344 14.59c-34.204 9.243-53.899 28.315-45.514 45.921 6.641 13.945 18.251 14.937 12.365.38-25.277-62.507-125.41 60.187-125.65 119.237"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
