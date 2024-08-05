import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import React from "react";

export const StatusFilter: React.FC<{
  label: string;
  setSelectedCount: (count: number | null) => void;
  items: string[];
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
        {items.map((item) => (
          <Radio key={item} id={item} value={item} name="status-filter">
            {item}
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
