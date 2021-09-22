import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from '@twilio-paste/icons/esm/helpers/IconWrapper';
import type {IconWrapperProps} from '@twilio-paste/icons/esm/helpers/IconWrapper';
import {useTheme} from '@twilio-paste/theme';

import {StyledCircleTrack, AnimatedStyledCircle, StyledSvg} from './styled';
import {circleGeometry} from './constants';

export interface SpinnerProps extends IconWrapperProps {
  title: string;
  delay?: number;
  decorative: boolean;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({size, color = 'currentColor', title, as, display, decorative, delay = 250}, ref) => {
    const titleId = `spinner-${useUID()}`;
    const {
      borderWidths: {borderWidth40},
    } = useTheme();

    const [show, setShow] = React.useState(delay === 0);

    React.useEffect(() => {
      if (delay === 0) return;
      const showTimer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(showTimer);
    }, [delay]);
    return (
      <IconWrapper as={as} display={display} size={size} color={color} aria-hidden={decorative} ref={ref}>
        <StyledSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId}>
          {title ? <title id={titleId}>{title}</title> : null}
          <g strokeWidth={borderWidth40} stroke="currentColor" strokeLinecap="round" fill="transparent">
            <StyledCircleTrack {...circleGeometry} />
            <AnimatedStyledCircle show={show} {...circleGeometry} />
          </g>
        </StyledSvg>
      </IconWrapper>
    );
  }
);
