import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

export const StatusFilter: React.FC<{
  label: string;
  setSelectedCount: (count: number | null) => void;
  items: string[];
  setSelectedMoreFilters: React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>;
  selectedMoreFilters?: Record<string, string | string[]>;
}> = ({ label, setSelectedCount, items, setSelectedMoreFilters, selectedMoreFilters }) => {
  const [value, setValue] = React.useState<string>(
    selectedMoreFilters ? (selectedMoreFilters.status as string) || "" : "",
  );

  React.useEffect(() => {
    setValue(selectedMoreFilters ? (selectedMoreFilters.status as string) || "" : "");
  }, [selectedMoreFilters]);

  const uid = useUID();
  return (
    <Box>
      <RadioGroup
        name={`status-filter-${uid}`}
        value={value}
        legend={label}
        onChange={(newValue) => {
          setValue(newValue);
          setSelectedCount(1);
          setSelectedMoreFilters((prev) => {
            return {
              ...prev,
              status: newValue,
            };
          });
        }}
      >
        {items.map((item) => (
          <Radio key={item} id={item} value={item} name={`status-filter-${uid}`} checked={value === item}>
            {item}
          </Radio>
        ))}
      </RadioGroup>

      <Box marginTop="space70">
        <Button
          variant="link"
          onClick={() => {
            setValue("");
            setSelectedCount(null);
            setSelectedMoreFilters((prev) => {
              return {
                ...prev,
                status: "",
              };
            });
          }}
        >
          Clear all
        </Button>
      </Box>
    </Box>
  );
};
