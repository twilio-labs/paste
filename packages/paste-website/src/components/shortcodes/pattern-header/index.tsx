import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {PackageLabel, PackageValue} from '../component-header';
import {PackageStatusLegend} from '../package-status-legend';
import {P} from '../../Typography';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import {sentenceCase} from '../../../utils/SentenceCase';
import type {PackageStatusObject} from '../../../utils/types';
import {ProductBadge} from '../../ProductBadge';

const PatternHeaderBasic: React.FC<{
  name: string;
}> = ({name}) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/patterns">Patterns</BreadcrumbItem>
    </Breadcrumb>
    <Heading as="h1" variant="heading10">
      {name}
    </Heading>
  </>
);

interface PatternHeaderProps {
  description: string;
  name: string;
  packageStatus: PackageStatusObject;
}

const PatternHeader: React.FC<PatternHeaderProps> = ({description, name, packageStatus}) => {
  if (packageStatus == null || packageStatus[0] == null || packageStatus[0].node == null) {
    return <PatternHeaderBasic name={name} />;
  }

  return (
    <>
      <PatternHeaderBasic name={name} />
      <P variant="lead">{description}</P>
      <PackageStatusLegend packageStatus={packageStatus} />
      <Box as="dl" marginBottom="space100">
        {packageStatus[0].node.data.status && (
          <Box marginBottom="space20">
            <PackageLabel>Status</PackageLabel>
            <PackageValue>{sentenceCase(packageStatus[0].node.data.status)}</PackageValue>
          </Box>
        )}
        {packageStatus[0].node.data.Product_suitability && (
          <Box marginBottom="space20">
            <PackageLabel>Products</PackageLabel>
            <PackageValue>
              <Stack orientation="horizontal" spacing="space20">
                {packageStatus[0].node.data.Product_suitability.map((product) => (
                  <ProductBadge>{product}</ProductBadge>
                ))}
              </Stack>
            </PackageValue>
          </Box>
        )}
      </Box>
    </>
  );
};

export {PatternHeader};
