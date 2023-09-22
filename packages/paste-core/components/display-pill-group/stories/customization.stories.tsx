import { CustomizationProvider } from '@twilio-paste/customization';
import { CalendarIcon } from '@twilio-paste/icons/esm/CalendarIcon';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { DisplayPill } from '../src/DisplayPill';
import { DisplayPillGroup } from '../src/DisplayPillGroup';

export const CustomDisplayPillGroup = (): JSX.Element => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={true}
      theme={{
        ...currentTheme,
        textColors: { ...currentTheme.textColors, colorTextLink: 'red' },
        fonts: { ...currentTheme.fonts, fontFamilyText: 'arial' },
      }}
      elements={{
        DISPLAY_PILL_GROUP: {
          margin: 'space40',
        },
        DISPLAY_PILL: {
          backgroundColor: 'colorBackgroundNew',
          color: 'colorText',
          padding: 'space40',
        },
      }}
    >
      <DisplayPillGroup data-testid="display-pill-group" aria-label="Your favorite sports:">
        <DisplayPill
          data-testid="display-pill-anchor"
          onFocus={() => {
            // eslint-disable-next-line no-console
            console.log('Focused Tennis!');
          }}
          onBlur={() => {
            // eslint-disable-next-line no-console
            console.log('Blurred Tennis!');
          }}
          href="https://google.com"
        >
          <CalendarIcon color="colorTextIcon" decorative size="sizeIcon10" />
          Tennis
        </DisplayPill>
        <DisplayPill data-testid="display-pill-standard">Football</DisplayPill>
        <DisplayPill href="/">Baseball</DisplayPill>
        <DisplayPill>Basketball</DisplayPill>
        <DisplayPill>Soccer</DisplayPill>
      </DisplayPillGroup>
    </CustomizationProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Display Pill Group/Customization',
  component: DisplayPill,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
