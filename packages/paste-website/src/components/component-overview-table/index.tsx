import * as React from 'react';
import {Link} from 'gatsby';
import {Table, Thead, Tbody, Tr, Th, Td} from '../table';
import {SidebarCategoryRoutes, PackageStatus} from '../../constants';
import {getPackagePath, getNameFromPackageName} from '../../utils/RouteUtils';

interface ComponentNode {
  node: {
    name: string;
    version: string;
    status: string;
  };
}
interface ComponentOverviewTableProps {
  children?: React.ReactElement;
  categoryRoute?: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  componentsList?: [ComponentNode];
}

const sortNodeByName = (a: ComponentNode, b: ComponentNode): number => (a.node.name > b.node.name ? 1 : -1);

const ComponentOverviewTable: React.FC<ComponentOverviewTableProps> = ({categoryRoute, componentsList}) => {
  if (componentsList == null || categoryRoute == null) {
    return null;
  }

  // Sort backlog items to the bottom of the list
  const sortedBacklogList = componentsList
    .filter(({node}) => node.status === PackageStatus.BACKLOG)
    .sort(sortNodeByName);
  const sortedComponentsList = componentsList
    .filter(({node}) => node.status !== PackageStatus.BACKLOG)
    .sort(sortNodeByName);

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
                <Link to={getPackagePath(categoryRoute, node.name)}>{getNameFromPackageName(node.name)}</Link>
              </Td>
              <Td>{node.status}</Td>
              <Td>{node.version}</Td>
            </Tr>
          );
        })}
        {sortedBacklogList.map(({node}) => {
          return (
            <Tr key={node.name}>
              <Td>
                <Link to={getPackagePath(categoryRoute, node.name)}>{getNameFromPackageName(node.name)}</Link>
              </Td>
              <Td>{node.status}</Td>
              <Td />
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export {ComponentOverviewTable};
