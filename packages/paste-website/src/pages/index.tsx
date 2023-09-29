import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { Experiment } from "../components/homepage/Experiment";
import { GetStarted } from "../components/homepage/GetStarted";
import { HomeHero } from "../components/homepage/HomeHero";
import { PopularComponentsAndPatterns } from "../components/homepage/Popular";
import { SiteWrapper } from "../components/site-wrapper";
import { SiteMetaDefaults } from "../constants";
import { getNavigationData } from "../utils/api";
import type { Feature } from "../utils/api";

const Homepage = ({ navigationData }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
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
        <meta key="description" name="description" content={SiteMetaDefaults.DESCRIPTION} />
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

export const getStaticProps: GetStaticProps<{ navigationData: Feature[] }> = async () => {
  const navigationData = await getNavigationData();

  return {
    props: {
      navigationData,
    },
  };
};

export default Homepage;
