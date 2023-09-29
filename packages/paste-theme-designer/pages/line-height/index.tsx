import * as React from "react";

import { EditorWrapper } from "../../components/layout/editor-wrapper";
import { OptionsList } from "../../components/token-option";
import { TokenContext } from "../../context/TokenContext";

export default function LineHeight(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.lineHeights == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="lineHeights" options={tokens.lineHeights} handleChange={updateToken} />
    </EditorWrapper>
  );
}
