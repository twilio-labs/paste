import * as Tokens from '@twilio-paste/core/design-tokens';
import {Layout} from '../../components/layout';
import {OptionsList} from '../playground/edit-pane';

export default function FontWeight() {
  const [tokens, updateTokens] = React.useState(Tokens);

  const handleChange = (bucket, key, value) => {
    updateTokens({
      ...tokens,
      [key]: value, // update the root key
      [bucket]: {...tokens[bucket], [key]: value}, // update the bucketed key
    });
  };

  return (
    <Layout>
      <OptionsList options={tokens.fontWeights} handleChange={handleChange} />
    </Layout>
  );
}
