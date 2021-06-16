import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {PackageStatusLegend} from '../package-status-legend';
import {P} from '../../Typography';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import type {PackageStatusObject} from '../../../utils/types';

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
    </>
  );
};

export {PatternHeader};
