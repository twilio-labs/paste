import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";
import React from "react";

export const FilterAction: React.FC<{
  onApply: () => void;
  onClear: () => void;
  clearCondition?: boolean;
  onRemove?: () => void;
}> = ({ onApply, onClear, onRemove, clearCondition }) => {
  return (
    <Box marginTop="space70" display="flex" alignItems="center" justifyContent="space-between">
      <ButtonGroup>
        <Button variant="primary" onClick={onApply}>
          Apply
        </Button>
        {clearCondition ? (
          <Button variant="link" onClick={onClear}>
            Clear all
          </Button>
        ) : (
          <></>
        )}
      </ButtonGroup>
      {onRemove ? (
        <Button variant="link" onClick={onRemove}>
          <DeleteIcon decorative />
          <span>Remove filter</span>
        </Button>
      ) : null}
    </Box>
  );
};
