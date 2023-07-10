import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Topbar} from '../src';

describe('Topbar', () => {
  it('renders correctly', () => {
    render(<Topbar topbarSkipLinkID="topbar">Topbar</Topbar>);
    const renderedTopbar = screen.getByText('Topbar');
    expect(renderedTopbar).toHaveStyleRule('position', 'sticky');
    expect(renderedTopbar).toHaveStyleRule('top', '0');
  });

  describe('customization', () => {
    it('Topbar - should add custom styling correctly', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            TOPBAR: {
              backgroundColor: 'colorBackgroundPrimary',
              color: 'colorTextInverse',
            },
            CUSTOM_TOPBAR: {
              backgroundColor: 'colorBackgroundPrimaryWeak',
              color: 'colorText',
            },
          }}
        >
          <Topbar topbarSkipLinkID="topbar">Topbar</Topbar>
          <Topbar topbarSkipLinkID="topbar" element="CUSTOM_TOPBAR">
            CustomTopbar
          </Topbar>
        </CustomizationProvider>
      );

      const renderedTopbar = screen.getByText('Topbar');
      expect(renderedTopbar).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
      expect(renderedTopbar).toHaveStyleRule('color', 'rgb(255, 255, 255)');

      const renderedCustomTopbar = screen.getByText('CustomTopbar');
      expect(renderedCustomTopbar).toHaveStyleRule('background-color', 'rgb(153, 205, 255)');
      expect(renderedCustomTopbar).toHaveStyleRule('color', 'rgb(18, 28, 45)');
    });
  });
});
