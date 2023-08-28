import * as React from 'react';

import {TokenContext} from '../../context/TokenContext';
import {EditorWrapper} from '../../components/layout/editor-wrapper';
import {OptionsList} from '../../components/token-option';

export default function FontSize(): JSX.Element {
  const {tokens, updateToken} = React.useContext(TokenContext);

  if (tokens.fontSizes == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="fontSizes" options={tokens.fontSizes} handleChange={updateToken} />
    </EditorWrapper>
  );
}
