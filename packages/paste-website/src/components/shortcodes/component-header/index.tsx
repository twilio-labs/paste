import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import {SidebarCategoryRoutes} from '../../../constants';
import {P} from '../../Typography';
import {Heading} from '../../Heading';

const ComponentHeaderBasic: React.FC<{name: string}> = ({name}) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to={SidebarCategoryRoutes.COMPONENTS}>Components</BreadcrumbItem>
    </Breadcrumb>
    <Heading as="h1" headingStyle="headingStyle10">
      {name}
    </Heading>
  </>
);

const ExternalLink = styled.a`
  margin-right: ${themeGet('space.space20')};
`;

interface ComponentHeaderProps {
  children?: React.ReactElement;
  name: string;
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

const ComponentHeader: React.FC<ComponentHeaderProps> = ({name, githubUrl, storybookUrl, data}) => {
  if (data == null || data[0] == null || data[0].node == null) {
    return <ComponentHeaderBasic name={name} />;
  }
  const {description, status, name: packageName, version} = data[0].node;

  return (
    <>
      <ComponentHeaderBasic name={name} />
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
