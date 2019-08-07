import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {CalloutProps} from './types';

const borderColorPartial = ({variant}: CalloutProps): string => {
  if (variant === 'secondary') {
    return themeGet('borderColors.colorBorderPrimaryDark');
  }
  if (variant === 'warning') {
    return themeGet('borderColors.colorBorderWarning');
  }
  return themeGet('borderColors.colorBorderPrimaryLight');
};

const backgroundColorPartial = ({variant}: CalloutProps): string => {
  if (variant === 'secondary') {
    return themeGet('backgroundColors.colorBackgroundPrimaryDark');
  }
  if (variant === 'warning') {
    return themeGet('backgroundColors.colorBackgroundWarning');
  }
  return themeGet('backgroundColors.colorBackgroundPrimaryLight');
};

export const StyledCallout: React.FC<CalloutProps> = styled(Box)`
  position: relative;
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
