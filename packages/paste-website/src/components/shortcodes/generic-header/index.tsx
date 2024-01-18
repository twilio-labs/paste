import { Anchor } from "@twilio-paste/anchor";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";
import { Heading } from "@twilio-paste/heading";
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";
import {
  PageHeader,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderMeta,
  PageHeaderParagraph,
  PageHeaderSetting,
} from "@twilio-paste/page-header";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import Head from "next/head";
import * as React from "react";

import { STORYBOOK_DOMAIN, SidebarCategoryRoutes } from "../../../constants";
import { getCategoryNameFromRoute, getNameFromPackageName, useOpengraphServiceUrl } from "../../../utils/RouteUtils";
import GithubIcon from "../../icons/GithubIcon";
import StorybookIcon from "../../icons/StorybookIcon";
import { PackageStatusLegend } from "../package-status-legend";

const IconAnchor: React.FC<React.PropsWithChildren<{ href: string; icon: React.ReactNode; children: string }>> = ({
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
  packageStatus?: "Alpha" | "Beta" | "Production" | null;
  storybookUrl?: string;
  url?: string;
  version?: string;
  shouldShowBreadcrumbs?: boolean;
  productSuitability?: [string];
  children?: React.ReactNode;
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
  productSuitability,
  children,
}) => {
  const theme = useTheme();

  const ogImagePath = packageName
    ? `${categoryRoute.replace("/", "")}/${getNameFromPackageName(packageName)}`
    : undefined;
  const openGraphServiceUrl = ogImagePath ? useOpengraphServiceUrl(ogImagePath) : null;

  const shouldShowSecondary = version || githubUrl || storybookUrl;
  const sharedIconStyles = {
    height: theme.space.space40,
    width: theme.space.space40,
    display: "inline-block",
  };

  const githubIconColor = theme.textColors.colorTextIcon;

  const categoryName = getCategoryNameFromRoute(categoryRoute);
  const isFoundations = categoryRoute === SidebarCategoryRoutes.FOUNDATIONS;
  const shouldHavePreview = [SidebarCategoryRoutes.COMPONENTS, SidebarCategoryRoutes.PRIMITIVES].includes(
    categoryRoute,
  );
  const showPackageStatus = [
    SidebarCategoryRoutes.COMPONENTS,
    SidebarCategoryRoutes.PATTERNS,
    SidebarCategoryRoutes.PRIMITIVES,
  ].includes(categoryRoute);

  return (
    <PageHeader>
      {openGraphServiceUrl && shouldHavePreview && (
        <Head>
          <meta property="og:image" content={openGraphServiceUrl} />
        </Head>
      )}
      {shouldShowBreadcrumbs && (
        <PageHeaderSetting>
          <Breadcrumb>
            {isFoundations ? (
              <BreadcrumbItem>{categoryName}</BreadcrumbItem>
            ) : (
              <BreadcrumbItem href={categoryRoute}>{categoryName}</BreadcrumbItem>
            )}
          </Breadcrumb>
        </PageHeaderSetting>
      )}
      <PageHeaderDetails>
        {showPackageStatus && (
          <PackageStatusLegend
            packageStatus={packageStatus}
            figmaStatus={figmaStatus}
            designCommitteeReview={designCommitteeReview}
            engineerCommitteeReview={engineerCommitteeReview}
          />
        )}
        <PageHeaderHeading>
          <Heading as="h1" variant="heading10" marginBottom="space0">
            {name}
          </Heading>
        </PageHeaderHeading>
        {shouldShowSecondary && (
          <PageHeaderMeta>
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
                icon={<GithubIcon css={{ ...sharedIconStyles, color: githubIconColor }} decorative />}
              >
                Github
              </IconAnchor>
            )}
            {storybookUrl && (
              <IconAnchor
                href={`${STORYBOOK_DOMAIN}${storybookUrl}`}
                icon={<StorybookIcon css={{ ...sharedIconStyles, color: "#FF4785" }} decorative />}
              >
                Storybook
              </IconAnchor>
            )}
            {productSuitability && (
              // TODO: fix product badges for patterns
              <Badge as="span" variant="decorative10" key="1">
                product
              </Badge>
            )}
          </PageHeaderMeta>
        )}
        {description && <PageHeaderParagraph>{description}</PageHeaderParagraph>}
      </PageHeaderDetails>
      {children}
    </PageHeader>
  );
};

export { GenericHeader };
