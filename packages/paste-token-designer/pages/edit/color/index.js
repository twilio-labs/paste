import {TokenContext} from '../../../context/TokenContext';
import {EditorWrapper} from '../../../components/layout/editor-wrapper';
import {OptionsList} from '../../../components/token-option';

export default function Color() {
  const {tokens, updateToken} = React.useContext(TokenContext);

  return (
    <EditorWrapper>
      <OptionsList bucket="colors" options={tokens.colors} handleChange={updateToken} />
    </EditorWrapper>
  );
}
