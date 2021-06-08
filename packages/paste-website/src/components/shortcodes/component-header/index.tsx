import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import {PackageStatusLegend} from '../package-status-legend';
import {SidebarCategoryRoutes, STORYBOOK_DOMAIN} from '../../../constants';
import {P, InlineCode} from '../../Typography';
import {getHumanizedNameFromPackageName} from '../../../utils/RouteUtils';
import type {PackageStatusObject} from '../../../utils/types';

const getCategoryNameFromRoute = (categoryRoute: string): string => {
  switch (categoryRoute) {
    case SidebarCategoryRoutes.COMPONENTS:
      return 'Components';
    case SidebarCategoryRoutes.PRIMITIVES:
      return 'Primitives';
    case SidebarCategoryRoutes.LAYOUT:
      return 'Layout';
    case SidebarCategoryRoutes.TOKENS:
      return 'Tokens';
    case SidebarCategoryRoutes.LIBRARIES:
      return 'Libraries';
    case SidebarCategoryRoutes.CUSTOMIZATION:
      return 'Customization';
    default:
      return 'Layout';
  }
};

const ComponentHeaderBasic: React.FC<{
  name: string;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
}> = ({name, categoryRoute}) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to={categoryRoute}>{getCategoryNameFromRoute(categoryRoute)}</BreadcrumbItem>
    </Breadcrumb>
    <Heading as="h1" variant="heading10">
      {getHumanizedNameFromPackageName(name)}
    </Heading>
  </>
);

interface ComponentHeaderProps {
  children?: React.ReactElement;
  name: string;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  githubUrl: string;
  storybookUrl: string;
  data?: [
    {
      node: {
        name: string;
        category: string;
        description: string;
        status: string;
        sideEffects: boolean;
        version: string;
      };
    }
  ];
  packageStatus: PackageStatusObject;
}

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

const PackageInstallSnippet: React.FC = ({children}) => {
  return <InlineCode>{children}</InlineCode>;
};

const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  name,
  categoryRoute,
  githubUrl,
  storybookUrl,
  data,
  packageStatus,
}) => {
  if (data == null || data[0] == null || data[0].node == null) {
    return <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />;
  }
  if (packageStatus == null || packageStatus[0] == null || packageStatus[0].node == null) {
    return <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />;
  }
  const {description, name: packageName, version} = data[0].node;

  return (
    <>
      <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />
      {categoryRoute.includes('/form/') ? null : <P variant="lead">{description}</P>}
      <PackageStatusLegend packageStatus={packageStatus} />
      <Box as="dl" marginBottom="space100">
        <Box marginBottom="space20">
          <PackageLabel>Version</PackageLabel>
          <PackageValue>{version}</PackageValue>
        </Box>
        <Box marginBottom="space20">
          <PackageLabel>Sources</PackageLabel>
          <PackageValue>
            <Box display="inline" marginRight="space30">
              <Anchor href={githubUrl}>Github</Anchor>
            </Box>
            {storybookUrl != null ? <Anchor href={`${STORYBOOK_DOMAIN}${storybookUrl}`}>Storybook</Anchor> : null}
          </PackageValue>
        </Box>
        <Box marginBottom="space20">
          <PackageLabel>Import from</PackageLabel>
          <PackageValue>
            <PackageInstallSnippet>
              {packageName.replace('@twilio-paste/', '@twilio-paste/core/')}
            </PackageInstallSnippet>{' '}
            &mdash; or &mdash; <PackageInstallSnippet>{packageName}</PackageInstallSnippet>
          </PackageValue>
        </Box>
      </Box>
    </>
  );
};

export {ComponentHeader};
