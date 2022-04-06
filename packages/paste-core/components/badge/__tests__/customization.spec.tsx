import * as React from 'react';
import {render, screen} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {makeBadge, getStyles} from '../stories/customization.stories';

const makeCustomizationWrapper = (element: string | undefined = 'BADGE'): RenderOptions['wrapper'] =>
  function Wrapper({children}) {
    return (
      <CustomizationProvider theme={TestTheme} elements={getStyles(element)}>
        {children}
      </CustomizationProvider>
    );
  };

describe('Badge data-paste-element attribute', () => {
  it('should set the correct default element prop on Badge', () => {
    render(makeBadge('neutral'));
    expect(screen.getByTestId('neutral_badge').getAttribute('data-paste-element')).toEqual('BADGE');
  });
  it('should set the correct unique element prop on Badge', () => {
    render(makeBadge('neutral', 'FOO'));
    expect(screen.getByTestId('neutral_badge').getAttribute('data-paste-element')).toEqual('FOO');
  });
});

describe('Badge customization', () => {
  it('should set styles on Badge', () => {
    render(makeBadge('error'), {wrapper: makeCustomizationWrapper()});
    expect(screen.getByTestId('error_badge')).toHaveStyleRule('cursor', 'help');
    expect(screen.getByTestId('error_badge')).toHaveStyleRule('padding-top', '1.25rem');
  });
  it('should set styles on Badge with custom element prop', () => {
    const customElement = 'FOO';
    render(makeBadge('new', customElement), {wrapper: makeCustomizationWrapper(customElement)});
    expect(screen.getByTestId('new_badge')).toHaveStyleRule('cursor', 'help');
    expect(screen.getByTestId('new_badge')).toHaveStyleRule('padding-top', '1.75rem');
  });
});
