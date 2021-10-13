import * as React from 'react';
import {TokenContext} from '../../context/TokenContext';
import {EditorWrapper} from '../../components/layout/editor-wrapper';
import {OptionsList} from '../../components/token-option';

export default function Radii(): JSX.Element {
  const {tokens, updateToken} = React.useContext(TokenContext);

  if (tokens.radii == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="radii" options={tokens.radii} handleChange={updateToken} />
    </EditorWrapper>
  );
}
