import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Box} from '@twilio-paste/box';
import {Alert} from '@twilio-paste/alert';
import {Anchor} from '@twilio-paste/anchor';
import {SiteWrapper} from '../components/site-wrapper';
import {PasteMDXProvider} from '../components/paste-mdx-provider';
import {SiteMetaDefaults} from '../constants';

interface DefaultLayoutProps {
  children?: React.ReactElement;
  data?: unknown;
  location: {
    pathname: string;
  };
  pageContext: {
    frontmatter: {
      title?: string;
      description?: string;
    };
  };
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children, pageContext, location}) => {
  const pageTitle = pageContext.frontmatter.title
    ? `${pageContext.frontmatter.title} - ${SiteMetaDefaults.TITLE}`
    : SiteMetaDefaults.TITLE;
  const pageDescription = pageContext.frontmatter.description || SiteMetaDefaults.DESCRIPTION;
  return (
    <SiteWrapper pathname={location.pathname}>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="canonical" href={`https://paste.twilio.design${location.pathname}`} />
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Box display={['block', 'block', 'none']} marginBottom="space60">
        <Alert variant="neutral">
          The responsive layout is in early preview. Please{' '}
          <Anchor showExternal href="https://github.com/twilio-labs/paste/issues">
            report any bugs.
          </Anchor>
        </Alert>
      </Box>
      <Box
        paddingTop={['space40', 'space40', 'space100']}
        paddingX={['space50', 'space70', 'space200']}
        backgroundColor="colorBackgroundBody"
      >
        <PasteMDXProvider>{children}</PasteMDXProvider>
      </Box>
    </SiteWrapper>
  );
};

export default DefaultLayout;
