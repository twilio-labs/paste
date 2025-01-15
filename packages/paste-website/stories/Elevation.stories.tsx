import { Box } from "@twilio-paste/box";
import type { BackgroundColor } from "@twilio-paste/style-props";
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
        backgroundColorElevated="colorBackgroundAvailable"
        hasBorder
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-body"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundStrong"
        backgroundColorElevated="colorBackgroundAvailable"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-body"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundStronger"
        backgroundColorElevated="colorBackgroundAvailable"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-body"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverse"
        backgroundColorElevated="colorBackgroundAvailable"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-body"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundInverseStrong"
        backgroundColorElevated="colorBackgroundAvailable"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-body"
      />
    </Box>
  );
};

export const ShadowTokens = (): React.ReactNode => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box width="50%" height="100vh" paddingTop="space130" paddingLeft="space80">
        <Box
          height="100px"
          borderRadius="borderRadius30"
          borderRight="none"
          borderTopRightRadius="borderRadius0"
          borderBottomRightRadius="borderRadius0"
          boxShadow="shadowBorder"
        />
        <Text as="p" color="colorTextWeak" marginTop="space50">
          Shadow (accent)
        </Text>
        <Text as="p" marginTop="space30">
          $shadow-elevation-05
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box backgroundColor="colorBackgroundBody" height="100vh" paddingTop="space130" paddingRight="space80">
            <Box
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow="shadowBorder"
            />
            <Text as="p" color="colorTextWeak" marginTop="space50" paddingLeft="space80">
              Shadow (accent)
            </Text>
            <Text as="p" marginTop="space30" paddingLeft="space80">
              $shadow-elevation-05
            </Text>
          </Box>
        </Theme.Provider>
      </Box>
    </Box>
  );
};

ShadowTokens.parameters = {
  padding: false,
};

export default {
  title: "Website/Elevation",
};
