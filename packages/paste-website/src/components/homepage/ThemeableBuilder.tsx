// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Anchor } from "@twilio-paste/anchor";
import { Avatar, AvatarGroup } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Card } from "@twilio-paste/card";
import { CustomizationProvider } from "@twilio-paste/customization";
import { BusinessIcon } from "@twilio-paste/icons/esm/BusinessIcon";
import { ConnectivityAvailableIcon } from "@twilio-paste/icons/esm/ConnectivityAvailableIcon";
import { RadioButton, RadioButtonGroup } from "@twilio-paste/radio-button-group";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Separator } from "@twilio-paste/separator";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@twilio-paste/tabs";
import { Text } from "@twilio-paste/text";
import { Theme } from "@twilio-paste/theme";
import { useUID, useUIDSeed } from "@twilio-paste/uid-library";
import * as React from "react";

import { usePreviewThemeContext } from "../../context/PreviewThemeContext";

const StyledComponentsExample: React.FC = (): React.ReactElement => {
  return (
    <Card padding="space60">
      <Box display="flex" flexDirection="column" rowGap="space50" alignItems="center">
        <Box display="flex" width="100%" columnGap="space40">
          <Avatar variant="entity" icon={BusinessIcon} size="sizeIcon20" name="entity-avatar" />
          <Box display="flex" justifyContent="space-between" width="size30">
            <Anchor href="">ACME production website</Anchor>
            <Text as="span" display="flex" fontSize="fontSize30" lineHeight="lineHeight20">
              <ConnectivityAvailableIcon decorative color="colorTextIconAvailable" size="sizeIcon30" />
              Active
            </Text>
          </Box>
        </Box>
        <Box width="100%">
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

const ThemeableBuilder: React.FC = (): React.ReactElement => {
  const selectedTabId = useUID();
  const { theme, selectTheme } = usePreviewThemeContext();
  const nameSeed = useUIDSeed();
  const { theme: previewTheme } = usePreviewThemeContext();

  return (
    <Box width="size60" padding="space70">
      <Tabs selectedId={selectedTabId} baseId="full-width-tabs-example" variant="full_width">
        <TabList aria-label="Full width product tabs">
          <Tab id={selectedTabId}>Build with styled components</Tab>
          <Tab>Build with primitives</Tab>
        </TabList>
        <TabPanels>
          <TabPanel paddingTop="space0">
            <Box
              paddingX="space90"
              paddingY="space170"
              borderStyle="solid"
              borderWidth="borderWidth10"
              borderColor="colorBorderWeak"
              borderTopStyle="none"
            >
              <Box display="flex" flexDirection="column" alignItems="center" rowGap="space130" width="100%">
                {["twilio", "default", "dark"].includes(previewTheme) ? (
                  <Theme.Provider theme={previewTheme}>
                    <StyledComponentsExample />
                  </Theme.Provider>
                ) : (
                  <CustomizationProvider elements={{ AVATAR: { borderRadius: "borderRadius0" } }}>
                    <StyledComponentsExample />
                  </CustomizationProvider>
                )}
                <RadioButtonGroup
                  attached
                  name="theme"
                  value={theme}
                  legend={<ScreenReaderOnly>Component preview theme</ScreenReaderOnly>}
                  onChange={(newValue) => {
                    selectTheme(newValue);
                  }}
                  orientation="horizontal"
                >
                  <RadioButton id={useUID()} value="default" name={nameSeed("theme")}>
                    Default
                  </RadioButton>
                  <RadioButton id={useUID()} value="dark" name={nameSeed("theme")}>
                    Dark
                  </RadioButton>
                  <RadioButton id={useUID()} value="twilio" name={nameSeed("theme")}>
                    Twilio
                  </RadioButton>
                  <RadioButton id={useUID()} value="twilio-dark" name={nameSeed("theme")}>
                    Something fun
                  </RadioButton>
                  <RadioButton id={useUID()} value="evergreen" name={nameSeed("theme")}>
                    Something else fun
                  </RadioButton>
                </RadioButtonGroup>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Card>
              <Box display="flex" flexDirection="column" rowGap="space50" backgroundColor="colorBackground">
                <Box>
                  <Avatar variant="entity" icon={BusinessIcon} size="sizeIcon20" name="entity-avatar" />
                  <Anchor href="">ACME production website</Anchor>
                </Box>
              </Box>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export { ThemeableBuilder };
