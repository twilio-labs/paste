import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';
import {CalendarIcon} from '@twilio-paste/icons/esm/CalendarIcon';
import {DisplayPillGroup} from '../src/DisplayPillGroup';
import {DisplayPill} from '../src/DisplayPill';

export const Basic: React.FC = () => {
  return (
    <DisplayPillGroup data-testid="display-pill-group" aria-label="Your favorite sports:">
      <DisplayPill
        data-testid="display-pill-anchor"
        onFocus={() => {
          console.log('Focused Tennis!');
        }}
        onBlur={() => {
          console.log('Blurred Tennis!');
        }}
        href="https://google.com"
      >
        <CalendarIcon decorative size="sizeIcon10" />
        Tennis
      </DisplayPill>
      <DisplayPill data-testid="display-pill-standard">Football</DisplayPill>
      <DisplayPill href="/">Baseball</DisplayPill>
      <DisplayPill>Basketball</DisplayPill>
      <DisplayPill>Soccer</DisplayPill>
    </DisplayPillGroup>
  );
};

export const OverflowWrapping: React.FC = () => {
  return (
    <Box maxWidth="size40">
      <DisplayPillGroup data-testid="display-pill-group" aria-label="Your favorite sports:">
        <DisplayPill
          data-testid="display-pill-anchor"
          onFocus={() => {
            console.log('Focused Tennis!');
          }}
          onBlur={() => {
            console.log('Blurred Tennis!');
          }}
          href="https://google.com"
        >
          <CalendarIcon decorative size="sizeIcon10" />
          Tennis
        </DisplayPill>
        <DisplayPill data-testid="display-pill-standard">Football</DisplayPill>
        <DisplayPill href="/">Baseball</DisplayPill>
        <DisplayPill>Basketball</DisplayPill>
        <DisplayPill>Basketball and Volleyball and Swimming and Jumping</DisplayPill>
        <DisplayPill>Soccer</DisplayPill>
      </DisplayPillGroup>
    </Box>
  );
};

export const CustomDisplayPillGroup: React.FC = () => {
  return (
    <CustomizationProvider
      baseTheme="default"
      theme={{
        textColors: {colorTextLink: 'red'},
        fonts: {fontFamilyText: 'arial'},
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
            console.log('Focused Tennis!');
          }}
          onBlur={() => {
            console.log('Blurred Tennis!');
          }}
          href="https://google.com"
        >
          <CalendarIcon decorative size="sizeIcon10" />
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
  title: 'Components/Display Pill Group',
  component: DisplayPill,
};
