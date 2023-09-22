import type { BoxElementProps } from "@twilio-paste/box";
import { IconWrapper } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import type { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { circleGeometry } from "./constants";
import { AnimatedStyledCircle, StyledCircleTrack, StyledSvg } from "./styled";

export interface SpinnerProps extends IconWrapperProps {
  title?: string;
  delay?: number;
  decorative: boolean;
  element?: BoxElementProps["element"];
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size, color = "currentColor", title, as, display, decorative, delay = 250, element = "SPINNER" }, ref) => {
    const titleId = `spinner-${useUID()}`;
    const {
      borderWidths: { borderWidth40 },
    } = useTheme();

    const [show, setShow] = React.useState(delay === 0);

    if (!decorative && title == null) {
      throw new Error("[Spinner]: Missing a title for non-decorative icon.");
    }

    React.useEffect(() => {
      if (delay === 0) return undefined;
      const showTimer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(showTimer);
    }, [delay]);
    return (
      <IconWrapper
        as={as}
        element={element}
        display={display}
        size={size}
        color={color}
        aria-hidden={decorative}
        ref={ref}
      >
        <StyledSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId}>
          {title ? <title id={titleId}>{title}</title> : null}
          <g strokeWidth={borderWidth40} stroke="currentColor" strokeLinecap="round" fill="transparent">
            <StyledCircleTrack {...circleGeometry} />
            <AnimatedStyledCircle show={show} {...circleGeometry} />
          </g>
        </StyledSvg>
      </IconWrapper>
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner };
