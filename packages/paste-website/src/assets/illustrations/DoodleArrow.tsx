import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import type { JSX } from "react";
import * as React from "react";
import { useInView } from "react-intersection-observer";

const dashArray = 250;

export const DoodleArrow = (): JSX.Element => {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView && !show) {
      setShow(true);
    }
  }, [inView, show]);

  const styles = useSpring({
    x: show ? 0 : -1 * dashArray,
    config: { mass: 1, tension: 280, friction: 40 },
  });

  const AnimatedSVG = animated("svg");

  return (
    <Box ref={ref}>
      <AnimatedSVG
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
      </AnimatedSVG>
    </Box>
  );
};
