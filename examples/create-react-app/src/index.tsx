import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Theme} from '@twilio-paste/core/theme';
import {Anchor} from '@twilio-paste/core';
import {Box} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/core/button';
import {Heading} from '@twilio-paste/core/heading';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <Theme.Provider theme="default">
      <Box margin="space60">
        <Heading as="h1" variant="heading10">
          <Anchor href="https://paste.twilio.design">Start here.</Anchor>
        </Heading>
        <Button variant="primary">
          <PlusIcon decorative />
          Primary button
        </Button>
      </Box>
    </Theme.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
