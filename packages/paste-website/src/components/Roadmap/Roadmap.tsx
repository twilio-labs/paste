import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Badge} from '@twilio-paste/badge';
import {Table, THead, TBody, Tr, Td, Th} from '@twilio-paste/table';
import {Stack} from '@twilio-paste/stack';
import {useUID} from '@twilio-paste/uid-library';
import {Statuses} from './constants';
import type {RoadmapProps} from './types';
import {slugify} from '../../utils/RouteUtils';
import {AnchoredHeading} from '../Heading';

const StatusBadges = {
  [Statuses.TODO]: (
    <Badge as="span" variant="info">
      {Statuses.TODO}
    </Badge>
  ),
  [Statuses.IN_PROGRESS]: (
    <Badge as="span" variant="new">
      {Statuses.IN_PROGRESS}
    </Badge>
  ),
  [Statuses.COMPLETE]: (
    <Badge as="span" variant="success">
      {Statuses.COMPLETE}
    </Badge>
  ),
  [Statuses.AT_RISK]: (
    <Badge as="span" variant="warning">
      {Statuses.AT_RISK}
    </Badge>
  ),
};

const Roadmap: React.FC<RoadmapProps> = ({data}) => {
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
              <Table>
                <THead>
                  <Tr>
                    <Th width="200px">Feature</Th>
                    <Th>Description</Th>
                    <Th textAlign="center" width="120px">
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
                        <Td>
                          <Box display="flex" justifyContent="center">
                            {StatusBadges[feature.node.data.Status]}
                          </Box>
                        </Td>
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
