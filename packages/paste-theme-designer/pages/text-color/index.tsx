import * as React from 'react';

import { EditorWrapper } from '../../components/layout/editor-wrapper';
import { OptionsList } from '../../components/token-option';
import { TokenContext } from '../../context/TokenContext';

export default function TextColor(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.textColors == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="textColors" options={tokens.textColors} handleChange={updateToken} />
    </EditorWrapper>
  );
}
