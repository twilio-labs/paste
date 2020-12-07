import * as Tokens from '@twilio-paste/core/design-tokens';
import {Box} from '@twilio-paste/core/box';
import {EditPane} from './edit-pane';
import {PreviewPane} from './preview-pane';

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
    <Box display="flex" height="100vh" overflow="hidden">
      <EditPane tokens={tokens} handleChange={handleChange} />
      <PreviewPane tokens={tokens} />
    </Box>
  );
}
