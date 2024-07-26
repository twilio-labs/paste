/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DetailText } from "@twilio-paste/detail-text";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { FilterIcon } from "@twilio-paste/icons/esm/FilterIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { Label } from "@twilio-paste/label";
import { Option, Select } from "@twilio-paste/select";
import { Separator } from "@twilio-paste/separator";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { DATE_RANGES, ROOM_TYPES } from "../constants";
import { filterByDateRange, filterByRoomType, filterBySearchString } from "../helpers";
import type { DateRanges, FilterGroupProps, RoomTypes } from "../types";
import { EmptyState } from "./EmptyState";
import { SampleDataGrid } from "./SampleDataGrid";

// Note: update the codesandboxes if update this
export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({
  data,
  defaultRoomType,
  defaultDateRange,
}) => {
  const dateRangesId = `quality-${useUID()}`;
  const roomTypesId = `type-${useUID()}`;

  const [pills] = React.useState(["Room type", "Participants", "Date/time range"]);
  const [selectedSet, updateSelectedSet] = React.useState(new Set([""]));
  const pillState = useFormPillState();

  const [filteredTableData, setFilteredTableData] = React.useState(data);
  const [searchValue, setSearchValue] = React.useState("");
  const [filterRoomType, setFilterRoomType] = React.useState(defaultRoomType || "All");
  const [filterDateRange, setFilterDateRange] = React.useState(defaultDateRange || "all");
  const [areButtonsDisabled, setAreButtonsDisabled] = React.useState(!(defaultRoomType || defaultDateRange));

  const handleApplyFilters = React.useCallback((): void => {
    const filtered = data.filter(({ uniqueName, sid, roomType, dateCompleted }) => {
      return (
        filterBySearchString(uniqueName, sid, searchValue) &&
        filterByRoomType(roomType, filterRoomType) &&
        filterByDateRange(dateCompleted, filterDateRange)
      );
    });

    setFilteredTableData(filtered);
  }, [data, filterDateRange, filterRoomType, searchValue]);

  const handleClearAll = (): void => {
    setFilterDateRange("all");
    setFilterRoomType("All");
    setSearchValue("");
    setFilteredTableData(data);
    setAreButtonsDisabled(true);
  };

  React.useEffect(() => {
    handleApplyFilters();
  }, [handleApplyFilters]);

  React.useEffect(() => {
    setAreButtonsDisabled(filterDateRange === "all" && filterRoomType === "All");
  }, [setAreButtonsDisabled, filterDateRange, filterRoomType]);

  return (
    <Box paddingBottom="space70">
      <Heading as="h1" variant="heading50">
        Filter
      </Heading>
      <Box display="flex" alignItems="flex-end" columnGap="space50">
        <form>
          <FormPillGroup {...pillState} aria-label="Filters:" size="large">
            {pills.map((pill) => {
              const isSelected = selectedSet.has(pill);
              return (
                <FormPill
                  key={pill}
                  {...pillState}
                  selected={isSelected}
                  onSelect={() => {
                    const newSelectedSet = new Set(selectedSet);
                    if (newSelectedSet.has(pill)) {
                      newSelectedSet.delete(pill);
                    } else {
                      newSelectedSet.add(pill);
                    }
                    updateSelectedSet(newSelectedSet);
                  }}
                  onDismiss={() => null}
                >
                  {!isSelected ? <PlusIcon decorative /> : null}
                  {pill}
                </FormPill>
              );
            })}
          </FormPillGroup>
        </form>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" columnGap="space30" marginTop="space50">
        <DetailText marginTop="space0">
          {filteredTableData.length} result{filteredTableData.length !== 1 && "s"}
        </DetailText>
        <ButtonGroup>
          <Button variant="secondary" size="small">
            <ExportIcon decorative />
            Export CSV
          </Button>
          <Button variant="secondary" size="icon_small">
            <MoreIcon decorative={false} title="More options" />
          </Button>
        </ButtonGroup>
      </Box>
      <Box marginTop="space60">
        {filteredTableData.length > 0 ? (
          <SampleDataGrid data={filteredTableData} />
        ) : (
          <EmptyState handleClearAll={handleClearAll} />
        )}
      </Box>
    </Box>
  );
};
