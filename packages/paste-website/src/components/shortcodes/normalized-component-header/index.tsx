import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/in-page-navigation";
import { PageHeaderInPageNavigation, PageHeaderSeparator } from "@twilio-paste/page-header";
import { Separator } from "@twilio-paste/separator";
import merge from "deepmerge";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { getNormalizedHeaderData } from "../../../utils/DataUtils";
import type { ApiData } from "../../../utils/DataUtils";
import { getPackagePath } from "../../../utils/RouteUtils";
import { GenericHeader } from "../generic-header";
import type { GenericHeaderProps } from "../generic-header";

interface NormalizedComponentHeaderProps extends Partial<GenericHeaderProps> {
  data: ApiData;
}

const getInPageNavUrlMap = (componentPath: string): Record<string, string> => {
  return {
    GUIDELINES: `${componentPath}`,
    API: `${componentPath}/api`,
    CHANGELOG: `${componentPath}/changelog`,
  };
};

export const NormalizedComponentHeader: React.FC<React.PropsWithChildren<NormalizedComponentHeaderProps>> = ({
  data,
  ...props
}) => {
  const normalizedData = getNormalizedHeaderData(data);

  const {
    name,
    packageName,
    version,
    description,
    packageStatus,
    figmaStatus,
    designCommitteeReview,
    engineerCommitteeReview,
    categoryRoute,
    githubUrl,
    storybookUrl,
    Feature,
    shouldShowInPageNav = true,
  } = merge(normalizedData, props);

  const componentPageBasePath = getPackagePath(categoryRoute, Feature);
  const componentPageNavLinks = getInPageNavUrlMap(componentPageBasePath);
  const router = useRouter();

  return (
    <GenericHeader
      name={data.nameOverride || name}
      packageName={packageName}
      version={version}
      description={data.descriptionOverride || description}
      packageStatus={packageStatus}
      figmaStatus={figmaStatus}
      designCommitteeReview={designCommitteeReview}
      engineerCommitteeReview={engineerCommitteeReview}
      categoryRoute={categoryRoute}
      githubUrl={githubUrl}
      storybookUrl={storybookUrl}
    >
      {shouldShowInPageNav ? (
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label="Component page navigation">
            <Link href={componentPageNavLinks.GUIDELINES} legacyBehavior passHref>
              {/* @ts-expect-error href is required but is passed down by Next */}
              <InPageNavigationItem currentPage={componentPageNavLinks.GUIDELINES === router.pathname}>
                Guidelines
              </InPageNavigationItem>
            </Link>
            <Link href={componentPageNavLinks.API} legacyBehavior passHref>
              {/* @ts-expect-error href is required but is passed down by Next */}
              <InPageNavigationItem currentPage={componentPageNavLinks.API === router.pathname}>
                API
              </InPageNavigationItem>
            </Link>
            <Link href={componentPageNavLinks.CHANGELOG} legacyBehavior passHref>
              {/* @ts-expect-error href is required but is passed down by Next */}
              <InPageNavigationItem currentPage={componentPageNavLinks.CHANGELOG === router.pathname}>
                Changelog
              </InPageNavigationItem>
            </Link>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      ) : (
        <PageHeaderSeparator>
          <Separator orientation="horizontal" />
        </PageHeaderSeparator>
      )}
    </GenericHeader>
  );
};
