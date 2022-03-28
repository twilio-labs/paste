import * as React from 'react';
import {Paragraph} from '@twilio-paste/paragraph';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import {Stack} from '@twilio-paste/stack';
import {Card} from '@twilio-paste/card';
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

const CustomizationWrapper: React.FC<{variant: BadgeVariants}> = ({variant}): React.ReactElement => {
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
          <CustomizationProvider theme={theme} elements={getStyles()}>
            {makeBadge(variant)}
          </CustomizationProvider>
        </Stack>
      </Card>
      <Card>
        <Stack orientation="vertical" spacing="space30">
          <Paragraph>Customized with custom `element` prop:</Paragraph>
          <CustomizationProvider theme={theme} elements={getStyles(customElement)}>
            {makeBadge(variant, customElement)}
          </CustomizationProvider>
        </Stack>
      </Card>
    </Stack>
  );
};

export const Neutral = (): React.ReactElement => <CustomizationWrapper variant="neutral" />;
export const Warning = (): React.ReactElement => <CustomizationWrapper variant="warning" />;
export const Error = (): React.ReactElement => <CustomizationWrapper variant="error" />;
export const Success = (): React.ReactElement => <CustomizationWrapper variant="success" />;
export const New = (): React.ReactElement => <CustomizationWrapper variant="new" />;
export const Decorative10 = (): React.ReactElement => <CustomizationWrapper variant="decorative10" />;
export const Decorative20 = (): React.ReactElement => <CustomizationWrapper variant="decorative20" />;
export const Decorativ30 = (): React.ReactElement => <CustomizationWrapper variant="decorative30" />;
export const Decorativ40 = (): React.ReactElement => <CustomizationWrapper variant="decorative40" />;
export const NeutralCounter = (): React.ReactElement => <CustomizationWrapper variant="neutral_counter" />;
export const ErrorCounter = (): React.ReactElement => <CustomizationWrapper variant="error_counter" />;
export const Default = (): React.ReactElement => <CustomizationWrapper variant="default" />;
export const Info = (): React.ReactElement => <CustomizationWrapper variant="info" />;

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Badge/Customization',
  component: Badge,
  excludeStories: ['getStyles', 'makeBadge'],
};
