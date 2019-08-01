import * as React from 'react';
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

export const ComponentOverviewTable: React.FC<ComponentOverviewTableProps> = (
  props: ComponentOverviewTableProps
): React.ReactElement => {
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
        {props.componentsList != null &&
          props.componentsList.map(({node}) => {
            return (
              <Tr key={node.name}>
                <Td>
                  <code>{node.name}</code>
                </Td>
                <Td>{node.status}</Td>
                <Td>{node.version}</Td>
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};
