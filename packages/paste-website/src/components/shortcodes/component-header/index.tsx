import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import {SidebarCategoryRoutes} from '../../../constants';
import {P, InlineCode} from '../../Typography';
import {getHumanizedNameFromPackageName} from '../../../utils/RouteUtils';

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
    case SidebarCategoryRoutes.FORM:
      return 'Form Elements';
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
  abstractUrl: string;
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
}

const PackageValue: React.FC<{}> = ({children}) => {
  return (
    <Text as="dd" display="inline-block">
      {children}
    </Text>
  );
};

const PackageLabel: React.FC<{}> = ({children}) => {
  return (
    <Text as="dt" display="inline-block" color="colorTextWeak" css={{width: '80px'}}>
      {children}
    </Text>
  );
};

const PackageInstallSnippet: React.FC<{}> = ({children}) => {
  return <InlineCode>{children}</InlineCode>;
};

const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  name,
  categoryRoute,
  githubUrl,
  storybookUrl,
  abstractUrl,
  data,
}) => {
  if (data == null || data[0] == null || data[0].node == null) {
    return <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />;
  }
  const {description, status, name: packageName, version} = data[0].node;

  return (
    <>
      <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />
      {categoryRoute.includes('/form/') ? null : <P variant="lead">{description}</P>}
      <Box as="dl" marginBottom="space100">
        {status && (
          <Box marginBottom="space20">
            <PackageLabel>Status</PackageLabel>
            <PackageValue>{status}</PackageValue>
          </Box>
        )}
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
            <Box display="inline" marginRight="space30">
              {storybookUrl != null ? <Anchor href={storybookUrl}>Storybook</Anchor> : null}
            </Box>
            {abstractUrl != null ? <Anchor href={abstractUrl}>Abstract</Anchor> : null}
          </PackageValue>
        </Box>
        <Box marginBottom="space20">
          <PackageLabel>Install</PackageLabel>
          <PackageValue>
            <PackageInstallSnippet>yarn add {packageName}</PackageInstallSnippet> &mdash; or &mdash;{' '}
            <PackageInstallSnippet>yarn add @twilio-paste/core</PackageInstallSnippet>
          </PackageValue>
        </Box>
      </Box>
    </>
  );
};

export {ComponentHeader};
