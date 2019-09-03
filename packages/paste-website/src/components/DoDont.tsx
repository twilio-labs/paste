import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

interface DoDontProps {
  children: React.ReactNode;
}

const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${themeGet('space.space70')};
`;

const DoDont: React.FC<DoDontProps> = props => {
  return (
    <StyledWrapper marginTop="space90" marginBottom="space130">
      {props.children}
    </StyledWrapper>
  );
};

const DoDontImage = styled(Box)`
  border: ${themeGet('borderWidths.borderWidth10')} solid #ccd2dc;
  border-bottom: 0;
`;

const DoDontComponent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 313px;
  border: ${themeGet('borderWidths.borderWidth10')} solid #ccd2dc;
  border-bottom: 0;
`;

const Do = styled(Box)`
  padding-top: ${themeGet('space.space50')};
  border-top: ${themeGet('borderWidths.borderWidth20')} solid #23bf6e;
`;

const Dont = styled(Box)`
  padding-top: ${themeGet('space.space50')};
  border-top: ${themeGet('borderWidths.borderWidth20')} solid #ce241a;
`;

const DoDontTitle: React.FC<DoDontProps> = props => {
  return (
    <Text
      as="h5"
      fontSize="fontSize20"
      fontWeight="fontWeightSemibold"
      lineHeight="lineHeight40"
      marginBottom="space40"
    >
      {props.children}
    </Text>
  );
};

export {DoDont, Do, Dont, DoDontImage, DoDontComponent, DoDontTitle};
