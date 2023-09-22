import * as React from 'react';

import { TokenContext } from '../../context/TokenContext';
import { EditorWrapper } from '../../components/layout/editor-wrapper';
import { OptionsList } from '../../components/token-option';

export default function TextColor(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.textColors == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="textColors" options={tokens.textColors} handleChange={updateToken} />
    </EditorWrapper>
  );
}
