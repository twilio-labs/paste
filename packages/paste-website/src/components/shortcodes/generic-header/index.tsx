import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {useTheme} from '@twilio-paste/theme';

import {PackageStatusLegend} from '../package-status-legend';
import {STORYBOOK_DOMAIN, SidebarCategoryRoutes} from '../../../constants';
import GithubIcon from '../../icons/GithubIcon';
import StorybookIcon from '../../icons/StorybookIcon';
import {useOpengraphServiceUrl, getNameFromPackageName, getCategoryNameFromRoute} from '../../../utils/RouteUtils';

const IconAnchor: React.FC<React.PropsWithChildren<{href: string; icon: React.ReactNode; children: string}>> = ({
  href,
  icon,
  children,
}) => (
  <Anchor href={href}>
    <Box as="span">
      <Box as="span" display="inline-block" marginRight="space20">
        {icon}
      </Box>
      {children}
    </Box>
  </Anchor>
);

export interface GenericHeaderProps {
  name: string;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  description?: string;
  designCommitteeReview?: string | null;
  engineerCommitteeReview?: string | null;
  figmaStatus?: string | null;
  githubUrl?: string;
  packageName?: string;
  packageStatus?: string | null;
  storybookUrl?: string;
  version?: string;
  shouldShowBreadcrumbs?: boolean;
}

const GenericHeader: React.FC<React.PropsWithChildren<GenericHeaderProps>> = ({
  name,
  categoryRoute,
  description,
  designCommitteeReview,
  engineerCommitteeReview,
  figmaStatus,
  githubUrl,
  packageName,
  packageStatus,
  storybookUrl,
  version,
  shouldShowBreadcrumbs = true,
}) => {
  const theme = useTheme();

  const ogImagePath = packageName
    ? `${categoryRoute.replace('/', '')}/${getNameFromPackageName(packageName)}`
    : undefined;
  const openGraphServiceUrl = ogImagePath ? useOpengraphServiceUrl(ogImagePath) : null;

  const shouldShowSecondary = version || githubUrl || storybookUrl;
  const sharedIconStyles = {
    height: theme.space.space40,
    width: theme.space.space40,
    display: 'inline-block',
  };

  const githubIconColor = theme.textColors.colorTextIcon;

  const categoryName = getCategoryNameFromRoute(categoryRoute);
  const isFoundations = categoryRoute === SidebarCategoryRoutes.FOUNDATIONS;
  const shouldHavePreview = [SidebarCategoryRoutes.COMPONENTS, SidebarCategoryRoutes.PRIMITIVES].includes(
    categoryRoute
  );

  return (
    <Box>
      {openGraphServiceUrl && shouldHavePreview && (
        <Helmet>
          <meta property="og:image" content={openGraphServiceUrl} />
        </Helmet>
      )}
      {shouldShowBreadcrumbs && (
        <Box marginBottom="space50">
          {isFoundations ? <>{categoryName}</> : <Anchor href={categoryRoute}>{categoryName}</Anchor>}
        </Box>
      )}
      <Box display="flex" alignItems="center" flexWrap="wrap" marginBottom="space70" rowGap="space70" maxWidth="size70">
        <Box marginRight="space50">
          <Heading as="h1" variant="heading10" marginBottom="space0">
            {name}
          </Heading>
        </Box>
        <PackageStatusLegend
          packageStatus={packageStatus}
          figmaStatus={figmaStatus}
          designCommitteeReview={designCommitteeReview}
          engineerCommitteeReview={engineerCommitteeReview}
        />
      </Box>
      {description && (
        <Box maxWidth="size70">
          <Text as="p" fontSize="fontSize40">
            {description}
          </Text>
        </Box>
      )}
      {shouldShowSecondary && (
        <Box marginTop="space70">
          <Stack orientation="horizontal" spacing="space70">
            {version && (
              <Text as="span" color="colorTextWeak">
                Version {version}
              </Text>
            )}
            {githubUrl && (
              <IconAnchor
                href={githubUrl}
                icon={<GithubIcon css={{...sharedIconStyles, color: githubIconColor}} decorative />}
              >
                Github
              </IconAnchor>
            )}
            {storybookUrl && (
              <IconAnchor
                href={`${STORYBOOK_DOMAIN}${storybookUrl}`}
                icon={<StorybookIcon css={{...sharedIconStyles, color: '#FF4785'}} decorative />}
              >
                Storybook
              </IconAnchor>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export {GenericHeader};
