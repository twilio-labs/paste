// import { Box } from "@twilio-paste/box";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import * as React from "react";
// import VisibilitySensor from "react-visibility-sensor";

import { Accessibility } from "../components/homepage/Accessibility";
import { CommunityOfBuilders } from "../components/homepage/CommunityOfBuilders";
import { DesignEfficiency } from "../components/homepage/DesignEfficiency";
import { ForTwilioCustomers } from "../components/homepage/ForTwilioCustomers";
import { HomeHero } from "../components/homepage/HomeHero";
import { NewSection } from "../components/homepage/NewSection";
import { Templates } from "../components/homepage/Templates";
import { Themeable } from "../components/homepage/Themeable";
import { WeDoTheThinking } from "../components/homepage/WeDoTheThinking";
import { SiteWrapper } from "../components/site-wrapper";
import { SiteMetaDefaults } from "../constants";
import { getNavigationData } from "../utils/api";
import type { Feature } from "../utils/api";

const HomePage = ({ navigationData }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  /*
   * Only load the Experiment section iframe when the user scrolls down to
   * the Popular section (the section prior)
   */
  /*
   * const [showIframe, setShowIframe] = React.useState(false);
   * function handleVisibilityChange(isVisible: boolean): void {
   *   if (!showIframe) {
   *     setShowIframe(isVisible);
   *   }
   * }
   */
  return (
    <SiteWrapper navigationData={navigationData}>
      <Head>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta key="description" name="description" content={SiteMetaDefaults.DESCRIPTION} />
      </Head>
      <HomeHero />
      <NewSection />
      <Themeable />
      <ForTwilioCustomers />
      <Templates />
      <DesignEfficiency />
      <CommunityOfBuilders />
      <WeDoTheThinking />
      <Accessibility />
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
export default HomePage;
