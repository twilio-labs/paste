import * as React from 'react';
import {Paragraph} from '@twilio-paste/paragraph';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import {Stack} from '@twilio-paste/stack';
import {Card} from '@twilio-paste/card';
import type {Story} from '@storybook/react';

import {Badge} from '../src';
import type {BadgeVariants} from '../src/types';

export const makeBadge = (variant: BadgeVariants, element?: string): React.ReactElement => (
  <Badge as="span" element={element} variant={variant} data-testid={`${variant}_badge`}>
    HelloWorld
  </Badge>
);

export const getStyles = (element = 'BADGE'): {[key: string]: PasteCustomCSS} => {
  return {
    [element]: {
      cursor: 'help',
      variants: {
        neutral: {paddingY: 'space30'},
        warning: {paddingY: 'space50'},
        error: {paddingY: 'space60'},
        success: {paddingY: 'space70'},
        new: {paddingY: 'space80'},
        decorative10: {paddingY: 'space40'},
        decorative20: {paddingY: 'space50'},
        decorative30: {paddingY: 'space60'},
        decorative40: {paddingY: 'space70'},
        default: {paddingY: 'space30'},
        info: {paddingY: 'space40'},
      },
    },
  };
};

const CustomizationWrapper: React.FC<React.PropsWithChildren<{variant: BadgeVariants; isTestEnvironment: boolean}>> = ({
  variant,
  isTestEnvironment,
}): React.ReactElement => {
  const theme = useTheme();
  const customElement = 'FOO';
  return (
    <Stack orientation="vertical" spacing="space50">
      <Card>
        <Stack orientation="vertical" spacing="space30">
          <Paragraph>Default:</Paragraph>
          {makeBadge(variant)}
        </Stack>
      </Card>
      <Card>
        <Stack orientation="vertical" spacing="space30">
          <Paragraph>Customized:</Paragraph>
          <CustomizationProvider theme={theme} elements={getStyles()} disableAnimations={isTestEnvironment}>
            {makeBadge(variant)}
          </CustomizationProvider>
        </Stack>
      </Card>
      <Card>
        <Stack orientation="vertical" spacing="space30">
          <Paragraph>Customized with custom `element` prop:</Paragraph>
          <CustomizationProvider
            theme={theme}
            elements={getStyles(customElement)}
            disableAnimations={isTestEnvironment}
          >
            {makeBadge(variant, customElement)}
          </CustomizationProvider>
        </Stack>
      </Card>
    </Stack>
  );
};

export const Neutral: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="neutral" />
);
export const Warning: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="warning" />
);
export const Error: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="error" />
);
export const Success: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="success" />
);
export const New: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="new" />
);
export const Decorative10: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="decorative10" />
);
export const Decorative20: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="decorative20" />
);
export const Decorativ30: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="decorative30" />
);
export const Decorativ40: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="decorative40" />
);
export const NeutralCounter: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="neutral_counter" />
);
export const ErrorCounter: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="error_counter" />
);
export const Default: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="default" />
);
export const Info: Story = (_args, {parameters: {isTestEnvironment}}) => (
  <CustomizationWrapper {...isTestEnvironment} variant="info" />
);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Badge/Customization',
  component: Badge,
  excludeStories: ['getStyles', 'makeBadge'],
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
