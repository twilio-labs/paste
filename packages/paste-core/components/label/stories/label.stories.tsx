import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {Stack} from '@twilio-paste/stack';
import {Card} from '@twilio-paste/card';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Label, RequiredDot} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Label',
  component: Label,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="label">Label</Label>
      <Label htmlFor="label" required>
        Required Label
      </Label>
    </>
  );
};

export const Disabled = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="label" disabled>
        Label
      </Label>
      <Label htmlFor="label" required disabled>
        Required Label
      </Label>
    </>
  );
};

export const Inverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor="label" variant="inverse">
        Label
      </Label>
      <Label htmlFor="label" required variant="inverse">
        Required Label
      </Label>
    </Box>
  );
};

export const Customized: React.FC = () => {
  return (
    <Stack orientation="vertical" spacing="space20">
      <Box marginBottom="space70">
        <Paragraph>Default:</Paragraph>
        <Card>
          <Label htmlFor="label">Label</Label>
          <Label required htmlFor="required_label">
            Required label
          </Label>
          <Box display="flex" alignContent="start">
            <RequiredDot />
          </Box>
        </Card>
      </Box>
      <Box marginBottom="space70">
        <Paragraph>Customized:</Paragraph>
        <Card>
          <CustomizationProvider
            baseTheme="default"
            elements={{
              LABEL: {color: 'colorTextWarningDark', fontWeight: 'fontWeightLight'},
              LABEL_REQUIRED_DOT: {backgroundColor: 'colorBackgroundDestructiveDark'},
              REQUIRED_DOT: {backgroundColor: 'colorBackgroundDestructiveDark'},
              REQUIRED_DOT_WRAPPER: {cursor: 'help'},
            }}
          >
            <Label htmlFor="label">Label</Label>
            <Label required htmlFor="required_label" data-testid="label_test">
              Required label
            </Label>
            <Box display="flex" alignContent="start">
              <RequiredDot data-testid="required_dot" />
            </Box>
          </CustomizationProvider>
        </Card>
      </Box>
      <Box marginBottom="space70">
        <Paragraph>Customized with custom element attribute:</Paragraph>
        <Card>
          <CustomizationProvider
            elements={{
              foo: {color: 'colorTextWarningDark', fontWeight: 'fontWeightLight'},
              foo_REQUIRED_DOT: {backgroundColor: 'colorBackgroundDestructiveDark'},
              bar: {backgroundColor: 'colorBackgroundDestructiveDark'},
              bar_WRAPPER: {cursor: 'help'},
            }}
          >
            <Label htmlFor="label" element="foo">
              Label
            </Label>
            <Label required htmlFor="required_label" element="foo" data-testid="custom_label_test">
              Required label
            </Label>
            <Box display="flex" alignContent="start">
              <RequiredDot data-testid="custom_required_dot" element="bar" />
            </Box>
          </CustomizationProvider>
        </Card>
      </Box>
    </Stack>
  );
};
