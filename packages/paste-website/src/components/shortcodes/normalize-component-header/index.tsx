import * as React from 'react';
import * as _ from 'lodash';
import {ComponentHeader} from '../component-header';
import type {ComponentHeaderProps} from '../component-header';
import {getNormalizedHeaderData} from '../../../utils/GraphqlUtils';
import type {GraphqlData} from '../../../utils/GraphqlUtils';

interface NormalizeComponentHeaderProps extends ComponentHeaderProps {
  data: GraphqlData;
}

export const NormalizeComponentHeader: React.FC<NormalizeComponentHeaderProps> = ({data, ...props}) => {
  const normalizedData = getNormalizedHeaderData(data);
  const {
    name,
    packageName,
    version,
    description,
    status,
    figmaStatus,
    designCommitteeStatus,
    engineerCommitteeStatus,
    categoryRoute,
    githubUrl,
    storybookUrl,
  } = _.merge(normalizedData, props);

  return (
    <ComponentHeader
      name={name}
      packageName={packageName}
      version={version}
      description={description}
      status={status}
      figmaStatus={figmaStatus}
      designCommitteeStatus={designCommitteeStatus}
      engineerCommitteeStatus={engineerCommitteeStatus}
      categoryRoute={categoryRoute}
      githubUrl={githubUrl}
      storybookUrl={storybookUrl}
    />
  );
};
