import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import React from "react";

export const TagsFilter: React.FC<{
  label: string;
  setSelectedCount: (count: number | null) => void;
  items: string[];
}> = ({ label, setSelectedCount, items }) => {
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <Box>
      <CheckboxGroup name="recently-used-tags" legend={label}>
        {(items as string[]).slice(0, 4).map((item) => {
          return (
            <Checkbox
              key={item}
              id={item}
              value={item}
              checked={values.includes(item)}
              onChange={(e) => {
                setValues((prevValues) => {
                  if (e.target.checked) {
                    return [...prevValues, item];
                  }
                  return prevValues.filter((value) => value !== item);
                });
              }}
            >
              {item}
            </Checkbox>
          );
        })}
      </CheckboxGroup>

      <Box marginTop="space70">
        <Button
          variant="link"
          onClick={() => {
            setValues([]);
            setSelectedCount(null);
          }}
        >
          Clear all
        </Button>
      </Box>
    </Box>
  );
};
