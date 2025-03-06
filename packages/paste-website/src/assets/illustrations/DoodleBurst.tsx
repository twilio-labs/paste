import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import type { JSX } from "react";
import * as React from "react";
import { useInView } from "react-intersection-observer";

const dashArray = 260;

export const DoodleBurst = (): JSX.Element => {
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
        stroke={theme.borderColors.colorBorderPrimaryStrong}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        strokeDashoffset={styles.x}
        strokeDasharray={`${dashArray} ${dashArray}`}
        width="62"
        height="57"
        fill="none"
        viewBox="0 0 62 57"
        xmlns="http:www.w3.org/2000/svg"
      >
        <path
          stroke={theme.borderColors.colorBorderPrimaryStrong}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M41.9 1.811L49.76 31.14M19.856 16.52l19.743 23.629M1.366 38.239L32.938 52.83"
        />
      </AnimatedSVG>
      //{" "}
    </Box>
  );
};
