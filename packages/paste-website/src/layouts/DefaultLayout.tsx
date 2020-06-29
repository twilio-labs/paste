import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {SiteWrapper} from '../components/site-wrapper';
import {PasteMDXProvider} from '../components/paste-mdx-provider';
import {SiteMetaDefaults} from '../constants';
import {Callout, CalloutTitle} from '../components/callout';

interface DefaultLayoutProps {
  children?: React.ReactElement;
  data?: {};
  location: {
    pathname: string;
  };
  pageContext: {
    frontmatter: {
      title: string;
      description: string;
    };
  };
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children, data, pageContext, location}) => {
  const pageTitle = pageContext.frontmatter.title
    ? `${pageContext.frontmatter.title} - ${SiteMetaDefaults.TITLE}`
    : SiteMetaDefaults.TITLE;
  const pageDescription = pageContext.frontmatter.description || SiteMetaDefaults.DESCRIPTION;

  const gitHubPagesPath = 'https://github.com/twilio-labs/paste/tree/master/packages/paste-website/src/pages';
  // @ts-ignore
  const absolutePath = data.mdx.fileAbsolutePath;
  const filename = absolutePath.substring(absolutePath.lastIndexOf('/') + 1);
  const gitHubURL = `${gitHubPagesPath + location.pathname}/${filename}`;

  const gitHubIssueUrl = `https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title=${pageContext.frontmatter.title.replace(
    /\s+/g,
    '%20'
  )}`;

  return (
    <SiteWrapper>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="canonical" href={`https://paste.twilio.design${location.pathname}`} />
        <meta name="description" content={pageDescription} />
      </Helmet>

      <PasteMDXProvider>{children}</PasteMDXProvider>
      <Box marginTop="space90" maxWidth="size80">
        <Callout>
          <CalloutTitle as="h4">See a mistake or have some feedback?</CalloutTitle>
          <Stack orientation="vertical" spacing="space40">
            <Anchor href={gitHubURL}>Edit this page on GitHub</Anchor>
            <Anchor href="https://github.com/twilio-labs/paste/discussions/new">
              Have a question? Submit a Github Discussion
            </Anchor>
            <Anchor href={gitHubIssueUrl}>Find a bug? Submit a Github Issue</Anchor>
          </Stack>
        </Callout>
      </Box>
    </SiteWrapper>
  );
};

export default DefaultLayout;
