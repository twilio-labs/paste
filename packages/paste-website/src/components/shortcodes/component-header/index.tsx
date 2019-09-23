import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import {SidebarCategoryRoutes} from '../../../constants';
import {P} from '../../Typography';
import {Heading} from '../../Heading';
import {getHumanizedNameFromPackageName} from '../../../utils/RouteUtils';

const ComponentHeaderBasic: React.FC<{
  name: string;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
}> = ({name, categoryRoute}) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to={categoryRoute}>
        {categoryRoute === SidebarCategoryRoutes.COMPONENTS ? 'Components' : 'Utilities'}
      </BreadcrumbItem>
    </Breadcrumb>
    <Heading as="h1" headingStyle="headingStyle10">
      {getHumanizedNameFromPackageName(name)}
    </Heading>
  </>
);

const ExternalLink = styled.a`
  margin-right: ${themeGet('space.space20')};
`;

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
      <Box as="dl" mb="space100">
        <Box mb="space20">
          <PackageLabel>Status</PackageLabel>
          <PackageValue>{status}</PackageValue>
        </Box>
        <Box mb="space20">
          <PackageLabel>Version</PackageLabel>
          <PackageValue>{version}</PackageValue>
        </Box>
        <Box mb="space20">
          <PackageLabel>Sources</PackageLabel>
          <PackageValue>
            <ExternalLink href={githubUrl}>Github</ExternalLink>
            {storybookUrl != null ? <ExternalLink href={storybookUrl}>Storybook</ExternalLink> : null}
          </PackageValue>
        </Box>
        <Box mb="space20">
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
