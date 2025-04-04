import * as React from "react";
import type { JSX } from "react";

import { EditorWrapper } from "../../components/layout/editor-wrapper";
import { OptionsList } from "../../components/token-option";
import { TokenContext } from "../../context/TokenContext";

export default function ZIndex(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.zIndices == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="zIndices" options={tokens.zIndices} handleChange={updateToken} />
    </EditorWrapper>
  );
}
