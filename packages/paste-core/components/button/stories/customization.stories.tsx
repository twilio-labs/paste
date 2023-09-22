import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import type { BoxElementProps } from '@twilio-paste/box';
import { Card } from '@twilio-paste/card';
import { Heading } from '@twilio-paste/heading';
import { Stack } from '@twilio-paste/stack';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';

import { Button } from '../src';
import type { ButtonVariants } from '../src/types';

const customButtonStyles = {
  backgroundColor: 'colorBackgroundBrand',
  borderRadius: 'borderRadius0',
  borderWidth: 'borderWidth40',
  borderColor: 'colorBorderError',
  fontWeight: 'fontWeightLight',
  variants: {
    secondary: { backgroundColor: 'colorBackgroundNew' },
    destructive: { backgroundColor: 'colorBackgroundDestructiveStrongest', color: 'colorTextWeakest' },
    destructive_secondary: { backgroundColor: 'colorBackgroundNeutralWeakest', color: 'colorTextWarningStrong' },
    link: { padding: 'space40', borderRadius: 'borderRadiusCircle', backgroundColor: 'colorBackgroundNeutralWeakest' },
    destructive_link: {
      padding: 'space40',
      borderRadius: 'borderRadiusCircle',
      backgroundColor: 'colorBackgroundDestructiveWeak',
      color: 'colorTextWarningStrong',
      fontWeight: 'fontWeightBold',
    },
  },
} as PasteCustomCSS;

const ShowCustomization: React.FC<
  React.PropsWithChildren<{
    button: React.ReactNode;
    customButton: React.ReactNode;
    isTestEnvironment: boolean;
  }>
> = ({ button, customButton, isTestEnvironment }) => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space90">
      <Heading as="h3" variant="heading30">
        Default:
      </Heading>
      <Card>{button}</Card>
      <Heading as="h3" variant="heading30">
        Customized:
      </Heading>
      <Card>
        <CustomizationProvider
          disableAnimations={isTestEnvironment}
          theme={currentTheme}
          elements={{ BUTTON: customButtonStyles }}
        >
          {button}
        </CustomizationProvider>
      </Card>
      <Heading as="h3" variant="heading30">
        Customized with custom element prop:
      </Heading>
      <Card>
        <CustomizationProvider
          disableAnimations={isTestEnvironment}
          theme={currentTheme}
          elements={{ foo: customButtonStyles }}
        >
          {customButton}
        </CustomizationProvider>
      </Card>
    </Stack>
  );
};

export const AnyButton: React.FC<
  React.PropsWithChildren<{ element?: BoxElementProps['element']; variant: ButtonVariants }>
> = ({ element = 'BUTTON', variant }) => (
  <Button variant={variant} element={element} data-testid="button_for_customization">
    Click me
  </Button>
);

export const CustomizedPrimaryButton: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization
    isTestEnvironment={isTestEnvironment}
    button={<AnyButton variant="primary" />}
    customButton={<AnyButton element="foo" variant="primary" />}
  />
);

export const CustomizedSecondaryButton: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization
    isTestEnvironment={isTestEnvironment}
    button={<AnyButton variant="secondary" />}
    customButton={<AnyButton variant="secondary" element="foo" />}
  />
);

export const CustomizedLinkButton: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization
    isTestEnvironment={isTestEnvironment}
    button={<AnyButton variant="link" />}
    customButton={<AnyButton variant="link" element="foo" />}
  />
);

export const CustomizedDestructivePrimaryButton: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization
    isTestEnvironment={isTestEnvironment}
    button={<AnyButton variant="destructive" />}
    customButton={<AnyButton variant="destructive" element="foo" />}
  />
);

export const CustomizedDestructiveSecondaryButton: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization
    isTestEnvironment={isTestEnvironment}
    button={<AnyButton variant="destructive_secondary" />}
    customButton={<AnyButton variant="destructive_secondary" element="foo" />}
  />
);

export const CustomizedDestructiveLinkButton: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization
    isTestEnvironment={isTestEnvironment}
    button={<AnyButton variant="destructive_link" />}
    customButton={<AnyButton variant="destructive_link" element="foo" />}
  />
);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Button/Customization',
  excludeStories: ['AnyButton'],
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
