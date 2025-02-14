import { Box } from "@twilio-paste/box";
import { DarkModeIcon } from "@twilio-paste/icons/esm/DarkModeIcon";
import { ThemeIcon } from "@twilio-paste/icons/esm/ThemeIcon";
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
      <Box flexShrink={0} width="170px">
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
            top={23}
            left={23}
          />
        </Box>
        <Box marginTop="space200" fontWeight="fontWeightSemibold">
          <Text as="p" color="colorTextWeak" fontSize="fontSize20">
            Base:
          </Text>
          <Text as="p" marginTop="space30" fontSize="fontSize20">
            {backgroundColorBase}
          </Text>
          <Text as="p" marginTop="space40" color="colorTextWeak" fontSize="fontSize20">
            Elevation:
          </Text>
          <Text as="p" marginTop="space30" fontSize="fontSize20">
            {backgroundColorElevation}
          </Text>
        </Box>
      </Box>
    );
  };
  return (
    <Box display="flex" overflowX="auto" columnGap="space70">
      <TokensTemplate
        backgroundColor="colorBackgroundBody"
        backgroundColorElevated="colorBackgroundBodyElevation"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-body-elevation"
        hasBorder
      />
      <TokensTemplate
        backgroundColor="colorBackground"
        backgroundColorElevated="colorBackgroundElevation"
        backgroundColorBase="$color-background"
        backgroundColorElevation="$color-background-elevation"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverse"
        backgroundColorElevated="colorBackgroundInverseElevation"
        backgroundColorBase="$color-background-inverse"
        backgroundColorElevation="$color-background-inverse-elevation"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverseStrong"
        backgroundColorElevated="colorBackgroundInverseStrongElevation"
        backgroundColorBase="$color-background-inverse-strong"
        backgroundColorElevation="$color-background-inverse-strong-elevation"
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
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="space80"
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        zIndex="zIndex10"
      >
        <Box
          backgroundColor="colorBackgroundWeaker"
          height="100px"
          borderRadius="borderRadius30"
          borderRight="none"
          borderTopRightRadius="borderRadius0"
          borderBottomRightRadius="borderRadius0"
          boxShadow={boxShadow}
        />
        <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50">
          <ThemeIcon decorative={true} color="colorTextIcon" />
          <Text as="p" color="colorTextWeak">
            Selected theme
          </Text>
        </Box>
        <Text as="p" marginTop="space30">
          {boxShadowlabel}
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
          >
            <Box
              backgroundColor="colorBackgroundWeaker"
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow={boxShadow}
            />
            <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50" paddingLeft="space80">
              <DarkModeIcon decorative={true} color="colorTextIcon" />
              <Text as="p" color="colorTextWeak">
                Dark mode
              </Text>
            </Box>
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
  title: "Website/ElevationExamples",
};
