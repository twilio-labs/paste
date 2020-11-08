import * as React from 'react';
import {Theme} from '@twilio-paste/theme';

import './App.css';

const App: React.FC = ({children}) => {
  return <Theme.Provider theme="default">{children}</Theme.Provider>;
};

// eslint-disable-next-line import/no-default-export
export default App;
