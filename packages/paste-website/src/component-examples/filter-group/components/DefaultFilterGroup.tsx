/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DetailText } from "@twilio-paste/detail-text";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { DatePicker } from "@twilio-paste/date-picker";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import { TimePicker } from "@twilio-paste/time-picker";
import { filterByDateRange, filterByRoomType, filterBySearchString } from "../helpers";
import type { FilterGroupProps } from "../types";
import { EmptyState } from "./EmptyState";
import { SampleDataGrid } from "./SampleDataGrid";

const RoomTypeFilter: React.FC = () => {
  const roomTypes = ["Group", "WebRTC Go", "Peer to Peer"];
  const [selectedRoomType, setSelectedRoomType] = React.useState("");

  return (
    <Box>
      <RadioGroup
        name="room-type"
        legend="Room type"
        helpText="Select one option"
        onChange={(value) => {
          setSelectedRoomType(value);
        }}
        value={selectedRoomType}
      >
        {roomTypes.map((roomType) => (
          <Radio key={roomType} id={roomType} value={roomType} name="room-type">
            {roomType}
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};

const ParticipantsFilter: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" columnGap="space50">
      <Box>
        <Label htmlFor="min_participants">Min. Participants</Label>
        <Input id="min_participants" name="min_participants" type="number" placeholder="ex. 1" onChange={() => null} />
      </Box>

      <Box>
        <Label htmlFor="max_participants">Max. Participants</Label>
        <Input
          id="max_participants"
          name="max_participants"
          type="number"
          placeholder="ex. 100"
          onChange={() => null}
        />
      </Box>
    </Box>
  );
};

const DateRangeFilter: React.FC = () => {
  const startDateID = useUID();
  const endDateID = useUID();
  const startTimeID = useUID();
  const endTimeID = useUID();

  return (
    <Box>
      <Heading variant="heading40" as="h2">
        Custom date range
      </Heading>
      <Paragraph>All dates/times in UTC. Usage data available up to 7 days.</Paragraph>
      <Box display="flex" flexDirection="column" rowGap="space70">
        <Box display="flex" columnGap="space50">
          <Box>
            <Label htmlFor={startDateID}>Start date</Label>
            <DatePicker id={startDateID} />
          </Box>
          <Box>
            <Label htmlFor={startTimeID}>Start time</Label>
            <TimePicker id={startTimeID} />
          </Box>
        </Box>

        <Box display="flex" columnGap="space50">
          <Box>
            <Label htmlFor={endDateID}>End date</Label>
            <DatePicker id={endDateID} />
          </Box>
          <Box>
            <Label htmlFor={endTimeID}>End time</Label>
            <TimePicker id={endTimeID} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Note: update the codesandboxes if update this
export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({
  data,
  defaultRoomType,
  defaultDateRange,
}) => {
  const [pills] = React.useState(["room-type", "participants", "date-time"]);
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

  const filterMap: { [key: string]: React.ReactElement } = {
    "room-type": <RoomTypeFilter />,
    participants: <ParticipantsFilter />,
    "date-time": <DateRangeFilter />,
  };

  return (
    <Box paddingBottom="space70">
      <Heading as="h1" variant="heading50">
        Filter
      </Heading>

      <form>
        <FormPillGroup {...pillState} aria-label="Filters:" size="large">
          {pills.map((pill) => {
            const isSelected = selectedSet.has(pill);
            return (
              <PopoverContainer baseId="popover-example" key={pill}>
                <PopoverButton variant="secondary_icon" size="icon_small">
                  <FormPill
                    {...pillState}
                    selected={isSelected}
                    onSelect={() => {
                      const newSelectedSet = new Set(selectedSet);
                      if (newSelectedSet.has(pill)) {
                        newSelectedSet.delete(pill);
                      } else {
                        newSelectedSet.add(pill);
                      }
                      // updateSelectedSet(newSelectedSet);
                    }}
                    onDismiss={
                      isSelected
                        ? () => {
                            const newSelectedSet = new Set(selectedSet);
                            newSelectedSet.delete(pill);
                            updateSelectedSet(newSelectedSet);
                          }
                        : undefined
                    }
                  >
                    {!isSelected ? <PlusIcon decorative /> : null}
                    {pill}
                  </FormPill>
                </PopoverButton>
                <Popover aria-label={pill} width="size40">
                  {filterMap[pill]}

                  <Box marginTop="space70">
                    <Button variant="primary">Apply</Button>
                  </Box>
                </Popover>
              </PopoverContainer>
            );
          })}
        </FormPillGroup>
      </form>

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
