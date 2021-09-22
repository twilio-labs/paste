import * as React from 'react';
import {TokenContext} from '../../context/TokenContext';
import {EditorWrapper} from '../../components/layout/editor-wrapper';
import {OptionsList} from '../../components/token-option';

export default function FontWeight(): JSX.Element {
  const {tokens, updateToken} = React.useContext(TokenContext);

  if (tokens.fontWeights == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="fontWeights" options={tokens.fontWeights} handleChange={updateToken} />
    </EditorWrapper>
  );
}
