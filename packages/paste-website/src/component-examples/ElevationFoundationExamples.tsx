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
      <Box flexShrink={0} width="170px">
        <Box position="relative">
          <Box
            backgroundColor={backgroundColor}
            borderRadius="borderRadius30"
            height="109px"
            width="100px"
            borderWidth={hasBorder ? "borderWidth10" : "borderWidth0"}
            borderStyle="solid"
            borderColor="colorBorderWeaker"
          />
          <Box
            backgroundColor={backgroundColorElevated}
            borderRadius="borderRadius30"
            height="109px"
            width="100px"
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
    <Box display="flex" overflowX="auto" columnGap="space30">
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
          boxShadow="shadowElevation05"
        />
        <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50">
          <LightModeIcon decorative={true} color="colorTextIcon" />
          <Text as="p" color="colorTextWeak">
            Light mode
          </Text>
        </Box>
        <Text as="p" marginTop="space30">
          $shadow-elevation-05
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
            fontWeight="fontWeightSemibold"
          >
            <Box
              backgroundColor="colorBackgroundWeaker"
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow="shadowElevation05"
            />
            <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50" paddingLeft="space80">
              <DarkModeIcon decorative={true} color="colorTextIcon" />
              <Text as="p" color="colorTextWeak">
                Dark mode
              </Text>
            </Box>
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
          boxShadow="shadowElevation10"
        />
          <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50">
            <LightModeIcon decorative={true} color="colorTextIcon" />
            <Text as="p" color="colorTextWeak">
              Light mode
            </Text>
          </Box>
          <Text as="p" marginTop="space30">
            $shadow-elevation-10
          </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
            fontWeight="fontWeightSemibold"
          >
            <Box
              backgroundColor="colorBackgroundWeaker"
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow="shadowElevation10"
            />
            <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50" paddingLeft="space80">
              <DarkModeIcon decorative={true} color="colorTextIcon" />
              <Text as="p" color="colorTextWeak">
                Dark mode
              </Text>
            </Box>
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
          boxShadow="shadowElevation20"
        />
        <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50">
          <LightModeIcon decorative={true} color="colorTextIcon" />
          <Text as="p" color="colorTextWeak">
            Light mode
          </Text>
        </Box>
        <Text as="p" marginTop="space30">
          $shadow-elevation-20
        </Text>
      </Box>
      <Box width="50%">
        <Theme.Provider theme="twilio-dark">
          <Box
            backgroundColor="colorBackgroundBody"
            height="300px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight="space80"
            borderWidth="borderWidth10"
            borderLeftWidth="borderWidth0"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
            fontWeight="fontWeightSemibold"
          >
            <Box
              backgroundColor="colorBackgroundWeaker"
              height="100px"
              borderRadius="borderRadius30"
              borderLeft="none"
              borderTopLeftRadius="borderRadius0"
              borderBottomLeftRadius="borderRadius0"
              boxShadow="shadowElevation20"
            />
            <Box display="flex" alignItems="center" columnGap="space20" marginTop="space50" paddingLeft="space80">
              <DarkModeIcon decorative={true} color="colorTextIcon" />
              <Text as="p" color="colorTextWeak">
                Dark mode
              </Text>
            </Box>
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
    For example: The Side Panel pushes content at Level 0 but is categorized as Level 1, and uses $shadow-elevation-05
    because it contains a task that requires user focus while still relying on the background content.
  </ImageCaption>
);

export const CalloutExampleImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Callout is typically placed inline with the background content and relies on that context for its
    meaning. However, it uses a slight background change with $color-background-body-elevation to subtly appear more
    prominent and make its information stand out on top of the default background body color. out.
  </ImageCaption>
);

export const ApplyLevel2ImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Topbar&apos;s role is not to be at a high hierarchy but to have enough emphasis and differentiation
    to be easily identified at any point of the experience.
  </ImageCaption>
);

export const PopoverExampleImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Popover uses a subtle, sharp shadow with $shadow-elevation-10 to create the illusion of floating
    above the content, while still being bound to its trigger button. This adds depth without dominating the
    interaction.
  </ImageCaption>
);
