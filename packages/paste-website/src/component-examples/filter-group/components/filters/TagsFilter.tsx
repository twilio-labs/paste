import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import React from "react";

export const TagsFilter: React.FC<{
  label: string;
  setSelectedCount: (count: number | null) => void;
  items: string[];
  setSelectedMoreFilters: React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>;
  selectedMoreFilters?: Record<string, string | string[]>;
}> = ({ label, setSelectedCount, items, setSelectedMoreFilters, selectedMoreFilters }) => {
  const [values, setValues] = React.useState<string[]>(
    selectedMoreFilters ? (selectedMoreFilters?.tags as string[]) || [] : [],
  );

  return (
    <Box>
      <CheckboxGroup name="recently-used-tags" legend={label}>
        {(items as string[]).map((item) => {
          return (
            <Checkbox
              key={item}
              id={item}
              value={item}
              checked={values.includes(item)}
              onChange={(e) => {
                if (e.target.checked) {
                  const updatedList = [...values, item];
                  setValues(updatedList);
                  setSelectedMoreFilters((prev) => {
                    return {
                      ...prev,
                      tags: updatedList,
                    };
                  });
                  setSelectedCount(updatedList.length);

                  return;
                }

                const updatedList = values.filter((value) => value !== item);
                setValues(updatedList);

                setSelectedMoreFilters((prev) => {
                  return {
                    ...prev,
                    tags: updatedList,
                  };
                });
                setSelectedCount(updatedList.length);
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
            setSelectedMoreFilters((prev) => {
              return {
                ...prev,
                tags: [],
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
