import * as React from 'react';
import {Theme} from '@twilio-paste/theme';

const withThemeProvider = storyFn => <Theme.Provider customBreakpoints={[]}>{storyFn()}</Theme.Provider>;

export {withThemeProvider};
