import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import * as React from "react";

import { SITE_MASTHEAD_HEIGHT } from "../../../constants";
import { Preview } from "../../preview";
import { TopBar } from "../../topbar";
import { ExportModal } from "./ExportModal";
import { ImportModal } from "./ImportModal";
import { TokenSelector } from "./TokenSelector";

const EditorWrapper: React.FC<React.PropsWithChildren> = (props) => {
  const [isExportOpen, setExportOpen] = React.useState(false);
  const [isImportOpen, setImportOpen] = React.useState(false);

  const openExport = (): void => setExportOpen(true);
  const closeExport = (): void => setExportOpen(false);
  const openImport = (): void => setImportOpen(true);
  const closeImport = (): void => setImportOpen(false);

  return (
    <>
      <TopBar />
      <Box display="flex" height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`} overflow="hidden">
        <Box
          maxWidth="size40"
          width="100%"
          display="flex"
          flexDirection="column"
          borderRightColor="colorBorderStrong"
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

export { EditorWrapper };
