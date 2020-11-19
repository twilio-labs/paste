import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Box} from '@twilio-paste/box';
import {SiteWrapper} from '../components/site-wrapper';
import {SiteMetaDefaults, SITE_CONTENT_MAX_WIDTH} from '../constants';
import {GetStarted} from '../components/homepage/GetStarted';
import {PopularComponentsAndPatterns} from '../components/popular-components-and-patterns';

const Homepage: React.FC<{location: {pathname: string}}> = ({location}): React.ReactElement => {
  return (
    <SiteWrapper pathname={location.pathname}>
      <Helmet>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Box paddingX="space70" maxWidth={SITE_CONTENT_MAX_WIDTH} marginX="auto">
        <GetStarted />
        <PopularComponentsAndPatterns />
      </Box>
    </SiteWrapper>
  );
};

export default Homepage;
