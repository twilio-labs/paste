import * as React from 'react';
import {TokenContext} from '../../context/TokenContext';
import {EditorWrapper} from '../../components/layout/editor-wrapper';
import {OptionsList} from '../../components/token-option';

export default function Font(): JSX.Element {
  const {tokens, updateToken} = React.useContext(TokenContext);

  if (tokens.fonts == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="fonts" options={tokens.fonts} handleChange={updateToken} />
    </EditorWrapper>
  );
}
