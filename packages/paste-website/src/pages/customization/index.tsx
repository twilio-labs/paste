import * as React from 'react';
import Head from 'next/head';
import type {GetStaticProps, InferGetStaticPropsType} from 'next';

import {SiteWrapper} from '../../components/site-wrapper';
import {SiteMetaDefaults} from '../../constants';
import {LandingPageHero} from '../../components/customization-landing-page/LandingPageHero';
import {LikeTwilio} from '../../components/customization-landing-page/LikeTwilio';
import {WhyPaste} from '../../components/customization-landing-page/WhyPaste';
import {ReadyToGetStarted} from '../../components/customization-landing-page/ReadyToGetStarted';
import {getNavigationData} from '../../utils/api';
import type {PastePackages} from '../../utils/api';

export interface CustomizationLandingPageProps {
  navigationData: InferGetStaticPropsType<typeof getStaticProps>;
}

const CustomizationLandingPage = ({
  navigationData,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <SiteWrapper navigationData={navigationData}>
      <Head>
        <title>{`Customization - ${SiteMetaDefaults.TITLE}`}</title>
        <link rel="canonical" href="https://paste.twilio.design/customization" />
        <meta key="description" name="description" content="" />
      </Head>
      <LandingPageHero />
      <LikeTwilio />
      <WhyPaste />
      <ReadyToGetStarted />
    </SiteWrapper>
  );
};

export const getStaticProps: GetStaticProps<{navigationData: PastePackages}> = async () => {
  const navigationData = await getNavigationData();
  return {
    props: {
      navigationData,
    },
  };
};

export default CustomizationLandingPage;
