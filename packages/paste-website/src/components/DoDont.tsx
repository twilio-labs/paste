import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${themeGet('space.space70')};
`;

interface DoDontProps {
  children: React.ReactNode;
}

const DoDont: React.FC<DoDontProps> = props => {
  return (
    <StyledWrapper marginTop="space90" marginBottom="space90">
      {props.children}
    </StyledWrapper>
  );
};

interface ExampleProps {
  children: React.ReactNode;
  do: boolean;
  image?: string;
}

const StyledExampleWraper: React.FC<ExampleProps> = styled(Box)`
  border-top: ${(props: ExampleProps) =>
    props.do
      ? `${themeGet('borderWidths.borderWidth20')(props)} solid #23bf6e`
      : `${themeGet('borderWidths.borderWidth20')(props)} solid #ce241a`};
`;

const StyledExampleImg: React.FC<ExampleProps> = styled(Box)`
  border: ${themeGet('borderWidths.borderWidth10')} solid #ccd2dc;
  border-top: 0;

  img {
    display: block;
    width: 100%;
  }
`;

const Example: React.FC<ExampleProps> = props => {
  const hasImage = props.image;
  return (
    <StyledExampleWraper {...props}>
      {hasImage ? (
        <StyledExampleImg {...props}>
          <img src={props.image} alt="" />
        </StyledExampleImg>
      ) : null}
      <Box marginTop="space50">
        <Text
          as="h5"
          fontSize="fontSize20"
          fontWeight="fontWeightSemibold"
          lineHeight="lineHeight40"
          marginBottom="space40"
        >
          {props.do ? 'Do' : `Don't`}
        </Text>
        {props.children}
      </Box>
    </StyledExampleWraper>
  );
};

const Do: React.FC<ExampleProps> = props => {
  return <Example do {...props} />;
};

const Dont: React.FC<ExampleProps> = props => {
  return <Example do={false} {...props} />;
};

export {DoDont, Do, Dont};
