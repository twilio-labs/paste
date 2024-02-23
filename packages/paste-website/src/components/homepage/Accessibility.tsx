// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { AspectRatio } from "@twilio-paste/aspect-ratio";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import { Paragraph } from "@twilio-paste/paragraph";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@twilio-paste/tabs";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { DoodleLoopFooterSide } from "../../assets/illustrations/DoodleLoopFooterSide";
import { NewDoodleLoop } from "../../assets/illustrations/NewDoodleLoop";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { BouncyAnchor } from "./BouncyAnchor";
import { SectionContainer } from "./SectionContainer";
import { SectionSeparator } from "./SectionSeparator";

const Accessibility: React.FC = (): React.ReactElement => {
  const selectedTabId = useUID();

  return (
    <SectionContainer>
      <Box
        display={["none", "none", "none", "flex"]}
        position="absolute"
        justifyContent="center"
        right={100}
        marginTop="spaceNegative170"
      >
        <DoodleLoopFooterSide />
      </Box>
      <Box element="ACCESSIBILITY" width="100%" maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}>
        <SectionSeparator>Accessibility</SectionSeparator>
        <Box
          display="flex"
          flexDirection={["column", "column", "column", "row"]}
          columnGap="space200"
          rowGap="space150"
          paddingTop="space160"
          justifyContent="space-between"
        >
          <Box fontWeight="fontWeightSemibold" fontSize="fontSize40" lineHeight="lineHeight40" maxWidth="size60">
            <Heading as="h3" variant="heading20">
              What we talk about when we talk about accessibility
            </Heading>
            <Paragraph>
              Accessibility is more than just color contrast. We believe in designing for each user, not just “all
              users”. We build with these considerations in mind:
            </Paragraph>
            <UnorderedList>
              <ListItem>
                Screen magnification, voice dictation, color blindness, and those who require help with fine motor
                control.
              </ListItem>
              <ListItem>Semantic HTML to better communicate with assistive technologies.</ListItem>
              <ListItem>UI controls that are designed to be instantly recognizable and easy to see.</ListItem>
              <ListItem>
                Keyboard navigation and focus management to allow task completion through a variety of input devices.
              </ListItem>
            </UnorderedList>
            <Box paddingTop="space70">
              <BouncyAnchor text="Learn more in our Inclusive Design Guide" href="/inclusive-design" />
            </Box>
          </Box>
          <Tabs selectedId={selectedTabId} baseId="horizontal-tabs-example" variant="fitted">
            <TabList aria-label="Horizontal product tabs">
              <Tab id={selectedTabId}>Focus management</Tab>
              <Tab>Screen reader support</Tab>
              <Tab>Keyboard support</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AspectRatio ratio="16:9">
                  <iframe
                    title="Remix silent demo video"
                    src="https://www.loom.com/embed/4c584f749e414326b83fed3321132186?sid=42b642cb-3377-4a76-b926-fe0f9f274df7"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />
                </AspectRatio>
              </TabPanel>
              <TabPanel>
                <AspectRatio ratio="16:9">
                  <iframe
                    title="Remix silent demo video"
                    src="https://www.loom.com/embed/5328cf9bec074512917180df829250e9?sid=a0a3a1a1-e521-4a86-8ccc-02b45344d97d"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />
                </AspectRatio>
              </TabPanel>
              <TabPanel>
                <AspectRatio ratio="16:9">
                  <iframe
                    title="Remix silent demo video"
                    src="https://www.loom.com/embed/7a98f9ded7b24371bd6888fa80f52b19?sid=e9b9fd19-4bbd-4692-aa67-6e8ec72eb617"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />
                </AspectRatio>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      <Box display={["none", "none", "none", "flex"]} justifyContent="center" marginTop="space140">
        <NewDoodleLoop />
      </Box>
    </SectionContainer>
  );
};

export { Accessibility };
