import {TokenContext} from '../../../context/TokenContext';
import {EditorWrapper} from '../../../components/layout/editor-wrapper';
import {OptionsList} from '../../playground/edit-pane';

export default function BackgroundColor() {
  const {tokens, updateToken} = React.useContext(TokenContext);

  return (
    <EditorWrapper>
      <OptionsList bucket="backgroundColors" options={tokens.backgroundColors} handleChange={updateToken} />
    </EditorWrapper>
  );
}
