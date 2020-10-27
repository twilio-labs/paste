import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Truncate} from '@twilio-paste/truncate';
import {Breadcrumb, BreadcrumbItem} from '../src';

storiesOf('Components|Breadcrumb', module)
  .addDecorator(withKnobs)
  .add('Anchors', () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
        <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
      </Breadcrumb>
    );
  })
  .add('Anchors and current page ', () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
        <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
        <BreadcrumbItem>Infrrd Germany hotline B</BreadcrumbItem>
      </Breadcrumb>
    );
  })
  .add('Anchors with truncation ', () => {
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
  });
