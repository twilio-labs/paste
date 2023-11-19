import { Box } from "@twilio-paste/core/box";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { useUIDSeed } from "@twilio-paste/core/uid-library";
import type { GenericTokensShape } from "@twilio-paste/design-tokens/types/GenericTokensShape";
import * as React from "react";

import type { TokenContextProps } from "../../context/TokenContext";

type TextTokenInputProps = {
  bucket: keyof GenericTokensShape;
  tokenName: string;
  tokenValue: string;
  onChange: TokenContextProps["updateToken"];
};

// TODO
export const TextTokenInput: React.FC<React.PropsWithChildren<TextTokenInputProps>> = ({
  bucket,
  tokenName,
  tokenValue,
  onChange,
}) => {
  const seed = useUIDSeed();

  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{tokenName}:</Label>
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
