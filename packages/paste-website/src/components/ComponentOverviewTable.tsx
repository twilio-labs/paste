import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Table, Thead, Tbody, Tr, Th, Td} from './Table';

interface ComponentOverviewTableProps {
  children?: React.ReactElement;
  componentsList?: [
    {
      node: {
        name: string;
        version: string;
        status: string;
      };
    }
  ];
}

const ComponentOverviewTable: React.FC<ComponentOverviewTableProps> = ({componentsList}) => {
  if (componentsList == null) {
    return null;
  }
  const sortedComponentsList = componentsList.sort((a, b) => a.node.status === 'backlog');

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Status</Th>
          <Th>Version</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedComponentsList.map(({node}) => {
          return (
            <Tr key={node.name}>
              <Td>
                <code>{node.name}</code>
              </Td>
              <Td>{node.status}</Td>
              <Td>{node.version === '0.0.0' ? '' : node.version}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export {ComponentOverviewTable};
