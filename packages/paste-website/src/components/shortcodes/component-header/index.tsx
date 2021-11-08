import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {useTheme} from '@twilio-paste/theme';
import {PackageStatusLegend} from '../package-status-legend';
import {SidebarCategoryRoutes, STORYBOOK_DOMAIN} from '../../../constants';
import GithubIcon from '../../icons/GithubIcon';
import StorybookIcon from '../../icons/StorybookIcon';
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
    case SidebarCategoryRoutes.PATTERNS:
      return 'Patterns';
    default:
      return 'Layout';
  }
};

const IconAnchor: React.FC<{href: string; icon: React.ReactNode; children: React.ReactNode}> = ({
  href,
  icon,
  children,
}) => (
  <Anchor href={href}>
    <Box as="span" display="flex">
      <Box as="span" display="inline-block" flexShrink={0} verticalAlign="middle" marginRight="space20">
        {icon}
      </Box>
      {children}
    </Box>
  </Anchor>
);

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
  const theme = useTheme();

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
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Box marginRight="space50">
          <Heading as="h1" variant="heading10">
            {getHumanizedNameFromPackageName(name)}
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
      {description ? (
        <Text as="p" paddingBottom="space70">
          {description}
        </Text>
      ) : null}
      <Stack orientation="horizontal" spacing="space70">
        {version ? (
          <Text as="span" color="colorTextWeak">
            Version {version}
          </Text>
        ) : null}
        {githubUrl ? (
          <IconAnchor
            href={githubUrl}
            icon={
              <GithubIcon
                css={{height: theme.space.space40, width: theme.space.space40, color: '#191717'}}
                decorative
              />
            }
          >
            Github
          </IconAnchor>
        ) : null}
        {storybookUrl ? (
          <IconAnchor
            href={`${STORYBOOK_DOMAIN}${storybookUrl}`}
            icon={
              <StorybookIcon
                css={{height: theme.space.space40, width: theme.space.space40, color: '#FF4785'}}
                decorative
              />
            }
          >
            Storybook
          </IconAnchor>
        ) : null}
      </Stack>
    </Box>
  );
};

export {ComponentHeader};
