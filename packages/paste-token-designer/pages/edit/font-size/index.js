import {TokenContext} from '../../../context/TokenContext';
import {EditorWrapper} from '../../../components/layout/editor-wrapper';
import {OptionsList} from '../../../components/token-option';

export default function FontSize() {
  const {tokens, updateToken} = React.useContext(TokenContext);

  return (
    <EditorWrapper>
      <OptionsList bucket="fontSizes" options={tokens.fontSizes} handleChange={updateToken} />
    </EditorWrapper>
  );
}
