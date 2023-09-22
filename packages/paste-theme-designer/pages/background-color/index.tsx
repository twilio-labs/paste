import * as React from 'react';

import { EditorWrapper } from '../../components/layout/editor-wrapper';
import { OptionsList } from '../../components/token-option';
import { TokenContext } from '../../context/TokenContext';

export default function BackgroundColor(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.backgroundColors == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="backgroundColors" options={tokens.backgroundColors} handleChange={updateToken} />
    </EditorWrapper>
  );
}
