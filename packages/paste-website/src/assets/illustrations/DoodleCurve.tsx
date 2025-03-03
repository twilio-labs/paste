import { animated, useSpring } from "@twilio-paste/animation-library";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";
import type { JSX } from "react";
import VisibilitySensor from "react-visibility-sensor";

const dashArray = 50;

export const DoodleCurve = (): JSX.Element => {
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
        strokeWidth="2.8"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        fill="none"
        height="28"
        width="29"
        viewBox="0 0 29 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m1335 1226c-.25169 1.35808-1.83458 9.29809-8.94915 13.52449-7.11458 4.22641-16.96983 3.00357-24.05085-3.38112"
          transform="matrix(-.5 -.8660254 .8660254 -.5 -392.924817 1771.854751)"
        />
      </animated.svg>
    </VisibilitySensor>
  );
};
