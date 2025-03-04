// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Anchor } from "@twilio-paste/anchor";
import { Avatar, AvatarGroup } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import { CustomizationProvider } from "@twilio-paste/customization";
import { BusinessIcon } from "@twilio-paste/icons/esm/BusinessIcon";
import { ConnectivityAvailableIcon } from "@twilio-paste/icons/esm/ConnectivityAvailableIcon";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import { HideIcon } from "@twilio-paste/icons/esm/HideIcon";
import { ShowIcon } from "@twilio-paste/icons/esm/ShowIcon";
import { RadioButton, RadioButtonGroup } from "@twilio-paste/radio-button-group";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Separator } from "@twilio-paste/separator";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@twilio-paste/tabs";
import { Text } from "@twilio-paste/text";
import { Theme, useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import Image from "next/image";
import * as React from "react";
import { LiveEditor, LiveProvider } from "react-live";

import Acme from "../../assets/images/acme.png";
import { CopyButton } from "../CopyButton";
import { CodeBlockOverlayShadow } from "../shortcodes/live-preview/CodeBlockOverlayShadow";
import { CodeblockTheme } from "../shortcodes/live-preview/theme";
import { CustomSnippet, DefaultSnippet, PrimitiveSnippet } from "./ThemeableBuilderCodeSnippets";

const StyledComponentsCard: React.FC = (): React.ReactElement<any> => {
  return (
    <Card padding="space60">
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
  );
};

const CodeEditor: React.FC<{ children: string }> = ({ children }): React.ReactElement<any> => {
  const [viewCode, setViewCode] = React.useState(false);
  const handleToggleCodeEditor = (): void => {
    setViewCode(!viewCode);
  };
  const liveEditorId = useUID();
  const theme = useTheme();

  return (
    <Box
      backgroundColor="colorBackgroundBodyInverse"
      paddingY="space110"
      paddingX="space70"
      borderBottomLeftRadius="borderRadius30"
      borderBottomRightRadius="borderRadius30"
      borderColor="colorBorderWeak"
      borderStyle="solid"
      borderWidth="borderWidth20"
      borderTopWidth="borderWidth0"
      fontSize="fontSize20"
      position="relative"
      height={viewCode ? "auto" : "112px"}
      overflow="hidden"
    >
      <Box position="absolute" top="space40" right="space40" zIndex="zIndex10">
        <Button
          variant="secondary"
          size="small"
          onClick={handleToggleCodeEditor}
          aria-label="View Code"
          aria-expanded={viewCode}
          aria-controls={liveEditorId}
        >
          {viewCode ? (
            <>
              <HideIcon decorative />
              <span>Hide code</span>
            </>
          ) : (
            <>
              <ShowIcon decorative />
              <span>View code</span>
            </>
          )}
        </Button>
      </Box>
      <LiveProvider code={children} language="jsx" theme={CodeblockTheme}>
        <LiveEditor
          id={liveEditorId}
          style={{
            margin: "-10px",
            fontFamily: theme.fonts.fontFamilyCode,
            backgroundColor: theme.backgroundColors.colorBackgroundBodyInverse,
          }}
        />
      </LiveProvider>
      {viewCode ? null : <CodeBlockOverlayShadow />}
      {viewCode ? (
        <Box position="absolute" bottom="space40" right="space40">
          <CopyButton text={children} />
        </Box>
      ) : null}
    </Box>
  );
};

const Themes = ["default", "dark", "twilio", "custom"];
type ThemeType = "default" | "dark" | "twilio" | "custom";

const ComponentsTab: React.FC = (): React.ReactElement<any> => {
  const [hasManuallyChangedtheme, setHasManuallyChangedTheme] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const [theme, selectTheme] = React.useState<ThemeType>("default");

  React.useEffect(() => {
    if (hasManuallyChangedtheme) {
      return () => {
        clearInterval(intervalRef.current);
      };
    }

    intervalRef.current = setInterval(() => {
      const nextThemeIndex = Themes.indexOf(theme) + 1;
      selectTheme((Themes[nextThemeIndex] || Themes[0]) as ThemeType);
    }, 1500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [hasManuallyChangedtheme, theme, selectTheme]);

  return (
    <>
      <Box
        paddingX="space90"
        paddingY="space170"
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeak"
        borderTopStyle="none"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap="space130"
          width="100%"
          element="CARD_AND_BUTTONS"
        >
          {theme === "custom" ? (
            <CustomizationProvider
              baseTheme="default"
              elements={{
                CARD: {
                  backgroundColor: "colorBackgroundDecorative10Weakest",
                  borderRadius: "borderRadius0",
                  borderWidth: "borderWidth10",
                  borderColor: "colorBorderPrimaryStrong",
                },
                SEPARATOR: {
                  borderColor: "colorBorderPrimaryStrong",
                },
                BOX: {
                  fontWeight: "fontWeightBold",
                  color: "colorTextDecorative20",
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
              <StyledComponentsCard />
            </CustomizationProvider>
          ) : (
            <Theme.Provider theme={theme}>
              <StyledComponentsCard />
            </Theme.Provider>
          )}
          <RadioButtonGroup
            attached
            name="themeable-builder"
            value={theme}
            legend={<ScreenReaderOnly>Component preview theme</ScreenReaderOnly>}
            onChange={(newValue) => {
              setHasManuallyChangedTheme(true);
              selectTheme(newValue as ThemeType);
            }}
            orientation="horizontal"
          >
            <RadioButton id={useUID()} value="default">
              Default
            </RadioButton>
            <RadioButton id={useUID()} value="dark">
              Dark
            </RadioButton>
            <RadioButton id={useUID()} value="twilio">
              Twilio
            </RadioButton>
            <RadioButton id={useUID()} value="custom">
              Custom
            </RadioButton>
          </RadioButtonGroup>
        </Box>
      </Box>
      {theme === "custom" ? <CodeEditor>{CustomSnippet}</CodeEditor> : <CodeEditor>{DefaultSnippet}</CodeEditor>}
    </>
  );
};

const PrimitivesTab: React.FC = (): React.ReactElement<any> => {
  return (
    <>
      <Box
        paddingX="space200"
        paddingY="space170"
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeak"
        borderTopStyle="none"
        element="OUTER_TAB_PANEL_BOX"
      >
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
      </Box>
      <CodeEditor>{PrimitiveSnippet}</CodeEditor>
    </>
  );
};

const ThemeableBuilder: React.FC = (): React.ReactElement<any> => {
  const selectedTabId = useUID();

  return (
    <Box width="size60">
      <Tabs selectedId={selectedTabId} baseId="full-width-tabs-example" variant="full_width">
        <TabList aria-label="Full width product tabs">
          <Tab id={selectedTabId}>Build with styled components</Tab>
          <Tab>Build with primitives</Tab>
        </TabList>
        <TabPanels>
          <TabPanel paddingTop="space0">
            <ComponentsTab />
          </TabPanel>
          <TabPanel paddingTop="space0">
            <PrimitivesTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export { ThemeableBuilder };
