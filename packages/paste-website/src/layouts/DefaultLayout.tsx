import * as React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Box} from '@twilio-paste/box';

import {SiteWrapper} from '../components/site-wrapper';
import {PasteMDXProvider} from '../components/paste-mdx-provider';
import {SiteMetaDefaults} from '../constants';
import type {NavigationQuery} from '../context/NavigationContext';

interface DefaultLayoutProps {
  children?: React.ReactElement;
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

const SiteMain: React.FC<React.PropsWithChildren<Omit<React.HTMLAttributes<HTMLElement>, 'color'>>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      element="SITE_MAIN"
      paddingTop={['space40', 'space140', 'space200']}
      paddingX={['space70', 'space200', 'space200']}
      backgroundColor="colorBackgroundBody"
      marginX="auto"
      maxWidth="size100"
      boxSizing="content-box"
      {...props}
    >
      {children}
    </Box>
  );
};

const DefaultLayout: React.FC<React.PropsWithChildren<DefaultLayoutProps>> = ({children, meta, navigationData}) => {
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
      <SiteMain>
        <PasteMDXProvider componentOverrides={meta.package ? componentOverrides : {}}>{children}</PasteMDXProvider>
      </SiteMain>
    </SiteWrapper>
  );
};

export default DefaultLayout;
