import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import React from "react";

type FilterItem = {
  label: string;
  value: string;
};

export const StatusFilter: React.FC<{
  label: string;
  setSelectedCount: (count: number | null) => void;
  items: string[] | FilterItem[];
}> = ({ label, setSelectedCount, items }) => {
  const [value, setValue] = React.useState<string>();

  return (
    <Box>
      <RadioGroup
        name="status-filter"
        value={value}
        legend={label}
        onChange={(newValue) => {
          setValue(newValue);
          setSelectedCount(1);
        }}
      >
        {(items as FilterItem[]).map((item) => (
          <Radio key={item.value} id={item.value} value={item.value} name="status-filter">
            {item.label}
          </Radio>
        ))}
      </RadioGroup>

      <Box marginTop="space70">
        <Button
          variant="link"
          onClick={() => {
            setValue(undefined);
            setSelectedCount(null);
          }}
        >
          Clear all
        </Button>
      </Box>
    </Box>
  );
};
