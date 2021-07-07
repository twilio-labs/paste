import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import type {ThemeVariants} from '@twilio-paste/theme';
import {StylingGlobals, css} from '@twilio-paste/styling-library';

interface SelectedThemeContextProps {
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const SelectedThemeContext = React.createContext<SelectedThemeContextProps>({} as SelectedThemeContextProps);

const App: React.FC = ({children}) => {
  const [selectedTheme, setSelectedTheme] = React.useState('default');
  return (
    <SelectedThemeContext.Provider value={{selectedTheme, setSelectedTheme}}>
      <Theme.Provider theme={selectedTheme as ThemeVariants}>
        <StylingGlobals
          styles={css({
            body: {
              overflow: 'hidden',
            },
          })}
        />
        {children}
      </Theme.Provider>
    </SelectedThemeContext.Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
