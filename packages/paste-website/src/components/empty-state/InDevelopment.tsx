import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';
import {SidebarCategoryRoutes} from '../../constants';
import {getHumanizedNameFromPackageName} from '../../utils/RouteUtils';

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
        fontSize="fontSize90"
        lineHeight="lineHeight80"
        fontWeight="fontWeightSemibold"
        color="colorText"
        marginBottom="space90"
      >
        {getHumanizedNameFromPackageName(name)}
      </Text>
      <Box>
        <Text>This {type} is in active development, but we haven&apos;t gotten to the docs yet.</Text>
        <Text>
          Feel free to <Anchor href="https://github.com/twilio-labs/paste/issues">file a feature request</Anchor> with
          details on how you want to use this {type} and we&apos;ll respond to you directly.
        </Text>
      </Box>
    </>
  );
};

export {InDevelopment};
