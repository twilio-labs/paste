import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Theme} from '@twilio-paste/theme';
import {Box, Heading, Button} from '@twilio-paste/core';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <Theme.Provider theme="default">
      <Box margin="space60">
        <Heading as="h1" variant="heading10">
          Start here.
        </Heading>
        <Button variant="primary">Primary button</Button>
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
