import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {capitalize} from 'lodash';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';
import {SidebarCategoryRoutes} from '../../constants';

interface NotBuiltProps {
  type?: 'component' | 'primitive' | 'utility';
  name: string;
}

const NotBuilt: React.FC<NotBuiltProps> = ({type, name}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to={SidebarCategoryRoutes.COMPONENTS}>Components</BreadcrumbItem>
      </Breadcrumb>
      <Text
        fontSize="fontSize80"
        lineHeight="lineHeight80"
        fontWeight="fontWeightSemibold"
        color="colorText"
        mb="space90"
      >
        {capitalize(name)}
      </Text>
      <Box>
        <Text>
          This {type} is on our roadmap, but we haven't gotten to it yet. This could be for a number of reasons,
          including:
        </Text>
        <ul>
          <li>This component depends on lower-level components that we haven't finished building yet.</li>
          <li>Other things are currently prioritized higher.</li>
          <li>You're the first team requesting this (even though we want to do it).</li>
        </ul>
        <Text>
          Feel free to <Anchor href="https://github.com/twilio-labs/paste/issues">file a feature request</Anchor> with
          details on how you want to use this {type} and we'll respond to you directly.
        </Text>
      </Box>
    </>
  );
};

export {NotBuilt};
