import {TokenContext} from '../../../context/TokenContext';
import {EditorWrapper} from '../../../components/layout/editor-wrapper';
import {OptionsList} from '../../playground/edit-pane';

export default function Radii() {
  const {tokens, updateToken} = React.useContext(TokenContext);

  return (
    <EditorWrapper>
      <OptionsList bucket="radii" options={tokens.radii} handleChange={updateToken} />
    </EditorWrapper>
  );
}
