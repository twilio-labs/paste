import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Truncate} from '@twilio-paste/truncate';
import {Breadcrumb, BreadcrumbItem} from '@twilio-paste/breadcrumb';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export const Anchors = (): React.ReactNode => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
    </Breadcrumb>
  );
};

export const AnchorsAndCurrentPage = (): React.ReactNode => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
      <BreadcrumbItem>Infrrd Germany hotline B</BreadcrumbItem>
    </Breadcrumb>
  );
};

AnchorsAndCurrentPage.story = {
  name: 'Anchors and current page ',
};

export const AnchorsWithTruncation = (): React.ReactNode => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">
        <Box as="span" display="inline-flex" maxWidth="size10">
          <Truncate title="Some very long text to truncate">Some very long text to truncate</Truncate>
        </Box>
      </BreadcrumbItem>
      <BreadcrumbItem>Infrrd Germany hotline B</BreadcrumbItem>
    </Breadcrumb>
  );
};

AnchorsWithTruncation.story = {
  name: 'Anchors with truncation ',
};
