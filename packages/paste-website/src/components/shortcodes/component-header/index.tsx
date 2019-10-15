import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import {SidebarCategoryRoutes} from '../../../constants';
import {P} from '../../Typography';
import {Heading} from '../../Heading';
import {getHumanizedNameFromPackageName} from '../../../utils/RouteUtils';

const getCategoryNameFromRoute = (categoryRoute: string): string => {
  switch (categoryRoute) {
    case SidebarCategoryRoutes.COMPONENTS:
      return 'Components';
    case SidebarCategoryRoutes.UTILITIES:
      return 'Utilities';
    case SidebarCategoryRoutes.TOKENS:
      return 'Tokens';
    default:
      return 'Utilities';
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
    <Heading as="h1" headingStyle="headingStyle10">
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
}

const getPackageItemStyles = (props: {}): {} => ({
  display: 'inline-block',
  color: themeGet('textColors.colorText')(props),
  fontSize: themeGet('fontSizes.fontSize20')(props),
});

const PackageValue = styled.dd(getPackageItemStyles);

const PackageLabel = styled.dt(getPackageItemStyles, {
  color: '#465672',
  width: '80px',
});

const ComponentHeader: React.FC<ComponentHeaderProps> = ({name, categoryRoute, githubUrl, storybookUrl, data}) => {
  if (data == null || data[0] == null || data[0].node == null) {
    return <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />;
  }
  const {description, status, name: packageName, version} = data[0].node;

  return (
    <>
      <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />
      <P variant="lead">{description}</P>
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
            {storybookUrl != null ? <Anchor href={storybookUrl}>Storybook</Anchor> : null}
          </PackageValue>
        </Box>
        <Box marginBottom="space20">
          <PackageLabel>Install</PackageLabel>
          <PackageValue>
            <code>yarn add {packageName}</code>
          </PackageValue>
        </Box>
      </Box>
    </>
  );
};

export {ComponentHeader};
