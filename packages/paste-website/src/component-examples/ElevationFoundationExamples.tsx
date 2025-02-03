import { ImageCaption } from "../components/ImageCaption";

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

export const ApplyingLevel1ImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: The Side Panel pushes content at Level 0 but is categorized as Level 1 because it contains a task that
    requires user focus while still relying on the background content.
  </ImageCaption>
);

export const CalloutExampleImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Callout is typically placed inline with the background content and relies on that context for its
    meaning. However, it uses a slight background change to subtly appear more prominent and make its information stand
    out.
  </ImageCaption>
);

export const ApplyLevel2ImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Top bar role is not to be on a high hierarchy but to have enough emphasis and differentiation to be
    easily identified at any point of the experience.
  </ImageCaption>
);

export const PopoverExampleImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Popover uses a subtle, sharp shadow to create the illusion of floating above the content. This adds
    depth without dominating the interaction.
  </ImageCaption>
);
