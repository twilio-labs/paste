import { Box } from "@twilio-paste/box";
import { SuccessIcon } from "@twilio-paste/icons/esm/SuccessIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/table";
import type { JSX } from "react";

const FormPillVsDisplayPillTable = (): JSX.Element => {
  return (
    <Box marginBottom="space70">
      <Table scrollHorizontally>
        <THead>
          <Tr>
            <Th>
              <ScreenReaderOnly>Functionality</ScreenReaderOnly>
            </Th>
            <Th textAlign="center">Display Pill</Th>
            <Th textAlign="center">Form Pill</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Used to edit data in a form</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Uses Listbox, Option semantic</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Provides advanced keyboard navigation</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Pills can be selected</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Pills can perform an action</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Pills can be dismissed</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Used to view data</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
            <Td>&nbsp;</Td>
          </Tr>
          <Tr>
            <Td>Uses List, List Item semantic</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
            <Td>&nbsp;</Td>
          </Tr>
          <Tr>
            <Td>Pills can link to a page</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
            <Td>&nbsp;</Td>
          </Tr>
        </TBody>
      </Table>
    </Box>
  );
};

const DisplayPillVsFormPillTable = (): JSX.Element => {
  return (
    <Box marginBottom="space70">
      <Table scrollHorizontally>
        <THead>
          <Tr>
            <Th>
              <ScreenReaderOnly>Functionality</ScreenReaderOnly>
            </Th>
            <Th textAlign="center">Display Pill</Th>
            <Th textAlign="center">Form Pill</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Used to view data</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
            <Td>&nbsp;</Td>
          </Tr>
          <Tr>
            <Td>Uses List, List Item semantic</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
            <Td>&nbsp;</Td>
          </Tr>
          <Tr>
            <Td>Pills can link to a page</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
            <Td>&nbsp;</Td>
          </Tr>
          <Tr>
            <Td>Used to edit data in a form</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Uses Listbox, Option semantic</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Provides advanced keyboard navigation</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Pills can be selected</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Pills can perform an action</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Pills can be dismissed</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
        </TBody>
      </Table>
    </Box>
  );
};

export { FormPillVsDisplayPillTable, DisplayPillVsFormPillTable };
