import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Text} from '@twilio-paste/text';
import {CalloutProps} from './types';

export const StyledCallout: React.FC<CalloutProps> = styled.div`
  position: relative;
  margin: ${themeGet('space.space60')} 0;
  padding: ${themeGet('space.space40')} ${themeGet('space.space60')};
  font-size: ${themeGet('fontSizes.fontSize20')};
  border-width: ${themeGet('borderWidths.borderWidth20')};
  border-style: solid;
  border-color: ${props =>
    props.variant === 'secondary'
      ? themeGet('backgroundColors.colorBackgroundSuccessLightest')
      : props.variant === 'warning'
      ? themeGet('backgroundColors.colorBackgroundWarningLightest')
      : themeGet('backgroundColors.colorBackgroundPrimaryLighter')};
  border-radius: 0 ${themeGet('radii.borderRadius20')} ${themeGet('radii.borderRadius20')} 0;

  &::before {
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    display: block;
    content: '';
    width: ${themeGet('space.space30')};
    background-color: ${props =>
      props.variant === 'secondary'
        ? themeGet('backgroundColors.colorBackgroundSuccess')
        : props.variant === 'warning'
        ? themeGet('backgroundColors.colorBackgroundWarning')
        : themeGet('backgroundColors.colorBackgroundPrimaryLight')};
  }
`;

export const StyledCalloutTitle = styled(Text)`
  margin: 0 0 ${themeGet('space.space40')};
  font-size: ${themeGet('fontSizes.fontSize20')};
`;
