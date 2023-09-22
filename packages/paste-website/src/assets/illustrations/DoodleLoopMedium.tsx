import { animated, useSpring } from '@twilio-paste/animation-library';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const dashArray = 350;

export const DoodleLoopMedium = (): JSX.Element => {
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
        strokeWidth="2.464"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        width="139"
        height="141"
        fill="none"
        viewBox="0 0 139 141"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={theme.borderColors.colorBorderPrimaryStrong}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M53.527 139.26a74.384 74.384 0 0021.888-30.826c8.939-23.983-2.428-68.705-23.83-69.065-12.107-.203-12.712 13.61 3.671 14.666C73.936 55.239 96.861 26.418 85.161 2"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
