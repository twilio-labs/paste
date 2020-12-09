import {TokenContext} from '../../../context/TokenContext';
import {EditorWrapper} from '../../../components/layout/editor-wrapper';
import {OptionsList} from '../../../components/token-option';

export default function TextColor() {
  const {tokens, updateToken} = React.useContext(TokenContext);

  return (
    <EditorWrapper>
      <OptionsList bucket="textColors" options={tokens.textColors} handleChange={updateToken} />
    </EditorWrapper>
  );
}
