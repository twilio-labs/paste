import Head from 'next/head';
import * as Tokens from '@twilio-paste/core/design-tokens';
import {Box} from '@twilio-paste/core/box';
import {TokenSelector} from './TokenSelector';
import {TopBar} from '../../topbar';
import {PreviewPane} from '../../../pages/playground/preview-pane';

const EditorWrapper = props => {
  const tokens = Tokens;

  return (
    <>
      <Head>
        <title>Token Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Box display="flex" height="100vh" overflow="hidden">
        <Box maxWidth="size40" width="100%" overflow="scroll">
          <TokenSelector />
          <Box padding="space60">{props.children}</Box>
        </Box>
        <PreviewPane tokens={tokens} />
      </Box>
    </>
  );
};

export {EditorWrapper};
