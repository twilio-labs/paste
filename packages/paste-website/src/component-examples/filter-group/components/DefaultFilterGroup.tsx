/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DatePicker } from "@twilio-paste/date-picker";
import { DetailText } from "@twilio-paste/detail-text";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { HelpText } from "@twilio-paste/help-text";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { usePopoverState } from "@twilio-paste/reakit-library";
import { TimePicker } from "@twilio-paste/time-picker";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

// import { filterByDateRange, filterByRoomType, filterBySearchString } from "../helpers";
import type { FilterGroupProps } from "../types";
import { EmptyState } from "./EmptyState";
import { SampleDataGrid } from "./SampleDataGrid";

const RoomTypeFilter: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (type: string, value: string) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const roomTypes = ["Group", "WebRTC Go", "Peer to Peer"];
  const [selectedRoomType, setSelectedRoomType] = React.useState<null | string>(null);
  const [showError, setShowError] = React.useState(false);

  return (
    <Box>
      <RadioGroup
        name="room-type"
        legend="Room type"
        helpText="Select one option"
        onChange={(value) => {
          setSelectedRoomType(value);
        }}
        value={selectedRoomType || ""}
        errorText={showError && selectedRoomType === null ? "Please select a room type" : undefined}
      >
        {roomTypes.map((roomType) => (
          <Radio key={roomType} id={roomType} value={roomType} name="room-type" checked={selectedRoomType === roomType}>
            {roomType}
          </Radio>
        ))}
      </RadioGroup>
      <Box marginTop="space70">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              if (selectedRoomType === null) {
                setShowError(true);
                return;
              }
              setShowError(false);
              if (onApply && popover) {
                onApply("room-type", selectedRoomType);
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {selectedRoomType !== null ? (
            <Button
              variant="link"
              onClick={() => {
                setShowError(false);
                setSelectedRoomType(null);
              }}
            >
              Clear all
            </Button>
          ) : (
            <></>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

const ParticipantsFilter: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (
    type: string,
    value: {
      min: string;
      max: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const [minValue, setMinValue] = React.useState("");
  const [maxValue, setMaxValue] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  return (
    <Box>
      <Box display="flex" alignItems="center" columnGap="space50">
        <Box>
          <Label htmlFor="min_participants">Min. Participants</Label>
          <Input
            id="min_participants"
            name="min_participants"
            type="number"
            placeholder="ex. 1"
            onChange={(e) => {
              setShowError(false);
              setMinValue(e.target.value);
            }}
            value={minValue}
          />
        </Box>

        <Box>
          <Label htmlFor="max_participants">Max. Participants</Label>
          <Input
            id="max_participants"
            name="max_participants"
            type="number"
            placeholder="ex. 100"
            onChange={(e) => {
              setShowError(false);
              setMaxValue(e.target.value);
            }}
            value={maxValue}
          />
        </Box>
      </Box>

      {showError ? (
        <HelpText id="participants_help_text" variant="error">
          Please enter both min and max value
        </HelpText>
      ) : undefined}

      <Box marginTop="space70">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              if (minValue === "" || maxValue === "") {
                setShowError(true);
                return;
              }
              setShowError(false);
              if (onApply && popover) {
                onApply("participants", {
                  min: minValue,
                  max: maxValue,
                });
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {minValue !== "" || maxValue !== "" ? (
            <Button
              variant="link"
              onClick={() => {
                setShowError(false);
                setMinValue("");
                setMaxValue("");
              }}
            >
              Clear all
            </Button>
          ) : (
            <></>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

const DateRangeFilter: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (
    type: string,
    value: {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const startDateID = useUID();
  const endDateID = useUID();
  const startTimeID = useUID();
  const endTimeID = useUID();

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [showError, setShowError] = React.useState(false);

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
            <DatePicker
              id={startDateID}
              onChange={(e) => {
                setShowError(false);
                setStartDate(e.target.value);
              }}
              value={startDate}
            />
          </Box>
          <Box>
            <Label htmlFor={startTimeID}>Start time</Label>
            <TimePicker
              id={startTimeID}
              onChange={(e) => {
                setShowError(false);
                setStartTime(e.target.value);
              }}
              value={startTime}
            />
          </Box>
        </Box>

        <Box display="flex" columnGap="space50">
          <Box>
            <Label htmlFor={endDateID}>End date</Label>
            <DatePicker
              id={endDateID}
              onChange={(e) => {
                setShowError(false);
                setEndDate(e.target.value);
              }}
              value={endDate}
            />
          </Box>
          <Box>
            <Label htmlFor={endTimeID}>End time</Label>
            <TimePicker
              id={endTimeID}
              onChange={(e) => {
                setShowError(false);
                setEndTime(e.target.value);
              }}
              value={endTime}
            />
          </Box>
        </Box>
      </Box>
      {showError ? (
        <HelpText id="date_time_help_text" variant="error">
          Please fill in all fields
        </HelpText>
      ) : null}

      <Box marginTop="space70">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              if (startDate === "" || endDate === "" || startTime === "" || endTime === "") {
                setShowError(true);
                return;
              }
              setShowError(false);
              if (onApply && popover) {
                onApply("date-time", {
                  startDate,
                  startTime,
                  endDate,
                  endTime,
                });
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {startDate !== "" || endDate !== "" || startTime !== "" || endTime !== "" ? (
            <Button
              variant="link"
              onClick={() => {
                setShowError(false);
                setStartDate("");
                setEndDate("");
                setStartTime("");
                setEndTime("");
              }}
            >
              Clear all
            </Button>
          ) : (
            <></>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

type selectedFilterProps =
  | string
  | { min: string; max: string }
  | {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    };

// Note: update the codesandboxes if update this
export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({ data }) => {
  const [pills] = React.useState(["room-type", "participants", "date-time"]);
  const [selectedFilters, setSelectedFilters] = React.useState<Record<string, selectedFilterProps>>({});
  const pillState = useFormPillState();

  const [filteredTableData, setFilteredTableData] = React.useState(data);

  function handleClearAll(): void {
    setSelectedFilters({});
    setFilteredTableData(data);
  }

  const filterMap: {
    [key: string]: React.FC<{
      onApply: (type: string, value: selectedFilterProps) => void;
      popover: ReturnType<typeof usePopoverState>;
    }>;
  } = {
    "room-type": RoomTypeFilter,
    participants: ParticipantsFilter,
    "date-time": DateRangeFilter,
  };

  return (
    <Box paddingBottom="space70">
      <Heading as="h1" variant="heading50">
        Filter
      </Heading>

      <form>
        <FormPillGroup {...pillState} aria-label="Filters:" size="large">
          {pills.map((pill) => {
            const popover = usePopoverState({ baseId: pill });
            const isSelected = pill in selectedFilters;
            const PopoverComponent = filterMap[pill];

            return (
              <PopoverContainer key={pill} state={popover}>
                <PopoverButton variant="reset" size="reset">
                  <FormPill
                    {...pillState}
                    selected={isSelected}
                    onSelect={() => {
                      // popover.show();
                    }}
                    onDismiss={
                      isSelected
                        ? () => {
                            setSelectedFilters((prev) => {
                              const { [pill]: _, ...rest } = prev;
                              return rest;
                            });
                          }
                        : undefined
                    }
                  >
                    {!isSelected ? <PlusIcon decorative /> : null}
                    {pill}
                  </FormPill>
                </PopoverButton>

                <Popover aria-label={pill} width="size40">
                  <PopoverComponent
                    onApply={(type: string, value) => {
                      setSelectedFilters((prev) => {
                        return {
                          ...prev,
                          [type]: value,
                        };
                      });
                    }}
                    popover={popover}
                  />
                </Popover>
              </PopoverContainer>
            );
          })}
        </FormPillGroup>
      </form>

      <Box display="flex" justifyContent="space-between" alignItems="center" columnGap="space30" marginTop="space50">
        <Box display="flex" columnGap="space30">
          <DetailText marginTop="space0">
            {filteredTableData.length} result{filteredTableData.length !== 1 && "s"}
          </DetailText>
          <Button variant="link" onClick={handleClearAll}>
            Clear all
          </Button>
        </Box>

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
