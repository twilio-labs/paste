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
}: {
  onApply?: (type: string, value: Item[]) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const [values, setValues] = React.useState<string[]>([]);
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

                const updatedList = values.filter((value) => value !== item);
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
        clearCondition={values.length > 0}
        onClear={() => {
          setValues([]);
        }}
      />
    </Box>
  );
};
