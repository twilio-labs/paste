import * as React from 'react';
import Head from 'next/head';
import {Box} from '@twilio-paste/box';
import {useRouter} from 'next/router';

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
      <Box
        paddingTop={['space40', 'space40', 'space100']}
        paddingX={['space70', 'space200', 'space200']}
        backgroundColor="colorBackgroundBody"
        marginX="auto"
        maxWidth="size100"
        boxSizing="content-box"
      >
        <PasteMDXProvider componentOverrides={meta.package ? componentOverrides : {}}>{children}</PasteMDXProvider>
      </Box>
    </SiteWrapper>
  );
};

export default DefaultLayout;
