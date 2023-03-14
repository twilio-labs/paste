import * as React from 'react';
import {Theme} from '@twilio-paste/core/theme';
import type {ThemeVariants} from '@twilio-paste/theme';
import {StylingGlobals, css} from '@twilio-paste/core/styling-library';

interface SelectedThemeContextProps {
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const SelectedThemeContext = React.createContext<SelectedThemeContextProps>({} as SelectedThemeContextProps);

const App: React.FC<React.PropsWithChildren> = ({children}) => {
  const [selectedTheme, setSelectedTheme] = React.useState('twilio');
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

export default App;
