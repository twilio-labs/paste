import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { DetailText } from '../src';

describe('DetailText', () => {
  it('should render', () => {
    render(<DetailText>test</DetailText>);
    expect(screen.getByText('test')).toBeDefined();
  });

  it('should render the element based on the as prop', () => {
    render(<DetailText as="li">test</DetailText>);
    expect(screen.getByRole('listitem')).toBeDefined();
  });

  describe('Customization', () => {
    it('should set default data paste element attribute', () => {
      render(<DetailText data-testid="detail-text">test</DetailText>);

      expect(screen.getByTestId('detail-text').dataset.pasteElement).toEqual('DETAIL_TEXT');
    });

    it('should set custom data paste element attribute', () => {
      render(
        <DetailText data-testid="detail-text" element="MY_DETAIL_TEXT">
          test
        </DetailText>,
      );

      expect(screen.getByTestId('detail-text').dataset.pasteElement).toEqual('MY_DETAIL_TEXT');
    });

    it('should add custom styles', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            DETAIL_TEXT: {
              color: 'colorTextNew',
            },
          }}
        >
          <DetailText data-testid="detail-text">test</DetailText>
        </CustomizationProvider>,
      );
      expect(screen.getByTestId('detail-text')).toHaveStyleRule('color', 'rgb(109, 46, 209)');
    });

    it('should add custom styles with a custom data paste element attribute', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            MY_DETAIL_TEXT: {
              color: 'colorTextNew',
            },
          }}
        >
          <DetailText data-testid="detail-text" element="MY_DETAIL_TEXT">
            test
          </DetailText>
        </CustomizationProvider>,
      );

      expect(screen.getByTestId('detail-text')).toHaveStyleRule('color', 'rgb(109, 46, 209)');
    });
  });
});
