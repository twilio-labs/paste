import * as React from 'react';

import {LikeTwilio} from '../src/components/customization-landing-page/LikeTwilio';
import {ReadyToGetStarted} from '../src/components/customization-landing-page/ReadyToGetStarted';
import {DarkModeContext} from '../src/context/DarkModeContext';
import {useDarkMode} from '../src/hooks/useDarkMode';

export const LikeTwilioStory: React.FC = () => {
  const [theme, toggleMode, componentMounted] = useDarkMode();
  return (
    <DarkModeContext.Provider value={{theme, toggleMode, componentMounted}}>
      <LikeTwilio />
    </DarkModeContext.Provider>
  );
};

export const ReadyToGetStartedStory: React.FC = () => {
  return <ReadyToGetStarted />;
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Website/CustomizationLandingPage',
};
