import * as React from 'react';
import {Link} from 'gatsby';
import {Table, Thead, Tbody, Tr, Th, Td} from './Table';
import {SidebarCategoryRoutes, PackageStatus} from '../constants';
import {getPackagePath, getNameFromPackageName} from '../utils/RouteUtils';

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

function getPackageRoute(name: string, status: string): string | React.ReactNode {
  if (status === PackageStatus.BACKLOG) {
    return getNameFromPackageName(name);
  }

  return <Link to={getPackagePath(SidebarCategoryRoutes.COMPONENTS, name)}>{getNameFromPackageName(name)}</Link>;
}

const ComponentOverviewTable: React.FC<ComponentOverviewTableProps> = ({componentsList}) => {
  if (componentsList == null) {
    return null;
  }

  // Sort backlog items to the bottom of the list
  const sortedComponentsList = componentsList.sort(({node}) => (node.status === PackageStatus.BACKLOG ? 1 : -1));

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
              <Td>{getPackageRoute(node.name, node.status)}</Td>
              <Td>{node.status}</Td>
              <Td>{node.status === PackageStatus.BACKLOG ? '' : node.version}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export {ComponentOverviewTable};
