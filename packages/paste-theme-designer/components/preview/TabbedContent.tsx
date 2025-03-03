import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { Separator } from "@twilio-paste/core/separator";
import { Stack } from "@twilio-paste/core/stack";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@twilio-paste/core/tabs";
import { useUID } from "@twilio-paste/core/uid-library";
import * as React from "react";
import type { JSX } from "react";

import { AlertPreview } from "./AlertPreview";
import { AnchorPreview } from "./AnchorPreview";
import { AvatarPreview } from "./AvatarPreview";
import { BreadcrumbPreview } from "./BreadcrumbPreview";
import { ButtonPreview } from "./ButtonPreview";
import { CardPreview } from "./CardPreview";
import { PopoverPreview } from "./PopoverPreview";
import { TablePreview } from "./TablePreview";
import { ToastPreview } from "./ToastPreview";
import { TooltipPreview } from "./TooltipPreview";
import { TypographyPreview } from "./TypographyPreview";

const TabbedContent = (): JSX.Element => {
  const selectedId = useUID();

  return (
    <>
      <Heading as="h3" variant="heading10">
        This is the heading
      </Heading>
      <Tabs selectedId={selectedId} baseId="tabbed-content">
        <TabList aria-label="Preview tabs">
          <Tab id={selectedId}>Components</Tab>
          <Tab>Typography</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box marginTop="space90" marginBottom="space90">
              <Stack orientation="vertical" spacing="space90">
                <CardPreview />
                <TablePreview />
                <Separator orientation="horizontal" />
                <AlertPreview />
                <AnchorPreview />
                <AvatarPreview />
                <BreadcrumbPreview />
                <ButtonPreview />
                <TooltipPreview />
                <PopoverPreview />
                <ToastPreview />
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box marginTop="space90" marginBottom="space90">
              <TypographyPreview />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export { TabbedContent };
