import { render } from '@testing-library/react';
import { Box } from '@twilio-paste/box';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { InlineCode } from '../src';

describe('InlineCode', () => {
  it('should render text in a <code> tag', () => {
    const { getByTestId } = render(
      <Box data-testid="inline-code">
        <InlineCode>sid</InlineCode>
      </Box>,
    );
    expect(getByTestId('inline-code').querySelector('code')).not.toBeNull();
  });

  it('should have a default element attribute', () => {
    const { getByText } = render(<InlineCode>sid</InlineCode>);
    expect(getByText('sid').getAttribute('data-paste-element')).toEqual('INLINE_CODE');
  });
  it('should have a custom element attribute when set', () => {
    const { getByText } = render(<InlineCode element="MY_INLINE_CODE">sid</InlineCode>);
    expect(getByText('sid').getAttribute('data-paste-element')).toEqual('MY_INLINE_CODE');
  });
  it('should set custom styles using the default element attribute', () => {
    const { getByText } = render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          INLINE_CODE: {
            borderWidth: 'borderWidth20',
          },
        }}
      >
        <InlineCode>sid</InlineCode>
      </CustomizationProvider>,
    );
    expect(getByText('sid')).toHaveStyleRule('border-width', '2px');
  });
  it('should set custom styles using a custom element attribute', () => {
    const { getByText } = render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          MY_INLINE_CODE: {
            borderWidth: 'borderWidth20',
          },
        }}
      >
        <InlineCode element="MY_INLINE_CODE">sid</InlineCode>
      </CustomizationProvider>,
    );
    expect(getByText('sid')).toHaveStyleRule('border-width', '2px');
  });
});
