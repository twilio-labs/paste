import * as React from 'react';
import Head from 'next/head';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {useTheme} from '@twilio-paste/theme';
import {Breadcrumb, BreadcrumbItem} from '@twilio-paste/breadcrumb';
import {LinkExternalIcon} from '@twilio-paste/icons/esm/LinkExternalIcon';

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
  <Anchor href={href} display="flex">
    <Box as="span" display="flex" alignItems="center" columnGap="space20">
      <Box as="span" display="inline-block">
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
  url?: string;
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
  url,
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
  const showPackageStatus = [
    SidebarCategoryRoutes.COMPONENTS,
    SidebarCategoryRoutes.PATTERNS,
    SidebarCategoryRoutes.PRIMITIVES,
  ].includes(categoryRoute);

  return (
    <Box element="PAGE_HEADER">
      {openGraphServiceUrl && shouldHavePreview && (
        <Head>
          <meta property="og:image" content={openGraphServiceUrl} />
        </Head>
      )}
      {shouldShowBreadcrumbs && (
        <Box marginBottom="space50">
          <Breadcrumb>
            {isFoundations ? (
              <BreadcrumbItem>{categoryName}</BreadcrumbItem>
            ) : (
              <BreadcrumbItem href={categoryRoute}>{categoryName}</BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
      )}
      <Box display="flex" alignItems="center" flexWrap="wrap" marginBottom="space70" rowGap="space70" maxWidth="size70">
        <Box marginRight="space50">
          <Heading as="h1" variant="heading10" marginBottom="space0">
            {name}
          </Heading>
        </Box>
        {showPackageStatus && (
          <PackageStatusLegend
            packageStatus={packageStatus}
            figmaStatus={figmaStatus}
            designCommitteeReview={designCommitteeReview}
            engineerCommitteeReview={engineerCommitteeReview}
          />
        )}
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
            {url && (
              <IconAnchor href={url} icon={<LinkExternalIcon decorative />}>
                Website
              </IconAnchor>
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
