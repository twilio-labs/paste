import { Box } from "@twilio-paste/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { usePopoverState } from "@twilio-paste/popover";
import React from "react";

import { FilterAction } from "../FilterAction";

const departmentList = ["Operations", "Marketing", "IT", "R&D", "Finance", "Customer Support"];

export const DepartmentFilter: React.FC = ({
  onApply,
  popover,
  value,
}: {
  onApply?: (type: string, value: Item[]) => void;
  popover?: ReturnType<typeof usePopoverState>;
  value?: Item[];
}) => {
  const [values, setValues] = React.useState<string[]>([]);

  React.useEffect(() => {
    setValues((value as string[]) || []);
  }, [value]);
  return (
    <Box>
      <CheckboxGroup name="department-list" legend="Department" helpText="Select one or more options">
        {departmentList.map((item) => {
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
                  return;
                }

                const updatedList = values.filter((v) => v !== item);
                setValues(updatedList);
              }}
            >
              {item}
            </Checkbox>
          );
        })}
      </CheckboxGroup>

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
            if (values.length === 0) {
              popover.hide();
              return;
            }

            onApply("department", values);
            popover.hide();
          }
        }}
        onClear={
          values.length > 0
            ? () => {
                setValues([]);
              }
            : null
        }
      />
    </Box>
  );
};
