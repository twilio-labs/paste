import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

import { PageContentWrapper } from "../components/PageContentWrapper";
import { PasteMDXProvider } from "../components/paste-mdx-provider";
import { SiteWrapper } from "../components/site-wrapper";
import { SiteMetaDefaults } from "../constants";
import type { NavigationQuery } from "../context/NavigationContext";

interface DefaultLayoutProps {
  children?: React.ReactNode;
  data?: unknown;
  meta: {
    title?: string;
    description?: string;
    package?: string;
  };
  navigationData: NavigationQuery;
}

// Don't display the H1 in Changelogs
const componentOverrides = {
  h1: () => null,
};

const DefaultLayout: React.FC<React.PropsWithChildren<DefaultLayoutProps>> = ({ children, meta, navigationData }) => {
  const pageTitle = meta.title ? `${meta.title} - ${SiteMetaDefaults.TITLE}` : SiteMetaDefaults.TITLE;
  const pageDescription = meta.description || SiteMetaDefaults.DESCRIPTION;
  const router = useRouter();
  return (
    // TODO: move to app directory layout
    <SiteWrapper navigationData={navigationData}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={`https://paste.twilio.design${router.pathname}`} />
        <meta key="description" name="description" content={pageDescription} />
      </Head>
      <PageContentWrapper>
        <PasteMDXProvider componentOverrides={meta.package ? componentOverrides : {}}>{children}</PasteMDXProvider>
      </PageContentWrapper>
    </SiteWrapper>
  );
};

export default DefaultLayout;
