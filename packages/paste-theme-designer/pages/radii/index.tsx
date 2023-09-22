import * as React from "react";

import { EditorWrapper } from "../../components/layout/editor-wrapper";
import { OptionsList } from "../../components/token-option";
import { TokenContext } from "../../context/TokenContext";

export default function Radii(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.radii == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="radii" options={tokens.radii} handleChange={updateToken} />
    </EditorWrapper>
  );
}
