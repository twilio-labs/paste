import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Table, THead, TBody, Tr, Td, Th} from '@twilio-paste/table';
import {Stack} from '@twilio-paste/stack';
import {useUID} from '@twilio-paste/uid-library';
import {ProcessInProgressIcon} from '@twilio-paste/icons/esm/ProcessInProgressIcon';
import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';
import {ProcessWarningIcon} from '@twilio-paste/icons/esm/ProcessWarningIcon';
import {ProcessSuccessIcon} from '@twilio-paste/icons/esm/ProcessSuccessIcon';

import {Statuses} from './constants';
import type {RoadmapProps} from './types';
import {slugify} from '../../utils/RouteUtils';
import {AnchoredHeading} from '../Heading';

const StatusIconWrapper: React.FC<React.PropsWithChildren> = ({children}) => (
  <Box display="flex" columnGap="space20" justifyContent="flex-start">
    {children}
  </Box>
);

const StatusIcons = {
  [Statuses.TODO]: (
    <StatusIconWrapper>
      <ProcessDraftIcon decorative={false} title={Statuses.TODO} color="colorTextIcon" />
      {Statuses.TODO}
    </StatusIconWrapper>
  ),
  [Statuses.IN_PROGRESS]: (
    <StatusIconWrapper>
      <ProcessInProgressIcon decorative={false} title={Statuses.IN_PROGRESS} color="colorTextIconNeutral" />
      {Statuses.IN_PROGRESS}
    </StatusIconWrapper>
  ),
  [Statuses.COMPLETE]: (
    <StatusIconWrapper>
      <ProcessSuccessIcon decorative={false} title={Statuses.COMPLETE} color="colorTextIconSuccess" />
      {Statuses.COMPLETE}
    </StatusIconWrapper>
  ),
  [Statuses.AT_RISK]: (
    <StatusIconWrapper>
      <ProcessWarningIcon decorative={false} title={Statuses.AT_RISK} color="colorTextIconWarning" />
      {Statuses.AT_RISK}
    </StatusIconWrapper>
  ),
};

const Roadmap: React.FC<React.PropsWithChildren<RoadmapProps>> = ({data}) => {
  /* eslint-disable no-underscore-dangle */
  return (
    <Box width="100%">
      <Stack orientation="vertical" spacing="space190">
        {data.map((release) => {
          const releaseSlug = slugify(release.release);

          return (
            <Box key={useUID()} id={releaseSlug} data-cy={`release-container-#${releaseSlug}`}>
              <AnchoredHeading as="h2" variant="heading20" existingSlug={releaseSlug}>
                {release.release}
              </AnchoredHeading>
              <Table scrollHorizontally>
                <THead>
                  <Tr>
                    <Th width="200px">Feature</Th>
                    <Th>Description</Th>
                    <Th textAlign="left" width="140px">
                      Status
                    </Th>
                  </Tr>
                </THead>
                <TBody>
                  {release.edges.map((feature) => {
                    return (
                      <Tr verticalAlign="top" key={useUID()}>
                        <Th>{feature.node.data.Release_feature_name}</Th>
                        <Td>
                          {feature.node.data.Public_Description__from_System_
                            ? feature.node.data.Public_Description__from_System_[0]
                            : feature.node.data.Release_Description}
                        </Td>
                        <Td>{StatusIcons[feature.node.data.Status]}</Td>
                      </Tr>
                    );
                  })}
                </TBody>
              </Table>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
  /* eslint-enable no-underscore-dangle */
};
export {Roadmap};
