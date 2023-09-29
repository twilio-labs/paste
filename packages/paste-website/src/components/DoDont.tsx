import { AspectRatio } from "@twilio-paste/aspect-ratio";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { styled, themeGet } from "@twilio-paste/styling-library";
import { Text } from "@twilio-paste/text";
import * as React from "react";

const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${themeGet("space.space70")};
`;

interface DoDontProps {
  children: React.ReactNode;
}

const DoDont: React.FC<React.PropsWithChildren<DoDontProps>> = (props) => {
  return (
    <StyledWrapper marginTop="space90" marginBottom="space130" data-cy="do-dont-container">
      {props.children}
    </StyledWrapper>
  );
};

interface DoProps {
  body: string;
  center: boolean;
  children: NonNullable<React.ReactNode>;
  do: boolean;
  title: string;
}

const Item: React.FC<React.PropsWithChildren<DoProps>> = ({ center = false, ...props }) => {
  let preview = props.children;

  if (center) {
    preview = (
      <Box
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {props.children}
      </Box>
    );
  }

  return (
    <div data-cy={`${props.do ? "do" : "dont"}-box`}>
      <Box
        borderStyle="solid"
        borderTopWidth="borderWidth10"
        borderRightWidth="borderWidth10"
        borderBottomWidth="borderWidth0"
        borderLeftWidth="borderWidth10"
        borderColor="colorBorderWeak"
        display={props.children == null ? "none" : "block"}
        overflowY="auto"
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
        borderColor={props.do ? "colorBorderSuccess" : "colorBorderError"}
      >
        <Heading as="h5" variant="heading50">
          {props.title}
        </Heading>
        <Text as="p">{props.body}</Text>
      </Box>
    </div>
  );
};

const Do: React.FC<React.PropsWithChildren<DoProps>> = (props) => {
  return <Item {...props} do />;
};

const Dont: React.FC<React.PropsWithChildren<DoProps>> = (props) => {
  return <Item {...props} do={false} />;
};

export { DoDont, Do, Dont };
