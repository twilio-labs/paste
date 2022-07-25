import * as React from 'react';
import merge from 'deepmerge';
import {GenericHeader} from '../generic-header';
import type {GenericHeaderProps} from '../generic-header';
import {getNormalizedHeaderData} from '../../../utils/GraphqlUtils';
import type {GraphqlData} from '../../../utils/GraphqlUtils';

interface NormalizedComponentHeaderProps extends GenericHeaderProps {
  data: GraphqlData;
}

export const NormalizedComponentHeader: React.FC<NormalizedComponentHeaderProps> = ({data, ...props}) => {
  const normalizedData = getNormalizedHeaderData(data);
  const {
    name,
    packageName,
    version,
    description,
    packageStatus,
    figmaStatus,
    designCommitteeReview,
    engineerCommitteeReview,
    categoryRoute,
    githubUrl,
    storybookUrl,
  } = merge(normalizedData, props);

  return (
    <GenericHeader
      name={name}
      packageName={packageName}
      version={version}
      description={description}
      packageStatus={packageStatus}
      figmaStatus={figmaStatus}
      designCommitteeReview={designCommitteeReview}
      engineerCommitteeReview={engineerCommitteeReview}
      categoryRoute={categoryRoute}
      githubUrl={githubUrl}
      storybookUrl={storybookUrl}
    />
  );
};
