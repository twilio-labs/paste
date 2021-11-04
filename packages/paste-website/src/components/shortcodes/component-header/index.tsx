import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {PackageStatusLegend} from '../package-status-legend';
import {SidebarCategoryRoutes, STORYBOOK_DOMAIN} from '../../../constants';
import {
  getHumanizedNameFromPackageName,
  getOpengraphServiceUrl,
  getNameFromPackageName,
} from '../../../utils/RouteUtils';
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
    case SidebarCategoryRoutes.CORE:
      return 'Core';
    default:
      return 'Layout';
  }
};

interface ComponentHeaderProps {
  name: string;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  githubUrl?: string;
  storybookUrl?: string;
  status?: string;
  designCommitteeStatus?: string;
  engineerCommitteeStatus?: string;
  figmaStatus?: string;
  description?: string;
  version?: string;
  packageName?: string;

  // DEPRECATED
  children?: React.ReactElement;
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
  isCore?: boolean;
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  name,
  categoryRoute,
  packageName,
  version,
  githubUrl,
  storybookUrl,
  description,
  status,
  figmaStatus,
  designCommitteeStatus,
  engineerCommitteeStatus,

  // data,
  // packageStatus,
  // isCore = false,
}) => {
  const ogImagePath = packageName
    ? `${categoryRoute.replace('/', '')}/${getNameFromPackageName(packageName)}`
    : undefined;

  const showStatus = status || figmaStatus || designCommitteeStatus || engineerCommitteeStatus;

  return (
    <Box paddingBottom="space90">
      {ogImagePath ? (
        <Helmet>
          <meta property="og:image" content={getOpengraphServiceUrl(ogImagePath)} />
        </Helmet>
      ) : null}
      <Box marginBottom="space50">
        <Anchor href={categoryRoute}>{getCategoryNameFromRoute(categoryRoute)}</Anchor>
      </Box>
      <Stack spacing="space50" orientation="horizontal">
        <Heading as="h1" variant="heading10" marginBottom="space0">
          {getHumanizedNameFromPackageName(name)}
        </Heading>
        {showStatus ? (
          <PackageStatusLegend
            status={status}
            figmaStatus={figmaStatus}
            designCommitteeStatus={designCommitteeStatus}
            engineerCommitteeStatus={engineerCommitteeStatus}
          />
        ) : null}
      </Stack>
      <Text as="p" paddingTop="space70" paddingBottom="space70">
        {description}
      </Text>
      <Stack orientation="horizontal" spacing="space70">
        <Text as="span" color="colorTextWeak">
          Version {version}
        </Text>
        {githubUrl ? <Anchor href={githubUrl}>Github</Anchor> : null}
        {storybookUrl ? <Anchor href={`${STORYBOOK_DOMAIN}${storybookUrl}`}>Storybook</Anchor> : null}
      </Stack>

      {/* <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} ogImagePath={ogImagePath} />
      {categoryRoute.includes('/form/') ? null : <P variant="lead">{description}</P>}
      <PackageStatusLegend packageStatus={packageStatus} />
      <Box as="dl" marginBottom="space100">
        {packageStatus[0].node.data.status && (
          <Box marginBottom="space20">
            <PackageLabel>Status</PackageLabel>
            <PackageValue>{sentenceCase(packageStatus[0].node.data.status)}</PackageValue>
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
            {storybookUrl != null ? <Anchor href={`${STORYBOOK_DOMAIN}${storybookUrl}`}>Storybook</Anchor> : null}
          </PackageValue>
        </Box>
        <Box marginBottom="space20">
          <PackageLabel>Import from</PackageLabel>
          <PackageValue>
            {!isCore && (
              <>
                {' '}
                <PackageInstallSnippet>
                  {packageName.replace('@twilio-paste/', '@twilio-paste/core/')}
                </PackageInstallSnippet>{' '}
                &mdash; or &mdash;{' '}
              </>
            )}
            <PackageInstallSnippet>{packageName}</PackageInstallSnippet>
          </PackageValue>
        </Box>
      </Box> */}
    </Box>
  );
};

export {ComponentHeader};
