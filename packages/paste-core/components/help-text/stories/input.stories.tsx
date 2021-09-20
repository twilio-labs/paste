import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Stack} from '@twilio-paste/stack';
import {Card} from '@twilio-paste/card';
import {HelpText} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Help Text',
  component: HelpText,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <HelpText>Please enter a valid email.</HelpText>
      <HelpText variant="error">Please enter a valid email.</HelpText>
      <Box maxWidth="size20">
        <HelpText variant="error">Please enter a valid email.</HelpText>
      </Box>
    </>
  );
};

Default.story = {
  name: 'default',
};

export const Inverse = (): React.ReactNode => {
  return (
    <Box padding="space70" backgroundColor="colorBackgroundBodyInverse">
      <HelpText variant="inverse">Limit to 60 characters.</HelpText>
      <HelpText variant="error_inverse">Limit to 60 characters.</HelpText>
    </Box>
  );
};

Inverse.story = {
  name: 'inverse',
};

export const Customized = (): React.ReactNode => {
  return (
    <>
      <Stack orientation="vertical" spacing="space80">
        <Box>
          <Paragraph>Default Help Text:</Paragraph>
          <Card>
            <HelpText>Please enter a valid phone number.</HelpText>
            <HelpText variant="error">Please enter a valid phone number.</HelpText>
          </Card>
        </Box>
        <Box>
          <Paragraph>Customized Help Text:</Paragraph>
          <Card>
            <CustomizationProvider
              baseTheme="default"
              elements={{
                HELP_TEXT: {
                  color: 'colorTextSuccess',
                  fontWeight: 'fontWeightBold',
                  variants: {error: {color: 'colorTextWarningStrong'}},
                },
              }}
            >
              <HelpText>Please enter a valid phone number.</HelpText>
              <HelpText variant="error">Please enter a valid phone number.</HelpText>
            </CustomizationProvider>
          </Card>
        </Box>
        <Box>
          <Paragraph>Customized Help Text with custom element attribute:</Paragraph>
          <Card>
            <CustomizationProvider
              baseTheme="default"
              elements={{
                foo: {
                  color: 'colorTextSuccess',
                  fontWeight: 'fontWeightBold',
                  variants: {error: {color: 'colorTextWarningStrong'}},
                },
              }}
            >
              <HelpText element="foo">Please enter a valid phone number.</HelpText>
              <HelpText element="foo" variant="error">
                Please enter a valid phone number.
              </HelpText>
            </CustomizationProvider>
          </Card>
        </Box>
      </Stack>
    </>
  );
};
