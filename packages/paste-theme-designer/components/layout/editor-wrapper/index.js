import {Box} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/core/button';
import {TokenSelector} from './TokenSelector';
import {TopBar} from '../../topbar';
import {Preview} from '../../preview';
import {ExportModal} from './ExportModal';
import {ImportModal} from './ImportModal';
import {SITE_MASTHEAD_HEIGHT} from '../../../constants';

const EditorWrapper = props => {
  const [isExportOpen, setExportOpen] = React.useState(false);
  const [isImportOpen, setImportOpen] = React.useState(false);

  const openExport = () => setExportOpen(true);
  const closeExport = () => setExportOpen(false);
  const openImport = () => setImportOpen(true);
  const closeImport = () => setImportOpen(false);

  return (
    <>
      <TopBar />
      <Box display="flex" height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`} overflow="hidden">
        <Box
          maxWidth="size40"
          width="100%"
          display="flex"
          flexDirection="column"
          borderRightColor="colorBorderDark"
          borderRightWidth="borderWidth10"
          borderRightStyle="solid"
        >
          <TokenSelector />
          <Box padding="space60" flexGrow={1} overflow="scroll">
            {props.children}
          </Box>
          <Box display="flex" backgroundColor="colorBackground" padding="space60">
            <Box flexGrow={1} marginRight="space60">
              <Button variant="secondary" onClick={openImport} fullWidth>
                Import
              </Button>
              <ImportModal isOpen={isImportOpen} onDismiss={closeImport} />
            </Box>
            <Box flexGrow={1}>
              <Button variant="primary" onClick={openExport} fullWidth>
                Export
              </Button>
              <ExportModal isOpen={isExportOpen} onDismiss={closeExport} />
            </Box>
          </Box>
        </Box>
        <Preview />
      </Box>
    </>
  );
};

export {EditorWrapper};
