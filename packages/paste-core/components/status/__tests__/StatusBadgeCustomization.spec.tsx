import * as React from 'react';
import { render, screen } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { makeBadge, getStyles } from '../stories/StatusBadgeCustomization.stories';

const makeCustomizationWrapper = (element: string | undefined = 'STATUS_BADGE'): RenderOptions['wrapper'] =>
  function Wrapper({ children }) {
    return (
      <CustomizationProvider theme={TestTheme} elements={getStyles(element)}>
        {children}
      </CustomizationProvider>
    );
  };

describe('StatusBadge data-paste-element attribute', () => {
  it('should set the correct default element prop on StatusBadge', () => {
    render(makeBadge('ProcessSuccess'));
    expect(screen.getByTestId('ProcessSuccess_badge').getAttribute('data-paste-element')).toEqual('STATUS_BADGE');
  });
  it('should set the correct unique element prop on StatusBadge', () => {
    render(makeBadge('ProcessSuccess', 'FOO'));
    expect(screen.getByTestId('ProcessSuccess_badge').getAttribute('data-paste-element')).toEqual('FOO');
  });
});

describe('StatusBadge customization', () => {
  it('should set styles on StatusBadge', () => {
    render(makeBadge('ConnectivityAvailable'), { wrapper: makeCustomizationWrapper() });
    expect(screen.getByTestId('ConnectivityAvailable_badge')).toHaveStyleRule('cursor', 'help');
    expect(screen.getByTestId('ConnectivityAvailable_badge')).toHaveStyleRule('padding-top', '1.25rem');
  });
  it('should set styles on StatusBadge with custom element prop', () => {
    const customElement = 'FOO';
    render(makeBadge('ConnectivityAvailable', customElement), { wrapper: makeCustomizationWrapper(customElement) });
    expect(screen.getByTestId('ConnectivityAvailable_badge')).toHaveStyleRule('cursor', 'help');
    expect(screen.getByTestId('ConnectivityAvailable_badge')).toHaveStyleRule('padding-top', '1.25rem');
  });
});
