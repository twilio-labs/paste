import * as React from "react";
import type { JSX } from "react";

import { EditorWrapper } from "../../components/layout/editor-wrapper";
import { OptionsList } from "../../components/token-option";
import { TokenContext } from "../../context/TokenContext";

export default function Spacing(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.spacings == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="spacings" options={tokens.spacings} handleChange={updateToken} />
    </EditorWrapper>
  );
}
