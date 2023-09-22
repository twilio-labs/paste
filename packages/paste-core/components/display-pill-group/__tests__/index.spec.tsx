import * as React from 'react';
import { render } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { DisplayPillGroup, DisplayPill } from '../src';
import { Basic } from '../stories/index.stories';
import { CustomDisplayPillGroup } from '../stories/customization.stories';

describe('DisplayPillGroup', () => {
  // Verifies that the correct aria attributes and semantics are met
  describe('Rendered shape', () => {
    it('should render correctly', () => {
      const { getByTestId, getByText } = render(<Basic />);
      expect(getByText('Tennis')).toBeDefined();

      const group = getByTestId('display-pill-group');
      expect(group.getAttribute('aria-label')).toBe('Your favorite sports:');
      expect(group.tagName).toBe('UL');

      const pillLink = getByTestId('display-pill-anchor');
      expect(pillLink.getAttribute('href')).toBe('https://google.com');
      expect(pillLink.getAttribute('rel')).toBe('noreferrer noopener');
      expect(pillLink.getAttribute('target')).toBe('_blank');
      expect(pillLink.tagName).toBe('A');

      const pillStandard = getByTestId('display-pill-standard');
      expect(pillStandard.tagName).toBe('DIV');
    });
  });

  // Verifies the component is fully customizable
  describe('Customization', () => {
    it('should set an element data attribute for DisplayPillGroup & DisplayPill', () => {
      const { getByTestId } = render(<Basic />);
      const group = getByTestId('display-pill-group');
      expect(group.getAttribute('data-paste-element')).toEqual('DISPLAY_PILL_GROUP');

      const pillLink = getByTestId('display-pill-anchor');
      expect(pillLink.getAttribute('data-paste-element')).toEqual('DISPLAY_PILL');

      const pillStandard = getByTestId('display-pill-standard');
      expect(pillStandard.getAttribute('data-paste-element')).toEqual('DISPLAY_PILL');
    });

    it('should set a custom element data attribute for DisplayPillGroup & DisplayPill', () => {
      const { getByTestId } = render(
        <DisplayPillGroup element="CUSTOM_GROUP" data-testid="group" aria-label="Your favorite sports:">
          <DisplayPill element="CUSTOM_PILL" data-testid="pill">
            A
          </DisplayPill>
        </DisplayPillGroup>,
      );
      const group = getByTestId('group');
      expect(group.getAttribute('data-paste-element')).toEqual('CUSTOM_GROUP');
      const pill = getByTestId('pill');
      expect(pill.getAttribute('data-paste-element')).toEqual('CUSTOM_PILL');
    });

    it('should add custom styles to DisplayPillGroup & DisplayPill', () => {
      const { getByTestId } = render(<CustomDisplayPillGroup />);

      const group = getByTestId('display-pill-group');
      expect(group).toHaveStyleRule('margin', '0.75rem');

      const pillLink = getByTestId('display-pill-anchor');
      expect(pillLink).toHaveStyleRule('background-color', 'rgb(245, 240, 252)');

      const pillStandard = getByTestId('display-pill-standard');
      expect(pillStandard).toHaveStyleRule('background-color', 'rgb(245, 240, 252)');
    });
    it('should add custom styles to custom element DisplayPillGroup & DisplayPill', () => {
      const { getByTestId } = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOM_PILL_GROUP: {
              margin: 'space40',
            },
            CUSTOM_PILL: {
              backgroundColor: 'colorBackgroundNew',
              color: 'colorText',
              padding: 'space40',
            },
          }}
        >
          <DisplayPillGroup
            element="CUSTOM_PILL_GROUP"
            data-testid="display-pill-group"
            aria-label="Your favorite sports:"
          >
            <DisplayPill element="CUSTOM_PILL" data-testid="display-pill-anchor" href="https://google.com">
              Tennis
            </DisplayPill>
            <DisplayPill element="CUSTOM_PILL" data-testid="display-pill-standard">
              Football
            </DisplayPill>
          </DisplayPillGroup>
        </CustomizationProvider>,
      );
      const group = getByTestId('display-pill-group');
      expect(group).toHaveStyleRule('margin', '0.75rem');

      const pillLink = getByTestId('display-pill-anchor');
      expect(pillLink).toHaveStyleRule('background-color', 'rgb(231, 220, 250)');

      const pillStandard = getByTestId('display-pill-standard');
      expect(pillStandard).toHaveStyleRule('background-color', 'rgb(231, 220, 250)');
    });
  });
});
