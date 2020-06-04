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
    <SiteWrapper>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="canonical" href={`https://paste.twilio.design${location.pathname}`} />
        <meta name="description" content={pageDescription} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <PasteMDXProvider>{children}</PasteMDXProvider>
    </SiteWrapper>
  );
};

export default DefaultLayout;
