import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { StoryFn } from '@storybook/react';

import { Callout, CalloutHeading, CalloutList, CalloutListItem, CalloutText } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Callout/Customization',
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};

export const CustomizedCallout: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        CALLOUT: {
          padding: 'space40',
          variants: {
            neutral: {
              backgroundColor: 'colorBackgroundBodyInverse',
              color: 'colorTextInverse',
            },
            warning: {
              backgroundColor: 'colorBackground',
              color: 'colorTextWarningStrong',
              borderStyle: 'solid',
              borderWidth: 'borderWidth20',
              borderColor: 'colorBorderWarning',
            },
          },
        },
        CALLOUT_HEADING: {
          fontSize: 'fontSize50',
          lineHeight: 'lineHeight50',
        },
        CALLOUT_TEXT: {
          fontSize: 'fontSize30',
          lineHeight: 'lineHeight30',
        },
        CALLOUT_LIST: {
          marginLeft: 'space50',
        },
        CALLOUT_LIST_ITEM: {
          fontSize: 'fontSize30',
          lineHeight: 'lineHeight30',
        },
      }}
    >
      <Box display="flex" flexDirection="column" rowGap="space60">
        <Callout variant="neutral">
          <CalloutHeading as="h3">Neutral callout</CalloutHeading>
          <CalloutText>Take a look at this list:</CalloutText>
          <CalloutList as="ul">
            <CalloutListItem>Item one</CalloutListItem>
            <CalloutListItem>Item two</CalloutListItem>
            <CalloutListItem>Item three</CalloutListItem>
          </CalloutList>
        </Callout>
        <Callout variant="warning">
          <CalloutHeading as="h3">Warning callout</CalloutHeading>
          <CalloutText>Take a look at this list:</CalloutText>
          <CalloutList as="ol">
            <CalloutListItem>Item one</CalloutListItem>
            <CalloutListItem>Item two</CalloutListItem>
            <CalloutListItem>Item three</CalloutListItem>
          </CalloutList>
        </Callout>
      </Box>
    </CustomizationProvider>
  );
};
