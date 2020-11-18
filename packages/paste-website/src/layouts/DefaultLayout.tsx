import * as React from 'react';
import {Helmet} from 'react-helmet';
import {SiteWrapper} from '../components/site-wrapper';
import {PasteMDXProvider} from '../components/paste-mdx-provider';
import {SiteMetaDefaults} from '../constants';

interface DefaultLayoutProps {
  children?: React.ReactElement;
  data?: {};
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

      <PasteMDXProvider>{children}</PasteMDXProvider>
    </SiteWrapper>
  );
};

export default DefaultLayout;
