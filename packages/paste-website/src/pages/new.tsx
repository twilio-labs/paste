import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Box} from '@twilio-paste/core/box';
import {SiteWrapper} from '../components/site-wrapper-new';
import {SiteMetaDefaults} from '../constants';
import {GetStarted} from '../components/homepage/GetStarted';
import {PopularComponentsAndPatterns} from '../components/popular-components-and-patterns';

const Homepage: React.FC<{}> = (): React.ReactElement => {
  return (
    <SiteWrapper>
      <Helmet>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
        {/* needed for proper responsive but only on homepage */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Box>
        <GetStarted />
        <PopularComponentsAndPatterns />
      </Box>
    </SiteWrapper>
  );
};

export default Homepage;
