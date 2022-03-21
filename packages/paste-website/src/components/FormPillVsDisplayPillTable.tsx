import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Table, Tr, THead, Th, TBody, Td} from '@twilio-paste/table';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';

export interface FormPillVsDisplayPillTableProps {
  children: NonNullable<React.ReactNode>;
}

const FormPillVsDisplayPillTable: React.FC<FormPillVsDisplayPillTableProps> = () => {
  return (
    <Box marginBottom="space70">
      <Table isResponsive>
        <THead>
          <Tr>
            <Th>&nbsp;</Th>
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
            <Td>Provides keyboard navigation</Td>
            <Td>&nbsp;</Td>
            <Td>
              <Box display="flex" justifyContent="center">
                <SuccessIcon color="colorTextIconSuccess" decorative={false} title="Supported feature" />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>Pills are selectable</Td>
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
            <Td>Pills can be removed</Td>
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

export {FormPillVsDisplayPillTable};
