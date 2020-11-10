import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Box} from '@twilio-paste/core/box';
import {SiteWrapper} from '../components/site-wrapper-new';
import {SiteMetaDefaults} from '../constants';

const Homepage: React.FC<{}> = (): React.ReactElement => {
  return (
    <SiteWrapper>
      <Helmet>
        <title>{SiteMetaDefaults.TITLE}</title>
        <link rel="canonical" href="https://paste.twilio.design" />
        <meta name="description" content={SiteMetaDefaults.DESCRIPTION} />
      </Helmet>
      <Box maxWidth="size120">test</Box>
    </SiteWrapper>
  );
};

export default Homepage;
