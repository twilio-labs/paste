export const CustomSnippet = `
<CustomizationProvider
  baseTheme="default"
  elements={{
    CARD: {
      backgroundColor: "colorBackgroundDecorative40Weakest",
      borderRadius: "borderRadius0",
      borderWidth: "borderWidth30",
      borderColor: "colorBorderPrimaryStrong",
    },
    SEPARATOR: {
      borderColor: "colorBorderPrimaryStrong",
      borderWidth: "borderWidth20",
    },
    BOX: {
      fontWeight: "fontWeightBold",
      color: "colorTextDecorative20",
      fontStyle: "italic",
    },
    AVATAR: {
      backgroundColor: "colorBackgroundDecorative20Weakest",
      borderRadius: "borderRadiusCircle",
      color: "colorTextIconNew",
    },
    BADGE: {
      borderRadius: "borderRadius0",
      backgroundColor: "colorBackgroundPrimaryStrong",
      color: "colorTextInverse",
      fontWeight: "fontWeightLight",
      paddingX: "space50",
    },
  }}
>
  <Card padding="space60" element="STYLED_COMPONENTS_CARD">
    <Box display="flex" flexDirection="column" rowGap="space50" alignItems="center" element="INSIDE_OF_WHITE_CARD">
      <Box display="flex" width="100%" columnGap="space40" element="TOP_ROW">
        <Avatar variant="entity" icon={BusinessIcon} size="sizeIcon20" name="entity-avatar" />
        <Box display="flex" justifyContent="space-between" width="size30" element="TWO_TEXTS">
          <Anchor href="">ACME production website</Anchor>
          <Box display="flex" columnGap="space20">
            <ConnectivityAvailableIcon decorative color="colorTextIconAvailable" size="sizeIcon30" />
            <Text as="span" display="flex" fontSize="fontSize30" lineHeight="lineHeight20">
              Active
            </Text>
          </Box>
        </Box>
      </Box>
      <Box width="100%" element="SEPARATOR">
        <Separator orientation="horizontal" verticalSpacing="space0" />
      </Box>
      <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
        <Box display="flex" columnGap="space30" alignItems="center">
          Events
          <Badge variant="neutral" as="span">
            +8%
          </Badge>
        </Box>
        301,422
      </Box>
      <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
        <Box display="flex" columnGap="space30" alignItems="center">
          Violations
          <Badge variant="neutral" as="span">
            -5%
          </Badge>
        </Box>
        0
      </Box>
      <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
        Entities
        <AvatarGroup variant="entity" size="sizeIcon30">
          <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
          <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
          <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
        </AvatarGroup>
      </Box>
    </Box>
  </Card>
</CustomizationProvider>
`.trim();

export const DefaultSnippet = `
<Card padding="space60" element="STYLED_COMPONENTS_CARD">
  <Box display="flex" flexDirection="column" rowGap="space50" alignItems="center" element="INSIDE_OF_WHITE_CARD">
    <Box display="flex" width="100%" columnGap="space40" element="TOP_ROW">
      <Avatar variant="entity" icon={BusinessIcon} size="sizeIcon20" name="entity-avatar" />
      <Box display="flex" justifyContent="space-between" width="size30" element="TWO_TEXTS">
        <Anchor href="">ACME production website</Anchor>
        <Box display="flex" columnGap="space20">
          <ConnectivityAvailableIcon decorative color="colorTextIconAvailable" size="sizeIcon30" />
          <Text as="span" display="flex" fontSize="fontSize30" lineHeight="lineHeight20">
            Active
          </Text>
        </Box>
      </Box>
    </Box>
    <Box width="100%" element="SEPARATOR">
      <Separator orientation="horizontal" verticalSpacing="space0" />
    </Box>
    <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
      <Box display="flex" columnGap="space30" alignItems="center">
        Events
        <Badge variant="neutral" as="span">
          +8%
        </Badge>
      </Box>
      301,422
    </Box>
    <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
      <Box display="flex" columnGap="space30" alignItems="center">
        Violations
        <Badge variant="neutral" as="span">
          -5%
        </Badge>
      </Box>
      0
    </Box>
    <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
      Entities
      <AvatarGroup variant="entity" size="sizeIcon30">
        <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
        <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
        <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
      </AvatarGroup>
    </Box>
  </Box>
</Card>
`.trim();

export const PrimitiveSnippet = `
<Box
  backgroundColor="colorBackgroundErrorWeakest"
  borderStyle="solid"
  borderColor="colorBorderErrorWeaker"
  borderRadius="borderRadius50"
  padding="space110"
  display="flex"
  flexDirection="column"
  rowGap="space50"
  element="RED_CARD"
>
  <Box display="flex" width="100%" columnGap="space40" element="TOP_ROW">
    <Image src={Acme} alt="acme logo" height={20} />
    <Box display="flex" justifyContent="space-between" width="size30" element="TWO_TEXTS">
      <Text as="span" color="colorTextErrorStrong" fontWeight="fontWeightSemibold">
        ACME dev
      </Text>
      <Box display="flex" columnGap="space20">
        <ErrorIcon decorative color="colorTextIconError" size="sizeIcon30" />
        <Text
          as="span"
          fontSize="fontSize30"
          lineHeight="lineHeight20"
          color="colorTextError"
          fontWeight="fontWeightBold"
        >
          3 Errors
        </Text>
      </Box>
    </Box>
  </Box>
  <Box width="100%" backgroundColor="colorBackgroundDestructiveWeaker" height="1px" />
  <Box display="flex" justifyContent="space-between" width="100%">
    <Text as="span" color="colorTextError">
      Events
    </Text>
    <Text as="span" color="colorTextError">
      301,422
    </Text>
  </Box>
  <Box display="flex" justifyContent="space-between" width="100%">
    <Text as="span" color="colorTextError">
      Violations
    </Text>
    <Text as="span" color="colorTextError">
      12
    </Text>
  </Box>
  <Box display="flex" justifyContent="space-between" width="100%">
    <Text as="span" color="colorTextError">
      Entities
    </Text>
    <AvatarGroup variant="entity" size="sizeIcon30">
      <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
      <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
      <Avatar name="entity" src="/images/avatars/entity-avatar.png" />
    </AvatarGroup>
  </Box>
</Box>
`.trim();
