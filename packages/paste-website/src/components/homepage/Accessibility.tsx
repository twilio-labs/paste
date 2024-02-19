// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import {
  ModalBody,
  ModalContext,
  ModalDialogContent,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/modal";
import { Paragraph } from "@twilio-paste/paragraph";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@twilio-paste/tabs";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { DoodleLoopFooter } from "../../assets/illustrations/DoodleLoopFooter";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { BouncyAnchor } from "./BouncyAnchor";
import { SectionContainer } from "./SectionContainer";
import { SectionSeparator } from "./SectionSeparator";

const Accessibility: React.FC = (): React.ReactElement => {
  const selectedTabId = useUID();
  const [modalIsOpen, setModalIsOpen] = React.useState(true);
  const onDismiss = (): void => setModalIsOpen(false);
  const onOpenModal = (): void => setModalIsOpen(!modalIsOpen);
  const modalHeadingID = useUID();

  return (
    <SectionContainer>
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
              <TabPanel paddingTop="space0">
                <Box
                  paddingX="space150"
                  paddingY="space100"
                  backgroundColor="colorBackgroundOverlay"
                  borderBottomLeftRadius="borderRadius30"
                  borderBottomRightRadius="borderRadius30"
                >
                  <ModalContext.Provider value={{ onDismiss }}>
                    <ModalDialogContent aria-labelledby={modalHeadingID}>
                      <ModalHeader>
                        <ModalHeading as="h3" id={modalHeadingID}>
                          Focus management
                        </ModalHeading>
                      </ModalHeader>
                      <ModalBody>
                        All elements required to interact with the modal, including closing or acknowledging it, are
                        contained in the modal since they trap focus, and users can&apos;t interact with the underlying
                        page.
                      </ModalBody>
                      <ModalFooter>
                        <ModalFooterActions>
                          <Button variant="secondary" onClick={onDismiss}>
                            Cancel
                          </Button>
                          <Button variant="primary" onClick={onOpenModal}>
                            Next
                            <ArrowForwardIcon decorative />
                          </Button>
                        </ModalFooterActions>
                      </ModalFooter>
                    </ModalDialogContent>
                  </ModalContext.Provider>
                </Box>
              </TabPanel>
              <TabPanel paddingTop="space0">
                <Box
                  paddingX="space150"
                  paddingY="space100"
                  backgroundColor="colorBackgroundOverlay"
                  borderBottomLeftRadius="borderRadius30"
                  borderBottomRightRadius="borderRadius30"
                >
                  screen reader support
                </Box>
              </TabPanel>
              <TabPanel paddingTop="space0">
                <Box
                  paddingX="space150"
                  paddingY="space100"
                  backgroundColor="colorBackgroundOverlay"
                  borderBottomLeftRadius="borderRadius30"
                  borderBottomRightRadius="borderRadius30"
                >
                  keyboard support
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      <Box display={["none", "none", "none", "flex"]} justifyContent="center" marginTop="space140">
        <DoodleLoopFooter />
      </Box>
    </SectionContainer>
  );
};

export { Accessibility };
