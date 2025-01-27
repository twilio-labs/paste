export const ElevatedBackgroundColorTokensExample = `
const ElevatedBackgroundColorTokens = () => {
  const TokensTemplate = ({
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
        backgroundColorElevation="$color-background-elevation-strong"
      />
      <TokensTemplate
        backgroundColor="colorBackgroundStronger"
        backgroundColorElevated="colorBackgroundAvailable"
        backgroundColorBase="$color-background-body"
        backgroundColorElevation="$color-background-elevation-stronger"
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

render(
  <ElevatedBackgroundColorTokens />
)
`.trim();

export const ShadowTokensLevel1Example = `
const ShadowTokensLevel1 = () => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box
        width="50%"
        height="300px"
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
          boxShadow="shadowElevation05"
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
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
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
              boxShadow="shadowElevation05"
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

render(
  <ShadowTokensLevel1 />
)
`.trim();

export const ShadowTokensLevel2Example = `
const ShadowTokensLevel2 = () => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box
        width="50%"
        height="300px"
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
          boxShadow="shadowElevation10"
        />
        <Text as="p" color="colorTextWeak" marginTop="space50">
          Shadow (accent)
        </Text>
        <Text as="p" marginTop="space30">
          $shadow-elevation-10
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
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
              boxShadow="shadowElevation10"
            />
            <Text as="p" color="colorTextWeak" marginTop="space50" paddingLeft="space80">
              Shadow (accent)
            </Text>
            <Text as="p" marginTop="space30" paddingLeft="space80">
              $shadow-elevation-10
            </Text>
          </Box>
        </Theme.Provider>
      </Box>
    </Box>
  );
};

render(
  <ShadowTokensLevel2 />
)
`.trim();

export const ShadowTokensLevel3Example = `
const ShadowTokensLevel3 = () => {
  return (
    <Box display="flex" fontSize="fontSize30" fontWeight="fontWeightSemibold">
      <Box
        width="50%"
        height="300px"
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
          boxShadow="shadowElevation20"
        />
        <Text as="p" color="colorTextWeak" marginTop="space50">
          Shadow (accent)
        </Text>
        <Text as="p" marginTop="space30">
          $shadow-elevation-20
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
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
              boxShadow="shadowElevation20"
            />
            <Text as="p" color="colorTextWeak" marginTop="space50" paddingLeft="space80">
              Shadow (accent)
            </Text>
            <Text as="p" marginTop="space30" paddingLeft="space80">
              $shadow-elevation-20
            </Text>
          </Box>
        </Theme.Provider>
      </Box>
    </Box>
  );
};

render(
  <ShadowTokensLevel3 />
)
`.trim();
