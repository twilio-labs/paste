import * as React from 'react';
import merge from 'deepmerge';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Badge} from '@twilio-paste/badge';

import {GenericHeader} from '../generic-header';
import type {GenericHeaderProps} from '../generic-header';
import {SidebarCategoryRoutes} from '../../../constants';
import {getNormalizedHeaderData} from '../../../utils/GraphqlUtils';
import type {GraphqlData} from '../../../utils/GraphqlUtils';

const PackageValue: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Text as="dd" display="inline-block">
      {children}
    </Text>
  );
};

const PackageLabel: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Text as="dt" display="inline-block" color="colorTextWeak" css={{width: '80px'}}>
      {children}
    </Text>
  );
};

interface NormalizedPatternHeaderProps extends GenericHeaderProps {
  data: GraphqlData;
}

const NormalizedPatternHeader: React.FC<React.PropsWithChildren<NormalizedPatternHeaderProps>> = ({data, ...props}) => {
  const normalizedData = getNormalizedHeaderData(data);
  const {
    name,
    description,
    packageStatus,
    figmaStatus,
    designCommitteeReview,
    engineerCommitteeReview,
    productSuitability,
  } = merge(normalizedData, props);

  return (
    <>
      <GenericHeader
        name={name}
        description={description}
        categoryRoute={SidebarCategoryRoutes.PATTERNS}
        packageStatus={packageStatus}
        designCommitteeReview={designCommitteeReview}
        engineerCommitteeReview={engineerCommitteeReview}
        figmaStatus={figmaStatus}
      />
      {productSuitability && (
        <Box marginBottom="space20" marginTop="space70">
          <PackageLabel>Product</PackageLabel>
          <PackageValue>
            <Stack orientation="horizontal" spacing="space20">
              {productSuitability.map((product: string) => (
                <Badge as="span" variant="decorative10" key={product}>
                  {product}
                </Badge>
              ))}
            </Stack>
          </PackageValue>
        </Box>
      )}
    </>
  );
};

export {NormalizedPatternHeader};
