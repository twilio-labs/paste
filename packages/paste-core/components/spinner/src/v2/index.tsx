import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {StyledCircleTrack, AnimatedStyledCircle, StyledDiv, StyledSvg} from './styled';

type SpinnerProps = {
  size?: string;
  color?: string;
  title?: string;
  decorative?: boolean;
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'sizeIcon30',
  color = 'colorTextIcon',
  title,
  decorative = false,
}) => {
  const titleId = `spinner-${useUID()}`;
  return (
    <StyledDiv size={size} aria-hidden={decorative}>
      <StyledSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <StyledCircleTrack stroke={color} />
        <AnimatedStyledCircle stroke={color} />
      </StyledSvg>
    </StyledDiv>
  );
};
