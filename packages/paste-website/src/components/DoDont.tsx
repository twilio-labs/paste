import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Text} from '@twilio-paste/text';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 24px;
`;

interface DoDontProps {
  children?: React.ReactNode;
}

const DoDont: React.FC<DoDontProps> = props => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

const StyledExampleImg: React.FC<ExampleProps> = styled.div`
  margin-bottom: ${themeGet('space.space50')};
  border: ${themeGet('borderWidths.borderWidth10')} solid #ccd2dc;
  border-bottom: ${(props: ExampleProps) =>
    props.do
      ? `${themeGet('borderWidths.borderWidth20')(props)} solid #23bf6e`
      : `${themeGet('borderWidths.borderWidth20')(props)} solid #ce241a`};
  img {
    display: block;
    width: 100%;
  }
`;

interface ExampleProps {
  children?: React.ReactNode;
  do: boolean;
  image: string;
}

const Example: React.FC<ExampleProps> = props => {
  return (
    <div>
      <StyledExampleImg {...props}>
        <img src={props.image} alt="" />
      </StyledExampleImg>
      <div>
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
      </div>
    </div>
  );
};

const Do: React.FC<ExampleProps> = props => {
  return <Example do {...props} />;
};

const Dont: React.FC<ExampleProps> = props => {
  return <Example do={false} {...props} />;
};

export {DoDont, Do, Dont};
