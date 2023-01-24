import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Head from 'next/head';
import type {GetStaticProps} from 'next';

import {SiteWrapper} from '../components/site-wrapper';
import {SiteMetaDefaults} from '../constants';
import {HomeHero} from '../components/homepage/HomeHero';
import {GetStarted} from '../components/homepage/GetStarted';
import {Experiment} from '../components/homepage/Experiment';
import {PopularComponentsAndPatterns} from '../components/homepage/Popular';
import {getNavigationData} from '../utils/api';
import type {NavigationQuery} from '../context/NavigationContext';

const Homepage = ({navigationData}: {navigationData: NavigationQuery}): React.ReactElement => {
  /*
   * Only load the Experiment section iframe when the user scrolls down to
   * the Popular section (the section prior)
   */
  const [showIframe, setShowIframe] = React.useState(false);
  function handleVisibilityChange(isVisible: boolean): void {
    if (!showIframe) {
      setShowIframe(isVisible);
    }
  }

  return (
    <SiteWrapper navigationData={navigationData}>
      <Head>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeHero />
      <GetStarted />
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility minTopValue={50}>
        <PopularComponentsAndPatterns />
      </VisibilitySensor>
      <Experiment showIframe={showIframe} />
    </SiteWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigationData = await getNavigationData();

  return {
    props: {
      navigationData,
    },
  };
};

export default Homepage;
