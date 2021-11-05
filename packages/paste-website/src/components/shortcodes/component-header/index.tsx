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
  description?: string;
  designCommitteeStatus?: string;
  engineerCommitteeStatus?: string;
  figmaStatus?: string;
  githubUrl?: string;
  packageName?: string;
  status?: string;
  storybookUrl?: string;
  version?: string;
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  name,
  categoryRoute,
  description,
  designCommitteeStatus,
  engineerCommitteeStatus,
  figmaStatus,
  githubUrl,
  packageName,
  status,
  storybookUrl,
  version,
}) => {
  const ogImagePath = packageName
    ? `${categoryRoute.replace('/', '')}/${getNameFromPackageName(packageName)}`
    : undefined;

  const showStatus = status || figmaStatus || designCommitteeStatus || engineerCommitteeStatus;

  return (
    <Box>
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
      {description ? (
        <Text as="p" paddingTop="space70" paddingBottom="space70">
          {description}
        </Text>
      ) : null}
      <Stack orientation="horizontal" spacing="space70">
        {version ? (
          <Text as="span" color="colorTextWeak">
            Version {version}
          </Text>
        ) : null}
        {githubUrl ? <Anchor href={githubUrl}>Github</Anchor> : null}
        {storybookUrl ? <Anchor href={`${STORYBOOK_DOMAIN}${storybookUrl}`}>Storybook</Anchor> : null}
      </Stack>
    </Box>
  );
};

export {ComponentHeader};
