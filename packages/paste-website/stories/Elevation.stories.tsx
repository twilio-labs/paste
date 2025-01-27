import { Box } from "@twilio-paste/box";
import type { BackgroundColor, BoxShadow } from "@twilio-paste/style-props";
import { Text } from "@twilio-paste/text";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

export const ElevatedBackgroundColorTokens = (): React.ReactNode => {
  interface TokensTemplateProps {
    backgroundColor: BackgroundColor;
    backgroundColorElevated: BackgroundColor;
    hasBorder?: boolean;
    backgroundColorBase: string;
    backgroundColorElevation: string;
  }

  const TokensTemplate: React.FC<TokensTemplateProps> = ({
    backgroundColor,
    backgroundColorElevated,
    hasBorder,
    backgroundColorBase,
    backgroundColorElevation,
  }) => {
    return (
      <Box>
        <Box position="relative">
          <Box
            backgroundColor={backgroundColor}
            borderRadius="borderRadius30"
            height="163px"
            width="148px"
            borderWidth={hasBorder ? "borderWidth10" : "borderWidth0"}
            borderStyle="solid"
            borderColor="colorBorderWeaker"
          />
          <Box
            backgroundColor={backgroundColorElevated}
            borderRadius="borderRadius30"
            height="163px"
            width="148px"
            position="absolute"
            top={35}
            left={35}
          />
        </Box>
        <Box marginTop="space200" fontSize="fontSize30" fontWeight="fontWeightSemibold">
          <Text as="p" color="colorTextWeak">
            Base:
          </Text>
          <Text as="p" marginTop="space30">
            {backgroundColorBase}
          </Text>
          <Text as="p" marginTop="space40" color="colorTextWeak">
            Elevation:
          </Text>
          <Text as="p" marginTop="space30">
            {backgroundColorElevation}
          </Text>
        </Box>
      </Box>
    );
  };
  return (
    <Box display="flex" flexWrap="wrap" columnGap="space70" rowGap="space90">
      <TokensTemplate
        backgroundColor="colorBackgroundBody"
        backgroundColorElevated="colorBackgroundBodyElevation"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-body"
        hasBorder
      />
      <TokensTemplate
        backgroundColor="colorBackgroundStrong"
        backgroundColorElevated="colorBackgroundElevation"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverse"
        backgroundColorElevated="colorBackgroundInverseElevation"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-inverse"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverseStrong"
        backgroundColorElevated="colorBackgroundInverseStrongElevation"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-inverse-strong"
      />
    </Box>
  );
};

const ShadowTokens: React.FC<{ boxShadow: BoxShadow; boxShadowlabel: string }> = ({ boxShadow, boxShadowlabel }) => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box
        width="50%"
        height="100vh"
        paddingTop="space130"
        paddingLeft="space80"
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        zIndex="zIndex10"
      >
        <Box
          height="100px"
          borderRadius="borderRadius30"
          borderRight="none"
          borderTopRightRadius="borderRadius0"
          borderBottomRightRadius="borderRadius0"
          boxShadow={boxShadow}
        />
        <Text as="p" color="colorTextWeak" marginTop="space50">
          Shadow (accent)
        </Text>
        <Text as="p" marginTop="space30">
          {boxShadowlabel}
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="100vh"
            paddingTop="space130"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="transparent"
          >
            <Box
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow={boxShadow}
            />
            <Text as="p" color="colorTextWeak" marginTop="space50" paddingLeft="space80">
              Shadow (accent)
            </Text>
            <Text as="p" marginTop="space30" paddingLeft="space80">
              {boxShadowlabel}
            </Text>
          </Box>
        </Theme.Provider>
      </Box>
    </Box>
  );
};

export const ShadowTokensLevel1 = (): React.ReactNode => {
  return <ShadowTokens boxShadow="shadowElevation05" boxShadowlabel="$shadow-elevation-05" />;
};

ShadowTokensLevel1.parameters = {
  padding: false,
};

export const ShadowTokensLevel2 = (): React.ReactNode => {
  return <ShadowTokens boxShadow="shadowElevation10" boxShadowlabel="$shadow-elevation-10" />;
};

ShadowTokensLevel2.parameters = {
  padding: false,
};

export const ShadowTokensLevel3 = (): React.ReactNode => {
  return <ShadowTokens boxShadow="shadowElevation20" boxShadowlabel="$shadow-elevation-20" />;
};

ShadowTokensLevel3.parameters = {
  padding: false,
};

export default {
  title: "Website/Elevation",
};
