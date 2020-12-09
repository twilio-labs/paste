import {Theme} from '@twilio-paste/core/theme';
import * as Tokens from '@twilio-paste/core/design-tokens';
import {TokenContext} from '../context/TokenContext';

function MyApp({Component, pageProps}) {
  const [tokens, setTokens] = React.useState(Tokens);

  const updateToken = React.useCallback((bucket, key, value) => {
    setTokens(currentTokens => ({
      ...currentTokens,
      [key]: value, // update the root key
      [bucket]: {...currentTokens[bucket], [key]: value}, // update the bucketed key}
    }));
  }, []);

  return (
    <TokenContext.Provider value={{tokens, updateToken}}>
      <Theme.Provider theme="default">
        <Component {...pageProps} />
      </Theme.Provider>
    </TokenContext.Provider>
  );
}

export default MyApp;
