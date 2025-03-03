import { animated, useSpring } from "@twilio-paste/animation-library";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";
import type { JSX } from "react";
import VisibilitySensor from "react-visibility-sensor";

const dashArray = 250;

export const DoodleArrow = (): JSX.Element => {
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
        stroke={theme.backgroundColors.colorBackgroundPrimaryStronger}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.7"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        fill="none"
        height="196"
        width="85"
        viewBox="0 0 85 196"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m344.148655 2159.0516-19.1052-24.0516 29.0358 1.512m-12.636 190.8252c69.120001-25.92 101.520001-132.3 0-184.14"
          transform="matrix(-1 0 0 1 408.043 -2133)"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
