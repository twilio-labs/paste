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
        default: {paddingY: 'space30'},
        info: {paddingY: 'space40'},
        warning: {paddingY: 'space50'},
        error: {paddingY: 'space60'},
        success: {paddingY: 'space70'},
        new: {paddingY: 'space80'},
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

export const Default = (): React.ReactElement => <CustomizationWrapper variant="default" />;
export const Info = (): React.ReactElement => <CustomizationWrapper variant="info" />;
export const Warning = (): React.ReactElement => <CustomizationWrapper variant="warning" />;
export const Error = (): React.ReactElement => <CustomizationWrapper variant="error" />;
export const Success = (): React.ReactElement => <CustomizationWrapper variant="success" />;
export const New = (): React.ReactElement => <CustomizationWrapper variant="new" />;

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Badge/Customization',
  component: Badge,
  excludeStories: ['getStyles', 'makeBadge'],
};
