import { Box } from "@twilio-paste/box";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/in-page-navigation";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { PageContentWrapper } from "../components/PageContentWrapper";
import { PasteMDXProvider } from "../components/paste-mdx-provider";
import { PageAside } from "../components/shortcodes/PageAside";
import { NormalizedComponentHeader } from "../components/shortcodes/normalized-component-header";
import { SiteWrapper } from "../components/site-wrapper";
import { SiteMetaDefaults } from "../constants";
import type { NavigationQuery } from "../context/NavigationContext";
import type { ApiData } from "../utils/DataUtils";
import { getPackagePath } from "../utils/RouteUtils";

interface ComponentPageLayoutProps {
  children?: React.ReactElement;
  data: ApiData;
  meta: {
    title?: string;
    description?: string;
    package?: string;
  };
  navigationData: NavigationQuery;
  mdxHeadings: { depth: number; value: string }[];
  pageHeaderData: {
    categoryRoute: string;
    githubUrl: string;
    storybookUrl: string;
  };
}

// Don't display the H1 in Changelogs
const componentOverrides = {
  h1: () => null,
};

const getInPageNavUrlMap = (componentPath: string): Record<string, string> => {
  return {
    GUIDELINES: `${componentPath}`,
    API: `${componentPath}/api`,
    CHANGELOG: `${componentPath}/changelog`,
  };
};

const ComponentPageLayout: React.FC<React.PropsWithChildren<ComponentPageLayoutProps>> = ({
  children,
  meta,
  navigationData,
  data,
  mdxHeadings,
  pageHeaderData: { categoryRoute, githubUrl, storybookUrl },
}) => {
  const pageTitle = meta.title ? `${meta.title} - ${SiteMetaDefaults.TITLE}` : SiteMetaDefaults.TITLE;
  const pageDescription = meta.description || SiteMetaDefaults.DESCRIPTION;
  const router = useRouter();
  const componentPageBasePath = getPackagePath(categoryRoute, data.Feature);
  const componentPageNavLinks = getInPageNavUrlMap(componentPageBasePath);
  return (
    // TODO: move to app directory layout
    <SiteWrapper navigationData={navigationData}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={`https://paste.twilio.design${router.pathname}`} />
        <meta key="description" name="description" content={pageDescription} />
      </Head>
      <PageContentWrapper>
        <NormalizedComponentHeader
          categoryRoute={categoryRoute}
          githubUrl={githubUrl}
          storybookUrl={storybookUrl}
          data={data}
        />
        <Box
          element="PAGE_NAVIGATION"
          marginY="space100"
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor="colorBorderWeaker"
        >
          <InPageNavigation aria-label="Component page navigation" marginBottom="space0">
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
        </Box>
        <Box element="CONTENT_WRAPPER" as="div" display={["block", "block", "flex"]}>
          <PageAside data={mdxHeadings} />
          <Box element="CONTENT" as="div" maxWidth="size70" minWidth="0">
            <PasteMDXProvider componentOverrides={meta.package ? componentOverrides : {}}>{children}</PasteMDXProvider>
          </Box>
        </Box>
      </PageContentWrapper>
    </SiteWrapper>
  );
};

export default ComponentPageLayout;
