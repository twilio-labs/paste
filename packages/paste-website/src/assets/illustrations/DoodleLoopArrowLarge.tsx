import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from '@twilio-paste/animation-library';
import { useTheme } from '@twilio-paste/theme';

const dashArray = 350;

export const DoodleLoopArrowLarge = (): JSX.Element => {
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
        stroke={theme.borderColors.colorBorderPrimaryStrong}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.7"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        width="173"
        height="187"
        fill="none"
        viewBox="0 0 173 187"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={theme.borderColors.colorBorderPrimaryStrong}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.76 157.658L9.274 185.686 1.6 154.296"
        />
        <path
          stroke={theme.borderColors.colorBorderPrimaryStrong}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M171.344 1.59c-34.204 9.243-53.899 28.315-45.514 45.922 6.641 13.944 18.251 14.936 12.365.38-25.277-62.508-125.41 60.186-125.65 119.236"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
