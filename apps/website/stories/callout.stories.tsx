import * as React from 'react';
import {Callout, CalloutTitle, CalloutText, CalloutList, CalloutListItem} from '../src/components/callout';

export default {
  title: 'Website/Callout',
  component: Callout,
};

export const InfoCallout = (): React.ReactNode => (
  <Callout>
    <CalloutTitle as="h1">This is an informational callout</CalloutTitle>
    <CalloutText>This is some supporting text that goes along with the informational callout.</CalloutText>
    <CalloutText>Multiple CalloutText children are allowed.</CalloutText>
    <CalloutList as="ul">
      <CalloutListItem>This is a callout list item.</CalloutListItem>
      <CalloutListItem>This is a second callout list item.</CalloutListItem>
    </CalloutList>
  </Callout>
);

export const WarningCallout = (): React.ReactNode => (
  <Callout variant="warning">
    <CalloutTitle as="h1">This is a warning callout</CalloutTitle>
    <CalloutText>
      This is some supporting text that goes along with the warning callout. Warning callouts should be taken seriously!
    </CalloutText>
    <CalloutText>Multiple CalloutText children are allowed.</CalloutText>
    <CalloutList as="ul">
      <CalloutListItem>This is a callout list item.</CalloutListItem>
      <CalloutListItem>This is a second callout list item.</CalloutListItem>
    </CalloutList>
  </Callout>
);
