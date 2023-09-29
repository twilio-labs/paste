import { Alert } from "@twilio-paste/core/alert";
import { Anchor } from "@twilio-paste/core/anchor";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import { Card } from "@twilio-paste/core/card";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/core/disclosure";
import { Column, Grid } from "@twilio-paste/core/grid";
import { Heading } from "@twilio-paste/core/heading";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/core/media-object";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/core/modal";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Separator } from "@twilio-paste/core/separator";
import { Stack } from "@twilio-paste/core/stack";
import { Text } from "@twilio-paste/core/text";
import { Toast } from "@twilio-paste/core/toast";
import { useUID } from "@twilio-paste/core/uid-library";
import { PlusIcon } from "@twilio-paste/icons/cjs/PlusIcon";
import { ProductTwilioOrgIcon } from "@twilio-paste/icons/cjs/ProductTwilioOrgIcon";
import * as React from "react";

import { ExampleForm } from "./Form";
import { PlainMenu } from "./Menu";

const handleClick = (): void => {
  // eslint-disable-next-line no-alert
  alert("clicked");
};

export const KitchenSink = (): JSX.Element => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  // Content properties
  const [projectName, setProjectName] = React.useState("");
  const projectInputID = useUID();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        backgroundColor="colorBackgroundBodyInverse"
        padding="space70"
        alignItems="center"
      >
        <Text as="h1" fontSize="fontSize60" fontWeight="fontWeightBold" color="colorTextInverse">
          Body Inverse masthead
        </Text>
        <Box>
          <Input id="inverse-input" type="text" placeholder="Inverse input" insertAfter="hello" variant="inverse" />
        </Box>
      </Box>
      <Box as="main" padding="space70" backgroundColor="colorBackgroundBody">
        <Stack orientation="vertical" spacing="space160">
          <Stack orientation="vertical" spacing="space70">
            <Alert variant="neutral">
              <Text as="p">
                <strong>Attention:</strong> These are some of the latest components from Paste core.
              </Text>
            </Alert>

            <Alert variant="warning">
              <Text as="p">
                <strong>Attention:</strong> These are some of the latest components from Paste core.
              </Text>
            </Alert>

            <Alert variant="error">
              <Text as="p">
                <strong>Attention:</strong> These are some of the latest components from Paste core.
              </Text>
            </Alert>

            <Separator orientation="horizontal" />

            <Box as="section">
              <Heading as="h1" variant="heading10">
                Hello Paste
              </Heading>
              <Paragraph>
                Some more text that is set as a Paragraph.{" "}
                <Anchor href="http://paste.twilio.design">I&rsquo;m an anchor</Anchor>
              </Paragraph>
            </Box>
          </Stack>

          <Separator orientation="horizontal" />

          <Grid>
            <Column>
              <Stack orientation="vertical" spacing="space70">
                <Toast variant="error">Message</Toast>
                <Toast variant="success">Message</Toast>
              </Stack>
            </Column>
            <Column>
              <Stack orientation="vertical" spacing="space70">
                <Toast variant="warning">Message</Toast>
                <Toast variant="neutral">Message</Toast>
              </Stack>
            </Column>
          </Grid>

          <Separator orientation="horizontal" />

          <Disclosure visible>
            <DisclosureHeading as="h2" variant="heading20">
              Buttons
            </DisclosureHeading>
            <DisclosureContent>
              <Stack orientation="vertical" spacing="space70">
                <Heading as="h2" variant="heading20">
                  Buttons
                </Heading>

                <Heading as="h3" variant="heading30">
                  Large Buttons
                </Heading>

                <Stack orientation="horizontal" spacing="space50">
                  <Button variant="primary" onClick={handleClick}>
                    <PlusIcon decorative /> Add
                  </Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="destructive" loading>
                    Destructive
                  </Button>
                  <Button variant="destructive_secondary">Secondary Destructive</Button>
                  <Button variant="secondary">
                    Add <PlusIcon decorative />
                  </Button>
                </Stack>

                <Button variant="secondary" fullWidth>
                  Full width Secondary
                </Button>

                <Heading as="h3" variant="heading30">
                  Small Buttons
                </Heading>

                <Stack orientation="horizontal" spacing="space50">
                  <Button aria-expanded="true" variant="primary" size="small">
                    Primary small
                  </Button>
                  <Button variant="primary" size="small" disabled>
                    Primary small
                  </Button>
                  <Button variant="secondary" size="small">
                    Secondary small
                  </Button>
                  <Button variant="destructive" size="small">
                    Destructive small
                  </Button>
                  <Button variant="destructive_secondary" size="small">
                    Secondary Destructive small
                  </Button>
                </Stack>

                <Heading as="h3" variant="heading30">
                  Link Buttons
                </Heading>

                <Stack orientation="horizontal" spacing="space50">
                  <Button variant="link">Secondary link small</Button>
                  <Button variant="destructive_link">Destructive link</Button>
                </Stack>
              </Stack>
            </DisclosureContent>
          </Disclosure>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Disclosure variant="contained" visible>
              <DisclosureHeading as="h2" variant="heading20">
                Forms example
              </DisclosureHeading>
              <DisclosureContent>
                <ExampleForm />
              </DisclosureContent>
            </Disclosure>
          </Box>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Heading as="h2" variant="heading20">
              Media Object
            </Heading>
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space40">
                <ProductTwilioOrgIcon decorative={false} title="Twilio Org" />
              </MediaFigure>
              <MediaBody>
                <Text as="span" fontSize="fontSize40">
                  Some flexed text
                </Text>
              </MediaBody>
            </MediaObject>
          </Box>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Heading as="h2" variant="heading20">
              Grid
            </Heading>
            <Grid marginTop="space70" gutter="space40" marginBottom="space70">
              <Column>
                <Card>Column 1</Card>
              </Column>
              <Column>
                <Card>Column 2</Card>
              </Column>
              <Column>
                <Card>Column 3</Card>
              </Column>
            </Grid>
          </Box>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Heading as="h2" variant="heading20">
              Modal example
            </Heading>

            <Button variant="primary" onClick={handleOpen}>
              New Project
            </Button>
            <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
              <ModalHeader>
                <ModalHeading as="h3" id={modalHeadingID}>
                  Create new project
                </ModalHeading>
              </ModalHeader>
              <ModalBody>
                <Paragraph>
                  Create a new Project within your Organization. Please contact your account representative to configure
                  invoicing.
                </Paragraph>
                <Label htmlFor={projectInputID}>Project Name</Label>
                <Input
                  onChange={(e) => setProjectName(e.currentTarget.value)}
                  id={projectInputID}
                  type="text"
                  value={projectName}
                />
              </ModalBody>
              <ModalFooter>
                <ModalFooterActions>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary">Submit</Button>
                </ModalFooterActions>
              </ModalFooter>
            </Modal>
          </Box>
          <Box>
            <Heading as="h2" variant="heading20">
              Menu example
            </Heading>
            <PlainMenu />
          </Box>
        </Stack>
      </Box>
    </>
  );
};
