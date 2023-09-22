import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { ChatIcon } from '@twilio-paste/icons/esm/ChatIcon';
import { Heading } from '@twilio-paste/heading';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { Paragraph } from '@twilio-paste/paragraph';
import { TextArea } from '@twilio-paste/textarea';
import { useUID } from '@twilio-paste/uid-library';

import {
  SideModal,
  SideModalButton,
  SideModalHeader,
  SideModalHeading,
  SideModalContainer,
  SideModalBody,
  useSideModalState,
  SideModalFooter,
  SideModalFooterActions,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Side Modal',
  component: SideModal,
};

export const Default: StoryFn = () => {
  const nameID = useUID();
  const emailID = useUID();
  const questionID = useUID();

  return (
    <SideModalContainer visible>
      <SideModalButton variant="primary" size="circle">
        <ChatIcon decorative={false} title="Chat" />
      </SideModalButton>
      <SideModal aria-label="Live chat">
        <SideModalHeader>
          <SideModalHeading>Live chat</SideModalHeading>
        </SideModalHeader>
        <SideModalBody>
          <Heading as="div" variant="heading30">
            Hi there!
          </Heading>
          <Paragraph>We’re here to help. Please give us some info to get started.</Paragraph>
          <Box display="flex" flexDirection="column" rowGap="space60">
            <Box>
              <Label htmlFor={nameID}>Name</Label>
              <Input id={nameID} type="text" />
            </Box>
            <Box>
              <Label htmlFor={emailID}>Email address</Label>
              <Input id={emailID} type="email" />
            </Box>
            <Box>
              <Label htmlFor={questionID}>How can we help you?</Label>
              <TextArea id={questionID} />
            </Box>
          </Box>
        </SideModalBody>
        <SideModalFooter>
          <SideModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Start chat</Button>
          </SideModalFooterActions>
        </SideModalFooter>
      </SideModal>
    </SideModalContainer>
  );
};
Default.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const StateHookExample: StoryFn = () => {
  const dialog = useSideModalState({});
  return (
    <Box display="flex" flexDirection="column" rowGap="space70">
      <Box>
        <SideModalContainer state={dialog}>
          <SideModalButton variant="primary">Side Modal Button</SideModalButton>
          <SideModal aria-label="Dialog">
            <SideModalHeader data-testid="dialog-header">
              <SideModalHeading>Live chat</SideModalHeading>
            </SideModalHeader>
            <SideModalBody data-testid="dialog-contents">
              This is the Twilio styled minimizable dialog that you can use in all your applications.
            </SideModalBody>
          </SideModal>
        </SideModalContainer>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.show()}>
          Open dialog
        </Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.hide()}>
          Close dialog
        </Button>
      </Box>
    </Box>
  );
};
StateHookExample.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
