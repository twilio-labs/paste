import * as React from 'react';
import {Theme} from '@twilio-paste/core/theme';

const App: React.FC = ({children}) => {
  return <Theme.Provider theme="default">{children}</Theme.Provider>;
};

export default App;
