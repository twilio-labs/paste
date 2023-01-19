import * as React from 'react';
import Head from 'next/head';
import type {GetStaticProps} from 'next';

import {SiteWrapper} from '../../components/site-wrapper';
import {SiteMetaDefaults} from '../../constants';
import {LandingPageHero} from '../../components/customization-landing-page/LandingPageHero';
import {LikeTwilio} from '../../components/customization-landing-page/LikeTwilio';
import {WhyPaste} from '../../components/customization-landing-page/WhyPaste';
import {ReadyToGetStarted} from '../../components/customization-landing-page/ReadyToGetStarted';
import {getAllPackages} from '../../utils/api';
import type {NavigationQuery} from '../../context/NavigationContext';

const CustomizationLandingPage: React.FC<{navigationQueryData: NavigationQuery}> = ({
  navigationQueryData,
}): React.ReactElement => {
  return (
    <SiteWrapper navigationQueryData={navigationQueryData}>
      <Head>
        <title>{`Customization - ${SiteMetaDefaults.TITLE}`}</title>
        <link rel="canonical" href="https://paste.twilio.design/customization" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingPageHero />
      <LikeTwilio />
      <WhyPaste />
      <ReadyToGetStarted />
    </SiteWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPackages = await getAllPackages();
  return {
    props: {
      navigationQueryData: allPackages,
    },
  };
};

export default CustomizationLandingPage;
