import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { CustomizationProvider } from '@twilio-paste/customization';
import { ProcessSuccessIcon } from '@twilio-paste/icons/esm/ProcessSuccessIcon';
import { Text } from '@twilio-paste/text';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { DescriptionList, DescriptionListDetails, DescriptionListSet, DescriptionListTerm } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Description List',
  component: DescriptionList,
};

export const Default: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Description list term</DescriptionListTerm>
        <DescriptionListDetails>Description list details</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};

export const MultipleTerms: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Firefox</DescriptionListTerm>
        <DescriptionListTerm>Mozilla Firefox</DescriptionListTerm>
        <DescriptionListTerm>Fx</DescriptionListTerm>
        <DescriptionListDetails>
          A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds
          of volunteers.
        </DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};

export const MultipleDetails: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Account SIDs</DescriptionListTerm>
        <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
        <DescriptionListDetails>AC4c86dc110e8deadf19fde8edfda87678</DescriptionListDetails>
        <DescriptionListDetails>AC6f0d431ab0655267387a9ab4065b9a03</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};

export const MultipleTermsAndDetails: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Conference SID</DescriptionListTerm>
        <DescriptionListDetails>CFdbdfc9678d4bf13f359ec53b75affa08</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Status</DescriptionListTerm>
        <DescriptionListDetails>
          <Box display="flex">
            <ProcessSuccessIcon color="colorTextIconSuccess" decorative={false} title="complete" />
            <Text as="span" marginLeft="space20">
              Complete
            </Text>
          </Box>
        </DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Reason ended</DescriptionListTerm>
        <DescriptionListDetails>Moderator hung up</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Participants</DescriptionListTerm>
        <DescriptionListDetails>Roy Hughes</DescriptionListDetails>
        <DescriptionListDetails>Anne Finkle</DescriptionListDetails>
        <DescriptionListDetails>Blake Johnson</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Duration</DescriptionListTerm>
        <DescriptionListDetails>0h 6min 24sec</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Conference title</DescriptionListTerm>
        <DescriptionListTerm>Friendly name</DescriptionListTerm>
        <DescriptionListDetails>Brand meeting</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};

export const EmptyState: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Name</DescriptionListTerm>
        <DescriptionListDetails>Ramon Hughes</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Phone number</DescriptionListTerm>
        <DescriptionListDetails>-</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Email address</DescriptionListTerm>
        <DescriptionListDetails>ramonhughes@abc.com</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};

export const FixedWidth: StoryFn = () => {
  return (
    <Box
      maxWidth="size20"
      padding="space40"
      borderStyle="solid"
      borderColor="colorBorderDecorative20Weaker"
      borderWidth="borderWidth20"
    >
      <DescriptionList>
        <DescriptionListSet>
          <DescriptionListTerm>Friendly name</DescriptionListTerm>
          <DescriptionListDetails>My dummy account</DescriptionListDetails>
        </DescriptionListSet>
        <DescriptionListSet>
          <DescriptionListTerm>Account SID</DescriptionListTerm>
          <DescriptionListDetails>AC4c86dc110e8deadf19fde8edfda87678</DescriptionListDetails>
        </DescriptionListSet>
      </DescriptionList>
    </Box>
  );
};

export const Customized: StoryFn = () => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        DESCRIPTION_LIST: { color: 'colorTextDecorative20', fontFamily: 'fontFamilyCode' },
        DESCRIPTION_LIST_SET: { backgroundColor: 'colorBackgroundDecorative30Weakest' },
        DESCRIPTION_LIST_TERM: { fontWeight: 'fontWeightExtrabold' },
        DESCRIPTION_LIST_DETAILS: { marginLeft: 'space50', color: 'colorTextDecorative40' },
      }}
    >
      <DescriptionList>
        <DescriptionListSet>
          <DescriptionListTerm>Account names</DescriptionListTerm>
          <DescriptionListDetails>My account 1</DescriptionListDetails>
          <DescriptionListDetails>My account 2</DescriptionListDetails>
        </DescriptionListSet>
      </DescriptionList>
    </CustomizationProvider>
  );
};
