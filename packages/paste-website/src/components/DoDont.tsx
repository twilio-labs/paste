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

function DoDont(props: DoDontProps) {
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

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

function Example(props: ExampleProps) {
  console.log(props);
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
}

function Do(props: ExampleProps) {
  return <Example do={true} {...props} />;
}

function Dont(props: ExampleProps) {
  return <Example do={false} {...props} />;
}

export {DoDont, Do, Dont};
