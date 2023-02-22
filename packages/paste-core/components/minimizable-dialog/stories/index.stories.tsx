import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ChatIcon} from '@twilio-paste/icons/esm/ChatIcon';
import {Heading} from '@twilio-paste/heading';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {Paragraph} from '@twilio-paste/paragraph';
import {TextArea} from '@twilio-paste/textarea';
import {useUID} from '@twilio-paste/uid-library';

import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogHeader,
  MinimizableDialogContainer,
  MinimizableDialogContent,
  useMinimizableDialogState,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Minimizable Dialog',
  component: MinimizableDialog,
};

const DialogExample: React.FC<React.PropsWithChildren<{minimized?: boolean}>> = ({minimized = false}) => {
  const nameID = useUID();
  const emailID = useUID();
  const questionID = useUID();

  return (
    <MinimizableDialogContainer visible minimized={minimized}>
      <MinimizableDialogButton variant="primary" size="circle">
        <ChatIcon decorative={false} title="Chat" />
      </MinimizableDialogButton>
      <MinimizableDialog aria-label="Live chat">
        <MinimizableDialogHeader>Live chat</MinimizableDialogHeader>
        <MinimizableDialogContent>
          <Box padding="space70">
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
            <Box marginTop="space190">
              <Button variant="primary">Start chat</Button>
            </Box>
          </Box>
        </MinimizableDialogContent>
      </MinimizableDialog>
    </MinimizableDialogContainer>
  );
};

export const Default: StoryFn = () => <DialogExample />;
export const DefaultMinimized: StoryFn = () => <DialogExample minimized />;

export const FloatingButton: StoryFn = () => {
  const nameID = useUID();
  const emailID = useUID();
  const questionID = useUID();

  const dialog = useMinimizableDialogState({visible: true});

  return (
    <Box position="absolute" bottom="space70" right="space70">
      <MinimizableDialogContainer state={dialog}>
        {dialog.visible ? null : (
          <MinimizableDialogButton variant="primary" size="circle">
            <ChatIcon decorative={false} title="Chat" />
          </MinimizableDialogButton>
        )}
        <MinimizableDialog aria-label="Live chat">
          <MinimizableDialogHeader>Live chat</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Box padding="space70">
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
              <Box marginTop="space190">
                <Button variant="primary">Start chat</Button>
              </Box>
            </Box>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
    </Box>
  );
};

export const StateHookExample: StoryFn = () => {
  const dialog = useMinimizableDialogState({});
  return (
    <Box display="flex" flexDirection="column" rowGap="space70">
      <Box>
        <MinimizableDialogContainer state={dialog}>
          <MinimizableDialogButton variant="primary">Minimizable Dialog Button</MinimizableDialogButton>
          <MinimizableDialog aria-label="Dialog">
            <MinimizableDialogHeader data-testid="dialog-header">Dialog</MinimizableDialogHeader>
            <MinimizableDialogContent data-testid="dialog-contents">
              <Box padding="space70">
                This is the Twilio styled minimizable dialog that you can use in all your applications.
              </Box>
            </MinimizableDialogContent>
          </MinimizableDialog>
        </MinimizableDialogContainer>
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
      <Box>
        <Button variant="primary" onClick={() => dialog.minimize()}>
          Minimize dialog
        </Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.expand()}>
          Expand dialog
        </Button>
      </Box>
    </Box>
  );
};
