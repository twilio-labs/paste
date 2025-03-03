import * as React from "react";
import type { JSX } from "react";

import { EditorWrapper } from "../../components/layout/editor-wrapper";
import { OptionsList } from "../../components/token-option";
import { TokenContext } from "../../context/TokenContext";

export default function BoxShadow(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.boxShadows == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="boxShadows" options={tokens.boxShadows} handleChange={updateToken} />
    </EditorWrapper>
  );
}
