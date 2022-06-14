import Head from 'next/head';
import {Anchor} from '@twilio-paste/core/anchor';
import {Heading} from '@twilio-paste/core/heading';
import {Box} from '@twilio-paste/core/box';
import {Paragraph} from '@twilio-paste/core/paragraph';
import {ListItem, UnorderedList} from '@twilio-paste/core/list';
import {Separator} from '@twilio-paste/core/separator';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Box as="main" padding="space70">
      <Head>
        <title>Paste NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as="h1" variant="heading10">
        Welcome to the the Paste Next.JS App!
      </Heading>

      <Paragraph>
        Everything you need to get started using Paste in a Production app. Start by editing{' '}
        <code>pages/index.tsx</code>
      </Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space120" />

      <Heading as="h2" variant="heading20">
        Useful links
      </Heading>

      <UnorderedList>
        <ListItem>
          <Heading as="h3" variant="heading30">
            <Anchor href="https://paste.twilio.design" showExternal>
              Paste Documentation
            </Anchor>
          </Heading>
          <Paragraph>
            Start here. Find in-depth information about using the Paste Design System to build your Next app.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Heading as="h3" variant="heading30">
            <Anchor href="https://nextjs.org/docs" showExternal>
              NextJS Documentation
            </Anchor>
          </Heading>
          <Paragraph>Find in-depth information about Next.js features and API.</Paragraph>
        </ListItem>
        <ListItem>
          <Heading as="h3" variant="heading30">
            <Anchor href="https://vercel.com/import?filter=next.js" showExternal>
              Deploy
            </Anchor>
          </Heading>
          <Paragraph>Instantly deploy your Next.js site to a public URL with Vercel.</Paragraph>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Home;
