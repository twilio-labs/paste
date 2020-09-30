import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Table, THead, TBody, Tr, Th, Td} from '@twilio-paste/table';
import {SiteLink} from '../SiteLink';
import {SidebarCategoryRoutes, PackageStatus} from '../../constants';
import {getPackagePath, getHumanizedNameFromPackageName} from '../../utils/RouteUtils';
import {ComponentNode} from '../../utils/types';
import {filteredComponents, sortNodeByName} from '../../utils/componentFilters';

interface ComponentOverviewTableProps {
  children?: React.ReactElement;
  categoryRoute?: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  componentsList?: [ComponentNode];
}

const ComponentOverviewTable: React.FC<ComponentOverviewTableProps> = ({categoryRoute, componentsList}) => {
  if (componentsList == null || categoryRoute == null) {
    return null;
  }

  // Sort backlog items to the bottom of the list
  const sortedBacklogList = componentsList
    .filter(({node}) => node.status === PackageStatus.BACKLOG)
    .sort(sortNodeByName);
  const sortedComponentsList = componentsList.filter(filteredComponents).sort(sortNodeByName);

  return (
    <Box marginTop="space60" marginBottom="space60">
      <Table>
        <THead>
          <Tr>
            <Th>Name</Th>
            <Th>Status</Th>
            <Th>Version</Th>
          </Tr>
        </THead>
        <TBody>
          {sortedComponentsList.map(({node}) => {
            return (
              <Tr key={node.name}>
                <Td>
                  <SiteLink to={getPackagePath(categoryRoute, node.name)}>
                    {getHumanizedNameFromPackageName(node.name)}
                  </SiteLink>
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
                  <SiteLink to={getPackagePath(categoryRoute, node.name)}>
                    {getHumanizedNameFromPackageName(node.name)}
                  </SiteLink>
                </Td>
                <Td>{node.status}</Td>
                <Td>&nbsp;</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </Box>
  );
};

export {ComponentOverviewTable};
