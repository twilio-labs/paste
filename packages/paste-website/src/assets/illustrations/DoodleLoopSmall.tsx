import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import type { JSX } from "react";
import * as React from "react";
import { useInView } from "react-intersection-observer";

const dashArray = 110;

export const DoodleLoopSmall = (): JSX.Element => {
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
        strokeWidth="2"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        fill="none"
        width="41"
        height="35"
        viewBox="0 0 41 35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M364,1507.07693 C349.942623,1512.99997 333.47541,1504.31284 333.877049,1493.65136 C334.278689,1482.98987 345.52459,1484.17448 345.52459,1492.86162 C345.52459,1504.70771 325.040984,1512.99997 315,1505.10258"
          transform="rotate(36 2469.219 271.304)"
        />
      </AnimatedSVG>
    </Box>
  );
};
