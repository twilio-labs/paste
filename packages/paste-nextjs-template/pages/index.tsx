import Head from 'next/head';
import {Heading} from '@twilio-paste/core/heading';
import {Box} from '@twilio-paste/core/box';
import {Paragraph} from '@twilio-paste/core/paragraph';
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
    </Box>
  );
};

export default Home;
