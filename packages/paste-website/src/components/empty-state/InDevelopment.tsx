import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {capitalize} from 'lodash';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';
import {SidebarCategoryRoutes} from '../../constants';

interface InDevelopmentProps {
  type?: 'component' | 'primitive' | 'utility';
  name: string;
}

const InDevelopment: React.FC<InDevelopmentProps> = ({type, name}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to={type === 'utility' ? SidebarCategoryRoutes.UTILITIES : SidebarCategoryRoutes.COMPONENTS}>
          {type === 'utility' ? 'Utilities' : 'Components'}
        </BreadcrumbItem>
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
        <Text>This {type} is in active development, but we haven&apos;t gotten to the docs yet.</Text>
        <Text>
          Feel free to <Anchor href="https://github.com/twilio-labs/paste/issues">file a ticket</Anchor> to help us
          prioritize writing the docs if you need this.
        </Text>
      </Box>
    </>
  );
};

export {InDevelopment};
