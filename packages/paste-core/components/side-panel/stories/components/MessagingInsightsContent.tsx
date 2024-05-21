// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import { Combobox } from "@twilio-paste/combobox";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { ClearIcon } from "@twilio-paste/icons/esm/ClearIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import { Option, Select } from "@twilio-paste/select";
import { Separator } from "@twilio-paste/separator";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@twilio-paste/tabs";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

export const MessagingInsightsContent: React.FC<
  React.PropsWithChildren<{ collapsed: boolean; setCollapsed: (collapsed: any) => void; mainContentSkipLinkID: string }>
> = ({ collapsed, setCollapsed, mainContentSkipLinkID }) => {
  const selectedTabId = useUID();
  const fieldId = useUID();
  const operatorId = useUID();
  const valueId = useUID();

  return (
    <Box
      id={mainContentSkipLinkID}
      // width="100%"
      padding="space100"
      display="grid"
      gridTemplateAreas="'header actions' 'filters filters' 'content content'"
      alignItems="center"
      justifyContent="space-between"
      rowGap="space80"
      columnGap="space40"
    >
      <Box gridArea="header">
        <Heading as="h1" variant="heading10" marginBottom="space0">
          Messaging Insights
        </Heading>
      </Box>
      <Box gridArea="actions" justifySelf="end">
        <Badge
          variant="decorative20"
          as="button"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <ArtificialIntelligenceIcon decorative />
          Ask Intelligent Assistant
        </Badge>
      </Box>
      <Box gridArea="filters" marginTop="space80">
        <Disclosure variant="contained" visible>
          <DisclosureHeading as="h2" variant="heading40">
            Filters
          </DisclosureHeading>
          <DisclosureContent>
            <Box
              display="grid"
              gridTemplateAreas="'time_range time_range . .' 'separator separator separator separator' 'field operator value clear' 'add_filter . . .'"
              columnGap="space40"
              rowGap="space70"
              gridTemplateColumns="1fr 1fr 1fr min-content"
              alignItems="end"
            >
              <Box gridArea="time_range">
                <Combobox
                  items={["Past 24 hours", "Past 7 days", "Past 30 days"]}
                  initialSelectedItem="Past 7 days"
                  labelText="Time range"
                  helpText="Times shown in UTC"
                />
              </Box>
              <Box gridArea="separator">
                <Separator orientation="horizontal" />
              </Box>
              <Box gridArea="field">
                <Label htmlFor={fieldId}>Field</Label>
                <Select id={fieldId}>
                  <Option value=" "> </Option>
                </Select>
              </Box>
              <Box gridArea="operator">
                <Label htmlFor={operatorId}>Operator</Label>
                <Select id={operatorId}>
                  <Option value=" "> </Option>
                </Select>
              </Box>
              <Box gridArea="value">
                <Label htmlFor={valueId}>Value</Label>
                <Select id={valueId}>
                  <Option value=" "> </Option>
                </Select>
              </Box>
              <Box gridArea="clear" paddingBottom="space20">
                <Button variant="secondary_icon" size="reset">
                  <ClearIcon decorative={false} title="clear filters" />
                </Button>
              </Box>
              <Box gridArea="add_filter">
                <Button variant="link" size="reset">
                  <PlusIcon decorative /> Add filter
                </Button>
              </Box>
            </Box>
          </DisclosureContent>
        </Disclosure>
      </Box>
      <Box gridArea="content" overflow="auto">
        <Tabs selectedId={selectedTabId} baseId={useUID()}>
          <TabList aria-label={useUID()}>
            <Tab id={selectedTabId}>Overview</Tab>
            <Tab>Delivery</Tab>
            <Tab>Responses</Tab>
            <Tab>OTP</Tab>
            <Tab>Latency</Tab>
            <Tab>Scheduled</Tab>
            <Tab>Deliverability</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box display="grid" gridTemplateAreas="'health alerts'" columnGap="space70" gridTemplateColumns="1fr 1fr">
                <Box gridArea="health">
                  <Card padding="space70">
                    <Text
                      as="h3"
                      fontWeight="fontWeightSemibold"
                      fontSize="fontSize60"
                      lineHeight="lineHeight50"
                      marginBottom="space30"
                    >
                      Your message deliverability health is Fair
                    </Text>
                    <Paragraph>
                      Twilio Messaging deliverability score is an indicator to check your messaging health at a glance.
                    </Paragraph>
                  </Card>
                </Box>
                <Box gridArea="alerts">
                  <Card padding="space70">
                    <Text as="h3" fontWeight="fontWeightSemibold" fontSize="fontSize60" lineHeight="lineHeight50">
                      Alerts & recommendations
                    </Text>
                  </Card>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
