import * as React from 'react';
import {TokenContext} from '../../context/TokenContext';
import {EditorWrapper} from '../../components/layout/editor-wrapper';
import {OptionsList} from '../../components/token-option';

export default function BorderColor(): JSX.Element {
  const {tokens, updateToken} = React.useContext(TokenContext);

  if (tokens.borderColors == null) return <></>;

  return (
    <EditorWrapper>
      <OptionsList bucket="borderColors" options={tokens.borderColors} handleChange={updateToken} />
    </EditorWrapper>
  );
}
