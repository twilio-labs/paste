import * as React from 'react';
import {datadogRum} from '@datadog/browser-rum';
import Head from 'next/head';
import {Box} from '@twilio-paste/box';
import {Alert} from '@twilio-paste/alert';
import {Anchor} from '@twilio-paste/anchor';
import {useRouter} from 'next/router';

import packageJSON from '../../../paste-core/core-bundle/package.json';
import {SiteWrapper} from '../components/site-wrapper';
import {PasteMDXProvider} from '../components/paste-mdx-provider';
import {SiteMetaDefaults, DATADOG_APPLICATION_ID, DATADOG_CLIENT_TOKEN, ENVIRONMENT_CONTEXT} from '../constants';
import type {NavigationQuery} from '../context/NavigationContext';

datadogRum.init({
  applicationId: DATADOG_APPLICATION_ID,
  clientToken: DATADOG_CLIENT_TOKEN,
  site: 'datadoghq.com',
  env: ENVIRONMENT_CONTEXT,
  service: 'paste',
  // paste core version
  version: packageJSON.version,
  sampleRate: 100,
  trackInteractions: true,
});

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
