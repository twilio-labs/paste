import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Box} from '@twilio-paste/box';

import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';
import {SidebarCategoryRoutes} from '../../constants';
import {getHumanizedNameFromPackageName} from '../../utils/RouteUtils';

interface InDevelopmentProps {
  type?: 'component' | 'primitive' | 'layout';
  name: string;
}

const InDevelopment: React.FC<React.PropsWithChildren<InDevelopmentProps>> = ({type, name}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={SidebarCategoryRoutes.COMPONENTS}>Components</BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h1" variant="heading10">
        {getHumanizedNameFromPackageName(name)}
      </Heading>
      <Box>
        <Paragraph>This {type} is in active development, but we haven&apos;t gotten to the docs yet.</Paragraph>
        <Paragraph>
          Feel free to{' '}
          <Anchor showExternal href="https://github.com/twilio-labs/paste/discussions">
            start a discussion
          </Anchor>{' '}
          with details on how you want to use this {type} and we&apos;ll respond to you directly.
        </Paragraph>
      </Box>
    </>
  );
};

export {InDevelopment};
