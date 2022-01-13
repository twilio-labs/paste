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

const InDevelopment: React.FC<InDevelopmentProps> = ({type, name}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        {type === 'component' && <BreadcrumbItem to={SidebarCategoryRoutes.COMPONENTS}>Components</BreadcrumbItem>}
      </Breadcrumb>
      <Heading as="h1" variant="heading10">
        {getHumanizedNameFromPackageName(name)}
      </Heading>
      <Box>
        <Paragraph>This {type} is in active development, but we haven&apos;t gotten to the docs yet.</Paragraph>
        <Paragraph>
          Feel free to <Anchor href="https://github.com/twilio-labs/paste/issues">file a feature request</Anchor> with
          details on how you want to use this {type} and we&apos;ll respond to you directly.
        </Paragraph>
      </Box>
    </>
  );
};

export {InDevelopment};
