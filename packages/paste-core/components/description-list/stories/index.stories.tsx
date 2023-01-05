import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';

import {DescriptionList, DescriptionListTerm, DescriptionListDetails} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Description List',
  component: DescriptionList,
};

export const Default: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListTerm>Description list term</DescriptionListTerm>
      <DescriptionListDetails>Description list details</DescriptionListDetails>
    </DescriptionList>
  );
};

export const MultipleTerms: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListTerm>Firefox</DescriptionListTerm>
      <DescriptionListTerm>Mozilla Firefox</DescriptionListTerm>
      <DescriptionListTerm>Fx</DescriptionListTerm>
      <DescriptionListDetails>
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </DescriptionListDetails>
    </DescriptionList>
  );
};

export const MultipleDefinitions: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListTerm>Account SIDs</DescriptionListTerm>
      <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
      <DescriptionListDetails>AC4c86dc110e8deadf19fde8edfda87678</DescriptionListDetails>
      <DescriptionListDetails>AC6f0d431ab0655267387a9ab4065b9a03</DescriptionListDetails>
    </DescriptionList>
  );
};

export const EmptyState: StoryFn = () => {
  return (
    <DescriptionList>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDetails>Ramon Hughes</DescriptionListDetails>
      <DescriptionListTerm>Phone number</DescriptionListTerm>
      <DescriptionListDetails />
      <DescriptionListTerm>Email address</DescriptionListTerm>
      <DescriptionListDetails>ramonhughes@abc.com</DescriptionListDetails>
    </DescriptionList>
  );
};

export const Customized: StoryFn = () => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        DESCRIPTION_LIST_TERM: {fontWeight: 'fontWeightBold'},
        DESCRIPTION_LIST_DETAILS: {marginLeft: 'space10'},
      }}
    >
      <DescriptionList>
        <DescriptionListTerm>A</DescriptionListTerm>
        <DescriptionListDetails>1</DescriptionListDetails>
      </DescriptionList>
    </CustomizationProvider>
  );
};
