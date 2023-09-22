import * as React from 'react';

import { TokenContext } from '../../context/TokenContext';
import { EditorWrapper } from '../../components/layout/editor-wrapper';
import { OptionsList } from '../../components/token-option';

export default function BorderWidth(): JSX.Element {
  const { tokens, updateToken } = React.useContext(TokenContext);

  if (tokens.borderWidths == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="borderWidths" options={tokens.borderWidths} handleChange={updateToken} />
    </EditorWrapper>
  );
}
