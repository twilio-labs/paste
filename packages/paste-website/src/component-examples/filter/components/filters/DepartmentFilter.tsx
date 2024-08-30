import { Box } from "@twilio-paste/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { usePopoverState } from "@twilio-paste/popover";
import { useUID } from "@twilio-paste/uid-library";
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
  }, [value, popover?.visible]);

  return (
    <Box>
      <CheckboxGroup name={`department-list-${useUID()}`} legend="Department" helpText="Select one or more options">
        {departmentList.map((item) => {
          return (
            <Checkbox
              key={item}
              id={item + useUID()}
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
