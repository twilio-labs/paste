import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Table, THead, TBody, Tr, Th, Td} from '@twilio-paste/table';
import {Text} from '@twilio-paste/text';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';

import {AssetStatus} from '../component-status/AssetStatus';
import {PeerReviewStatus} from '../component-status/PeerReviewStatus';
import {SiteLink} from '../SiteLink';
import type {SidebarCategoryRoutes} from '../../constants';
import {getPackagePath} from '../../utils/RouteUtils';
import {sentenceCase} from '../../utils/SentenceCase';
import type {Feature} from '../../utils/api';

interface ComponentOverviewTableProps {
  categoryRoute?: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  componentsList?: [Feature];
}

const ComponentOverviewTable: React.FC<React.PropsWithChildren<ComponentOverviewTableProps>> = ({
  categoryRoute,
  componentsList,
}) => {
  if (componentsList == null || categoryRoute == null) {
    return null;
  }

  return (
    <Box marginTop="space60" marginBottom="space60">
      <Table scrollHorizontally data-cy="overview-table">
        <THead>
          <Tr>
            <Th width="150px">Name</Th>
            <Th textAlign="center" width="150px">
              Status
            </Th>
            <Th textAlign="center" width="150px">
              Code ready
            </Th>
            <Th textAlign="center" width="170px">
              Design assets
            </Th>
            <Th textAlign="center" width="150px">
              Documentation
            </Th>
            <Th textAlign="center" width="170px">
              Peer review
            </Th>
          </Tr>
        </THead>
        <TBody>
          {componentsList.map(
            ({
              Feature,
              Figma,
              Documentation,
              'Design committee review': Design_committee_review,
              'Engineer committee review': Engineer_committee_review,
              Code,
              status,
            }) => {
              return (
                <Tr key={Feature}>
                  <Td>
                    {Documentation === true ? (
                      <SiteLink href={getPackagePath(categoryRoute, Feature)}>{Feature}</SiteLink>
                    ) : (
                      <Text as="span">{Feature}</Text>
                    )}
                  </Td>
                  <Td textAlign="center">{sentenceCase(status)}</Td>
                  <Td textAlign="center">
                    <AssetStatus label="Code done" status={Code} />
                  </Td>
                  <Td textAlign="center">
                    <AssetStatus label="Design assets done" status={Figma} />
                  </Td>
                  <Td textAlign="center">
                    {Documentation === true ? (
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <SuccessIcon
                          display="inline-block"
                          decorative={false}
                          title="Documentation done"
                          color="colorTextSuccess"
                          size="sizeIcon30"
                        />
                      </Box>
                    ) : (
                      <Text as="span" color="colorTextWeak">
                        Pending
                      </Text>
                    )}
                  </Td>
                  <Td textAlign="center">
                    <PeerReviewStatus
                      designStatus={Design_committee_review}
                      engineerStatus={Engineer_committee_review}
                    />
                  </Td>
                </Tr>
              );
            }
          )}
        </TBody>
      </Table>
    </Box>
  );
};

export {ComponentOverviewTable};
