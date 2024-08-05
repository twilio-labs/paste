import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { Separator } from "@twilio-paste/separator";
import {
  SidePanel,
  SidePanelBody,
  SidePanelContainer,
  SidePanelHeader,
  SidePanelPushContentWrapper,
} from "@twilio-paste/side-panel";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

import { STATIC_TABLE_DATA } from "../../constants";
import type { FilterListType } from "../../types";
import { DefaultFilterGroup } from "../DefaultFilterGroup";
import { HostNameFilter } from "./HostNameFilter";
import { StatusFilter } from "./StatusFilter";

const conditionalFilterList: FilterListType = ["room-type", "date-range"];

const moreFilters = [
  {
    label: "Host names",
    type: "combobox",
    items: [
      "Luffy Lawson",
      "Brooks Benson",
      "Tony Tony Turner",
      "Sanji Stevens",
      "Robin Rye",
      "Nami Nelson",
      "Tony Tony Turner",
    ],
    isOpen: true,
  },
  {
    label: "Status",
    type: "radio",
    items: [
      { label: "Active", value: "active" },
      { label: "Completed", value: "completed" },
      { label: "Scheduled", value: "scheduled" },
      { label: "Cancelled", value: "cancelled" },
    ],
  },
  // {
  //   label: "Tags",
  //   type: "checkbox",
  //   items: [
  //     { label: "Training", value: "training" },
  //     { label: "Meeting", value: "meeting" },
  //     { label: "SUpport", value: "support" },
  //     { label: "External", value: "external" },
  //     { label: "Urgent", value: "urgent" },
  //     { label: "Recurring", value: "recurring" },
  //   ],
  // },
];

const disclosureMap: {
  [key: string]: React.FC<{
    label: string;
    items:
      | string[]
      | {
          label: string;
          value: string;
        }[];
    setSelectedCount: (count: number | null) => void;
  }>;
} = {
  combobox: HostNameFilter,
  radio: StatusFilter,
};

const DisclosureFilter = ({
  filter,
}: {
  filter: {
    label: string;
    type: string;
    items: string[] | { label: string; value: string }[];
    isOpen?: boolean;
  };
}): React.ReactElement => {
  const [selectedCount, setSelectedCount] = React.useState<null | number>(null);

  const FilterComponent = disclosureMap[filter.type];
  return (
    <Box
      width="100%"
      borderRadius="borderRadius20"
      borderWidth="borderWidth10"
      borderColor="colorBorderWeaker"
      borderStyle="solid"
    >
      <Disclosure visible={filter.isOpen}>
        <DisclosureHeading as="h2" variant="heading50">
          <Box display="flex" justifyContent="space-between" alignItems="center" columnGap="space20" width="100%">
            <Box as="span">{filter.label}</Box>

            {selectedCount ? (
              <Badge as="span" variant="neutral_counter" size="small">
                Selected {selectedCount}
              </Badge>
            ) : null}
          </Box>
        </DisclosureHeading>
        <DisclosureContent>
          <FilterComponent
            key={filter.label}
            label={filter.label}
            items={filter.items}
            setSelectedCount={setSelectedCount}
          />
        </DisclosureContent>
      </Disclosure>
    </Box>
  );
};

export const MoreFilters: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const sidePanelId = useUID();

  return (
    <SidePanelContainer id={sidePanelId} isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanel label="">
        <SidePanelHeader>
          <Heading as="h3" variant="heading30">
            More filters
          </Heading>
        </SidePanelHeader>
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <SidePanelBody>
          <Box
            display="flex"
            flexDirection="column"
            rowGap="space40"
            marginTop="space70"
            marginBottom="space70"
            width="100%"
          >
            {moreFilters.map((filter) => {
              return <DisclosureFilter key={filter.label} filter={filter} />;
            })}
          </Box>
        </SidePanelBody>
        {/* <SidePanelFooter>Footer content goes here.</SidePanelFooter> */}
      </SidePanel>

      <SidePanelPushContentWrapper>
        <Box paddingRight={isOpen ? "space70" : "space0"}>
          <DefaultFilterGroup
            data={STATIC_TABLE_DATA}
            filterList={conditionalFilterList}
            onMoreFiltersClick={() => {
              setIsOpen((e) => !e);
            }}
          />
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  );
};
