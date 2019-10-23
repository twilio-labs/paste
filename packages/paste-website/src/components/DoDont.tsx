import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {AspectRatio} from '@twilio-paste/aspect-ratio';
import {Absolute} from '@twilio-paste/absolute';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${themeGet('space.space70')};
`;

interface DoDontProps {
  children: React.ReactNode;
  do: boolean;
}

const DoDont: React.FC<DoDontProps> = props => {
  return (
    <StyledWrapper marginTop="space90" marginBottom="space130">
      {props.children}
    </StyledWrapper>
  );
};

const Center = styled(Absolute)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface DoProps {
  body: string;
  center: boolean;
  children: NonNullable<React.ReactNode>;
  do: boolean;
  title: string;
}

const Item: React.FC<DoProps> = ({center = false, ...props}) => {
  let preview = props.children;

  if (center) {
    preview = <Center>{props.children}</Center>;
  }

  return (
    <div>
      <Box
        borderStyle="solid"
        borderTopWidth="borderWidth10"
        borderRightWidth="borderWidth10"
        borderBottomWidth="borderWidth0"
        borderLeftWidth="borderWidth10"
        borderColor="colorBorderLight"
        display={props.children == null ? 'none' : 'block'}
      >
        <AspectRatio ratio="4:3">{preview}</AspectRatio>
      </Box>
      <Box
        paddingTop="space50"
        borderStyle="solid"
        borderTopWidth="borderWidth20"
        borderRightWidth="borderWidth0"
        borderBottomWidth="borderWidth0"
        borderLeftWidth="borderWidth0"
        borderColor={props.do ? 'colorBorderSuccess' : 'colorBorderError'}
      >
        <Text
          as="h5"
          fontSize="fontSize30"
          fontWeight="fontWeightSemibold"
          lineHeight="lineHeight40"
          marginBottom="space40"
        >
          {props.title}
        </Text>
        <Text>{props.body}</Text>
      </Box>
    </div>
  );
};

const Do: React.FC<DoProps> = props => {
  return <Item {...props} do />;
};

const Dont: React.FC<DoProps> = props => {
  return <Item {...props} do={false} />;
};

export {DoDont, Do, Dont};
