import Head from 'next/head';
import {Box} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/core/button';
import {TokenSelector} from './TokenSelector';
import {TopBar} from '../../topbar';
import PreviewPane from '../../../pages/playground/preview-pane';
import {SITE_MASTHEAD_HEIGHT} from '../../../constants';

const EditorWrapper = props => {
  return (
    <>
      <Head>
        <title>Token Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Box display="flex" height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`} overflow="hidden">
        <Box maxWidth="size40" width="100%" display="flex" flexDirection="column">
          <TokenSelector />
          <Box padding="space60" flexGrow={1} overflow="scroll">
            {props.children}
          </Box>
          <Box backgroundColor="colorBackground" padding="space60">
            <Button variant="primary" onClick={() => alert('TODO')} fullWidth>
              Export
            </Button>
          </Box>
        </Box>
        <PreviewPane />
      </Box>
    </>
  );
};

export {EditorWrapper};
