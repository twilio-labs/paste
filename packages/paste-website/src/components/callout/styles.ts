import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {CalloutProps} from './types';

const borderColorPartial = ({variant}: CalloutProps) => {
  if (variant === 'secondary') {
    return themeGet('backgroundColors.colorBackgroundPrimaryDarker');
  } else if (variant === 'warning') {
    return themeGet('backgroundColors.colorBackgroundWarningLightest');
  } else {
    return themeGet('backgroundColors.colorBackgroundPrimaryLighter');
  }
};

const backgroundColorPartial = ({variant}: CalloutProps) => {
  if (variant === 'secondary') {
    return themeGet('backgroundColors.colorBackgroundPrimaryDark');
  } else if (variant === 'warning') {
    return themeGet('backgroundColors.colorBackgroundWarning');
  } else {
    return themeGet('backgroundColors.colorBackgroundPrimaryLight');
  }
};

export const StyledCallout: React.FC<CalloutProps> = styled(Box)`
  position: relative;
  font-size: ${themeGet('fontSizes.fontSize20')};
  border-width: ${themeGet('borderWidths.borderWidth20')};
  border-style: solid;
  border-color: ${borderColorPartial};
  border-radius: 0 ${themeGet('radii.borderRadius20')} ${themeGet('radii.borderRadius20')} 0;

  &::before {
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    display: block;
    content: '';
    width: ${themeGet('space.space30')};
    background-color: ${backgroundColorPartial};
  }
`;
