import * as React from 'react';

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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        {props.componentsList != null &&
          props.componentsList.map(({node}) => {
            return (
              <tr key={node.name}>
                <td>
                  <code>{node.name}</code>
                </td>
                <td>{node.status}</td>
                <td>{node.version}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
