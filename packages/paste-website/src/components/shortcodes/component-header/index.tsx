import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {useTheme} from '@twilio-paste/theme';
import {PackageStatusLegend} from '../package-status-legend';
import {STORYBOOK_DOMAIN} from '../../../constants';
import type {SidebarCategoryRoutes} from '../../../constants';
import GithubIcon from '../../icons/GithubIcon';
import StorybookIcon from '../../icons/StorybookIcon';
import {getOpengraphServiceUrl, getNameFromPackageName, getCategoryNameFromRoute} from '../../../utils/RouteUtils';

const IconAnchor: React.FC<{href: string; icon: React.ReactNode; children: string}> = ({href, icon, children}) => (
  <Anchor href={href}>
    <Box as="span">
      <Box as="span" display="inline-block" marginRight="space20">
        {icon}
      </Box>
      {children}
    </Box>
  </Anchor>
);

export interface ComponentHeaderProps {
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
  const showLinks = version || githubUrl || storybookUrl;
  const theme = useTheme();

  const sharedIconStyles = {
    height: theme.space.space40,
    width: theme.space.space40,
    display: 'inline-block',
  };

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
      <Box display="flex" alignItems="center" flexWrap="wrap" marginBottom="space70">
        <Box marginRight="space50">
          <Heading as="h1" variant="heading10" marginBottom="space0">
            {name}
          </Heading>
        </Box>
        {showStatus ? (
          <PackageStatusLegend
            status={status}
            figmaStatus={figmaStatus}
            designCommitteeStatus={designCommitteeStatus}
            engineerCommitteeStatus={engineerCommitteeStatus}
          />
        ) : null}
      </Box>
      {description ? <Text as="p">{description}</Text> : null}
      {showLinks ? (
        <Box marginTop="space70">
          <Stack orientation="horizontal" spacing="space70">
            {version ? (
              <Text as="span" color="colorTextWeak">
                Version {version}
              </Text>
            ) : null}
            {githubUrl ? (
              <IconAnchor
                href={githubUrl}
                icon={<GithubIcon css={{...sharedIconStyles, color: '#191717'}} decorative />}
              >
                Github
              </IconAnchor>
            ) : null}
            {storybookUrl ? (
              <IconAnchor
                href={`${STORYBOOK_DOMAIN}${storybookUrl}`}
                icon={<StorybookIcon css={{...sharedIconStyles, color: '#FF4785'}} decorative />}
              >
                Storybook
              </IconAnchor>
            ) : null}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export {ComponentHeader};
