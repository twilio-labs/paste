import * as Tokens from '@twilio-paste/core/design-tokens';
import {Box} from '@twilio-paste/core/box';
import {Editor} from './edit-pane';
import {Viewer} from './preview-pane';

export default function Playground() {
  const [tokens, updateTokens] = React.useState(Tokens);

  const handleChange = (bucket, key, value) => {
    updateTokens({
      ...tokens,
      [key]: value, // update the root key
      [bucket]: {...tokens[bucket], [key]: value}, // update the bucketed key
    });
  };

  return (
    <Box display="flex">
      <Editor tokens={tokens} handleChange={handleChange} />
      <Viewer tokens={tokens} />
    </Box>
  );
}
