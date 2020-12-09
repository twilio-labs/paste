import {Box} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/core/button';
import {TokenSelector} from './TokenSelector';
import {TopBar} from '../../topbar';
import {Preview} from '../../preview';
import {SITE_MASTHEAD_HEIGHT} from '../../../constants';

const EditorWrapper = props => {
  return (
    <>
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
        <Preview />
      </Box>
    </>
  );
};

export {EditorWrapper};
