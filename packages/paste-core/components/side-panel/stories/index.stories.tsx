// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { ChevronDoubleLeftIcon } from "@twilio-paste/icons/esm/ChevronDoubleLeftIcon";
import { ChevronDoubleRightIcon } from "@twilio-paste/icons/esm/ChevronDoubleRightIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import * as React from "react";

import { SidePanel, SidePanelBody, SidePanelHeader, SidePanelHeaderActions, SidePanelPushContentWrapper } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Side Panel",
  component: SidePanel,
};

export const Default = (): React.ReactNode => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
      <SidePanel collapsed={collapsed} label="my side panel">
        <SidePanelHeader>
          <Heading as="h5" variant="heading30" marginBottom="space0">
            Heading
          </Heading>
          <SidePanelHeaderActions>
            <Button variant="secondary_icon" size="reset" onClick={() => setCollapsed(true)}>
              <CloseIcon decorative={false} title="close side panel" size="sizeIcon50" />
            </Button>
          </SidePanelHeaderActions>
        </SidePanelHeader>
        <SidePanelBody>
          <Box width="100%" backgroundColor="colorBackgroundDecorative10Weakest" />
        </SidePanelBody>
      </SidePanel>
      <SidePanelPushContentWrapper collapsed={collapsed}>
        <Box borderStyle="solid" borderColor="colorBorder" padding="space100" height="100%" width="100%">
          <Button variant="secondary" onClick={() => setCollapsed(!collapsed)} pressed={!collapsed}>
            Toggle Side Panel
            {collapsed && <ChevronDoubleLeftIcon decorative />}
            {!collapsed && <ChevronDoubleRightIcon decorative />}
          </Button>
        </Box>
      </SidePanelPushContentWrapper>
    </>
  );
};
