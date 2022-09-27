import * as React from 'react';
import {Theme} from '@twilio-paste/core/theme';

const App: React.FC<React.PropsWithChildren> = ({children}) => {
  return <Theme.Provider theme="default">{children}</Theme.Provider>;
};

App.displayName = 'App';

export default App;
