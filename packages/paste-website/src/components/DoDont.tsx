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
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

interface DoDontTitleProps {
  do: boolean;
}

const DoDontTitle: React.FC<DoDontTitleProps> = props => {
  return (
    <Text
      as="h5"
      fontSize="fontSize20"
      fontWeight="fontWeightSemibold"
      lineHeight="lineHeight40"
      marginBottom="space40"
    >
      {props.do ? 'Do' : `Don't`}
    </Text>
  );
};

export {DoDont, Do, Dont, DoDontImage, DoDontComponent, DoDontTitle};
