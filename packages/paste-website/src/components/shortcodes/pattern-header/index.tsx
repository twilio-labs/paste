import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {ProductBadge} from '../../ProductBadge';
import {ComponentHeader} from '../component-header';
import {SidebarCategoryRoutes} from '../../../constants';

const PackageValue: React.FC = ({children}) => {
  return (
    <Text as="dd" display="inline-block">
      {children}
    </Text>
  );
};

const PackageLabel: React.FC = ({children}) => {
  return (
    <Text as="dt" display="inline-block" color="colorTextWeak" css={{width: '80px'}}>
      {children}
    </Text>
  );
};

interface PatternHeaderProps {
  name: string;
  description?: string;
  designCommitteeStatus?: string;
  engineerCommitteeStatus?: string;
  figmaStatus?: string;
  status?: string;
  products?: string[];
}

const PatternHeader: React.FC<PatternHeaderProps> = ({
  description,
  name,
  designCommitteeStatus,
  engineerCommitteeStatus,
  figmaStatus,
  status,
  products,
}) => {
  return (
    <>
      <ComponentHeader
        name={name}
        description={description}
        categoryRoute={SidebarCategoryRoutes.PATTERNS}
        status={status}
        designCommitteeStatus={designCommitteeStatus}
        engineerCommitteeStatus={engineerCommitteeStatus}
        figmaStatus={figmaStatus}
      />
      {products && (
        <Box marginBottom="space20">
          <PackageLabel>Products</PackageLabel>
          <PackageValue>
            <Stack orientation="horizontal" spacing="space20">
              {products.map((product) => (
                <ProductBadge>{product}</ProductBadge>
              ))}
            </Stack>
          </PackageValue>
        </Box>
      )}
    </>
  );
};

export {PatternHeader};
