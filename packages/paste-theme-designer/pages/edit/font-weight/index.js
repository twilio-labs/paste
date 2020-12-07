import {TokenContext} from '../../../context/TokenContext';
import {EditorWrapper} from '../../../components/layout/editor-wrapper';
import {OptionsList} from '../../../components/token-option';

export default function FontWeight() {
  const {tokens, updateToken} = React.useContext(TokenContext);

  return (
    <EditorWrapper>
      <OptionsList bucket="fontWeights" options={tokens.fontWeights} handleChange={updateToken} />
    </EditorWrapper>
  );
}
