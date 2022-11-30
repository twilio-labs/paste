import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Table, THead, TBody, Tr, Th, Td} from '@twilio-paste/table';
import {Popover, PopoverContainer, PopoverButton} from '@twilio-paste/popover';
import {Text} from '@twilio-paste/text';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';

import {AssetStatus} from '../component-status/AssetStatus';
import {PeerReviewStatus} from '../component-status/PeerReviewStatus';
import {SiteLink} from '../SiteLink';
import type {SidebarCategoryRoutes} from '../../constants';
import {getPackagePath} from '../../utils/RouteUtils';
import {sentenceCase} from '../../utils/SentenceCase';
import type {AirTableComponentNode} from '../../utils/types';

interface ComponentOverviewTableProps {
  categoryRoute?: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  componentsList?: [AirTableComponentNode];
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
              <Box display="flex" alignItems="center" justifyContent="center">
                <Text as="span" marginRight="space20">
                  Peer review
                </Text>
                <PopoverContainer baseId="peer-review-popover">
                  <PopoverButton variant="link" size="icon_small">
                    <InformationIcon decorative={false} title="More information about peer review" />
                  </PopoverButton>
                  <Popover aria-label="Peer review information">
                    A Component/Pattern has been reviewed by the relevant committee(s) and/or peer stakeholders.
                  </Popover>
                </PopoverContainer>
              </Box>
            </Th>
          </Tr>
        </THead>
        <TBody>
          {componentsList.map(({node}) => {
            const {
              Feature,
              Figma,
              Documentation,
              // eslint-disable-next-line @typescript-eslint/naming-convention
              Design_committee_review,
              // eslint-disable-next-line @typescript-eslint/naming-convention
              Engineer_committee_review,
              Code,
              status,
            } = node.data;

            return (
              <Tr key={Feature}>
                <Td>
                  {Documentation === true ? (
                    <SiteLink to={getPackagePath(categoryRoute, Feature)}>{Feature}</SiteLink>
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
                  <PeerReviewStatus designStatus={Design_committee_review} engineerStatus={Engineer_committee_review} />
                </Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </Box>
  );
};

export {ComponentOverviewTable};
