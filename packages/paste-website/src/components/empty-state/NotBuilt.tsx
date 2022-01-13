import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {UnorderedList, ListItem} from '@twilio-paste/list';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';
import {SidebarCategoryRoutes} from '../../constants';
import {getHumanizedNameFromPackageName} from '../../utils/RouteUtils';

interface NotBuiltProps {
  type?: 'component' | 'primitive' | 'layout';
  name: string;
}

const NotBuilt: React.FC<NotBuiltProps> = ({type, name}) => {
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
        <Paragraph>
          This {type} is on our roadmap, but we haven&apos;t gotten to it yet. This could be for a number of reasons,
          including:
        </Paragraph>
        <UnorderedList>
          <ListItem>
            This component depends on lower-level components that we haven&apos;t finished building yet.
          </ListItem>
          <ListItem>Other things are currently prioritized higher.</ListItem>
          <ListItem>You&apos;re the first team requesting this (even though we want to do it).</ListItem>
        </UnorderedList>
        <Paragraph>
          Feel free to <Anchor href="https://github.com/twilio-labs/paste/issues">file a feature request</Anchor> with
          details on how you want to use this {type} and we&apos;ll respond to you directly.
        </Paragraph>
      </Box>
    </>
  );
};

export {NotBuilt};
