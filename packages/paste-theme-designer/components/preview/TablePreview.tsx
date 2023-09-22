import * as React from 'react';
import { Table, THead, TBody, Td, Tr, Th } from '@twilio-paste/core/table';

const TablePreview = (): JSX.Element => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Name</Th>
          <Th>Message</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>First and Last Name</Td>
          <Td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio, sit amet fermentum
            mauris lobortis a.
          </Td>
        </Tr>
        <Tr>
          <Td>First and Last Name</Td>
          <Td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio, sit amet fermentum
            mauris lobortis a.
          </Td>
        </Tr>
        <Tr>
          <Td>First and Last Name</Td>
          <Td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio, sit amet fermentum
            mauris lobortis a.
          </Td>
        </Tr>
        <Tr>
          <Td>First and Last Name</Td>
          <Td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio, sit amet fermentum
            mauris lobortis a.
          </Td>
        </Tr>
      </TBody>
    </Table>
  );
};

export { TablePreview };
