import * as Tokens from '@twilio-paste/core/design-tokens';
import {EditorWrapper} from '../../../components/layout/editor-wrapper';
import {OptionsList} from '../../playground/edit-pane';

export default function TextColor() {
  const [tokens, updateTokens] = React.useState(Tokens);

  const handleChange = (bucket, key, value) => {
    updateTokens({
      ...tokens,
      [key]: value, // update the root key
      [bucket]: {...tokens[bucket], [key]: value}, // update the bucketed key
    });
  };

  return (
    <EditorWrapper>
      <OptionsList options={tokens.textColors} handleChange={handleChange} />
    </EditorWrapper>
  );
}
