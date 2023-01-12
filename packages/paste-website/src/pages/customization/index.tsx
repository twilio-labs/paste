import * as React from 'react';
import Head from 'next/head';

import {SiteWrapper} from '../../components/site-wrapper';
import {SiteMetaDefaults} from '../../constants';
import {LandingPageHero} from '../../components/customization-landing-page/LandingPageHero';
import {LikeTwilio} from '../../components/customization-landing-page/LikeTwilio';
import {WhyPaste} from '../../components/customization-landing-page/WhyPaste';
import {ReadyToGetStarted} from '../../components/customization-landing-page/ReadyToGetStarted';

const CustomizationLandingPage: React.FC = (): React.ReactElement => {
  return (
    <SiteWrapper>
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

export default CustomizationLandingPage;
