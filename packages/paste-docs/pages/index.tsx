import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import VisibilitySensor from "react-visibility-sensor";
import { SiteWrapper } from "../components/site-wrapper";
import { SiteMetaDefaults } from "../constants/index.ts";
import { HomeHero } from "../components/homepage/HomeHero.tsx";
import { GetStarted } from "../components/homepage/GetStarted";
import { Experiment } from "../components/homepage/Experiment";
import { PopularComponentsAndPatterns } from "../components/homepage/Popular";

export default function Home() {
  const router = useRouter();
  // Only load the Experiment section iframe when the user scrolls down to
  // the Popular section (the section prior)
  const [showIframe, setShowIframe] = useState(false);
  function handleVisibilityChange(isVisible: boolean): void {
    if (!showIframe) {
      setShowIframe(isVisible);
    }
  }

  return (
    <SiteWrapper pathname={router.pathname}>
      <Head>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HomeHero />
        <GetStarted />
        <VisibilitySensor
          onChange={handleVisibilityChange}
          partialVisibility
          minTopValue={50}
        >
          <PopularComponentsAndPatterns />
        </VisibilitySensor>
        <Experiment showIframe={showIframe} />
      </main>
    </SiteWrapper>
  );
}
/*
const Homepage: React.FC<{ location: { pathname: string } }> = ({
  location,
}): React.ReactElement => {
  // Only load the Experiment section iframe when the user scrolls down to
  // the Popular section (the section prior)
  const [showIframe, setShowIframe] = React.useState(false);
  function handleVisibilityChange(isVisible: boolean): void {
    if (!showIframe) {
      setShowIframe(isVisible);
    }
  }

  return (
    <SiteWrapper pathname={location.pathname}>
      <Helmet></Helmet>

      <GetStarted />
      <VisibilitySensor
        onChange={handleVisibilityChange}
        partialVisibility
        minTopValue={50}
      >
        <PopularComponentsAndPatterns />
      </VisibilitySensor>
      <Experiment showIframe={showIframe} />
    </SiteWrapper>
  );
};

export default Homepage;
*/
