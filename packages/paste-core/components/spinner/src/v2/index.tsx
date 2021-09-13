import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useUID} from '@twilio-paste/uid-library';
import type {IconSize} from '@twilio-paste/style-props';

import {StyledCircleTrack, AnimatedStyledCircle, StyledSvg} from './styled';
import type {Stroke} from './types';

type SpinnerProps = {
  size?: IconSize;
  title?: string;
  decorative?: boolean;
  color?: Stroke;
};

type CircleGeometryProps = Pick<React.SVGProps<SVGCircleElement>, 'cx' | 'cy' | 'r'>;

const circleGeometry: CircleGeometryProps = {
  cx: '50',
  cy: '50',
  r: '45',
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'sizeIcon30',
  color = 'colorTextIcon',
  title,
  decorative = false,
}) => {
  const titleId = `spinner-${useUID()}`;
  return (
    <Box size={size} aria-hidden={decorative} position="relative" top="50%">
      <StyledSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <StyledCircleTrack stroke={color} {...circleGeometry} />
        <AnimatedStyledCircle stroke={color} {...circleGeometry} />
      </StyledSvg>
    </Box>
  );
};
