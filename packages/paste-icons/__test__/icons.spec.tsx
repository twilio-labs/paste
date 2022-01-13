import * as React from 'react';

import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {AgentIcon} from '../src/AgentIcon';

describe('Icons', () => {
  describe('HTML attributes', () => {
    it('should have the default element name', () => {
      const {container} = render(<AgentIcon decorative />);
      expect(container.querySelector('[data-paste-element="ICON"]')).toBeInTheDocument();
    });
    it('should have a custom element name', () => {
      const {container} = render(<AgentIcon element="CUSTOM_ICON" decorative />);
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toBeInTheDocument();
    });
  });

  describe('Customization', () => {
    it('should apply custom styles to customizaed icons', () => {
      const {container} = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            ICON: {borderRadius: 'borderRadius20', backgroundColor: 'colorBackgroundSuccess'},
            CUSTOM_ICON: {borderRadius: 'borderRadius20', backgroundColor: 'colorBackgroundDestructive'},
          }}
        >
          <>
            <AgentIcon decorative />
            <AgentIcon element="CUSTOM_ICON" decorative />
          </>
        </CustomizationProvider>
      );
      expect(container.querySelector('[data-paste-element="ICON"]')).toHaveStyleRule('border-radius', '4px');
      expect(container.querySelector('[data-paste-element="ICON"]')).toHaveStyleRule(
        'background-color',
        'rgb(20,176,83)'
      );
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toHaveStyleRule('border-radius', '4px');
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toHaveStyleRule(
        'background-color',
        'rgb(214,31,31)'
      );
    });
  });
});
