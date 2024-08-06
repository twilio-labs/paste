import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { Separator } from "@twilio-paste/separator";
import {
  SidePanel,
  SidePanelBody,
  SidePanelContainer,
  SidePanelFooter,
  SidePanelHeader,
  SidePanelPushContentWrapper,
} from "@twilio-paste/side-panel";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

import { EXTENDED_STATIC_TABLE_DATA } from "../../constants";
import type { FilterListType } from "../../types";
import { DefaultFilterGroup } from "../DefaultFilterGroup";
import { HostNameFilter } from "./HostNameFilter";
import { StatusFilter } from "./StatusFilter";
import { TagsFilter } from "./TagsFilter";

const moreFilterDefaultList: FilterListType = ["roomType", "participants", "dateCompleted"];

const moreFiltersSideModal = [
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
    items: ["Active", "Completed", "Scheduled", "Cancelled"],
  },
  {
    label: "Tags",
    type: "checkbox",
    items: ["Training", "Meeting", "Support", "External", "Urgent", "Recurring"],
  },
];

const disclosureMap: {
  [key: string]: React.FC<{
    label: string;
    items: string[];
    setSelectedCount: (count: number | null) => void;
    setSelectedMoreFilters: React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>;
    selectedMoreFilters?: Record<string, string | string[]>;
  }>;
} = {
  combobox: HostNameFilter,
  radio: StatusFilter,
  checkbox: TagsFilter,
};

const DisclosureFilter = ({
  filter,
  setSelectedMoreFilters,
  selectedMoreFilters,
}: {
  filter: {
    label: string;
    type: string;
    items: string[];
    isOpen?: boolean;
  };
  setSelectedMoreFilters: React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>;
  selectedMoreFilters: Record<string, string | string[]>;
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
            setSelectedMoreFilters={setSelectedMoreFilters}
            selectedMoreFilters={selectedMoreFilters}
          />
        </DisclosureContent>
      </Disclosure>
    </Box>
  );
};

export const MoreFilters: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [tempSelectedMoreFilters, setTempSelectedMoreFilters] = React.useState<Record<string, string | string[]>>({});
  const [selectedMoreFilters, setSelectedMoreFilters] = React.useState<Record<string, string | string[]>>({});
  const sidePanelId = useUID();

  React.useEffect(() => {
    if (!isOpen) {
      setTempSelectedMoreFilters(selectedMoreFilters);
    }
  }, [isOpen]);

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
            {moreFiltersSideModal.map((filter) => {
              return (
                <DisclosureFilter
                  key={filter.label}
                  filter={filter}
                  selectedMoreFilters={tempSelectedMoreFilters}
                  setSelectedMoreFilters={setTempSelectedMoreFilters}
                />
              );
            })}
          </Box>
        </SidePanelBody>
        <SidePanelFooter>
          <ButtonGroup>
            <Button
              variant="primary"
              onClick={() => {
                setSelectedMoreFilters(tempSelectedMoreFilters);
                setIsOpen(false);
              }}
            >
              Apply
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const temp = {};
                setTempSelectedMoreFilters(temp);
              }}
            >
              Clear all
            </Button>
          </ButtonGroup>
        </SidePanelFooter>
      </SidePanel>

      <SidePanelPushContentWrapper>
        <Box paddingRight={isOpen ? "space70" : "space0"}>
          <DefaultFilterGroup
            data={EXTENDED_STATIC_TABLE_DATA}
            filterList={moreFilterDefaultList}
            onMoreFiltersClick={() => {
              setIsOpen((e) => !e);
            }}
            extendedTable
            selectedMoreFilters={selectedMoreFilters}
          />
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  );
};
