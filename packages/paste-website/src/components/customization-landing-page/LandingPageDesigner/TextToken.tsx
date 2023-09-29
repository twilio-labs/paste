import { Box } from "@twilio-paste/box";
import type { GenericTokensShape } from "@twilio-paste/design-tokens/types/GenericTokensShape";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { useUIDSeed } from "@twilio-paste/uid-library";
import * as React from "react";

import type { DesignerContextProps } from "./DesignerContext";

type TextTokenInputProps = {
  bucket: keyof GenericTokensShape;
  labelText: string;
  tokenName: string;
  tokenValue: string;
  onChange: DesignerContextProps["updateToken"];
};

export const TextTokenInput: React.FC<React.PropsWithChildren<TextTokenInputProps>> = ({
  bucket,
  labelText,
  tokenName,
  tokenValue,
  onChange,
}) => {
  const seed = useUIDSeed();

  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{labelText}</Label>
      <Input
        id={seed(tokenName)}
        type="text"
        value={tokenValue}
        onChange={(event) => {
          const { value } = event.target;
          // TODO validate
          if (value === "") return;
          if (onChange != null) {
            onChange(bucket, tokenName, event.target.value);
          }
        }}
      />
    </Box>
  );
};
