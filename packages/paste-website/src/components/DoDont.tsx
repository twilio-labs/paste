import * as React from 'react';
import Img from 'gatsby-image';
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

const StyledExampleImg: React.FC<ExampleProps> = styled(Box)`
  border: ${themeGet('borderWidths.borderWidth10')} solid #ccd2dc;
  border-bottom: 0;
`;

const StyledExampleContent: React.FC<ExampleProps> = styled(Box)`
  margin-right: 1px;
  margin-left: 1px;
  padding-top: ${themeGet('space.space50')};
  border-top: ${(props: ExampleProps) =>
    props.do
      ? `${themeGet('borderWidths.borderWidth20')(props)} solid #23bf6e`
      : `${themeGet('borderWidths.borderWidth20')(props)} solid #ce241a`};
`;

const Example: React.FC<ExampleProps> = props => {
  const hasImage = props.image;
  return (
    <Box>
      {hasImage ? (
        <StyledExampleImg {...props}>
          {/*
          // @ts-ignore gatsby-image undefined not assiged to FluidObject */}
          <Img fluid={props.image} />
        </StyledExampleImg>
      ) : null}
      <StyledExampleContent {...props}>
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
      </StyledExampleContent>
    </Box>
  );
};

const Do: React.FC<ExampleProps> = props => {
  return <Example do {...props} />;
};

const Dont: React.FC<ExampleProps> = props => {
  return <Example do={false} {...props} />;
};

export {DoDont, Do, Dont};
