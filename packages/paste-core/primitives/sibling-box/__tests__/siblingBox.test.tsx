import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { SiblingBox } from '../src';

describe('SiblingBox render', () => {
  it('should render', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <SiblingBox
          data-testid="sibling-box"
          width="sizeSquare50"
          _hover={{
            backgroundColor: 'colorBackgroundBody',
          }}
          _hoverSibling={{
            paddingLeft: 'space50',
          }}
          _activeSibling={{
            color: 'colorText',
          }}
          _invalidSibling={{
            backgroundColor: 'colorBackground',
          }}
          _disabledSibling={{
            borderColor: 'colorBorder',
          }}
          _focusSibling={{
            margin: 'space10',
          }}
          _checkedSibling={{
            padding: 'space10',
          }}
          _boxChild={{
            marginBottom: 'space30',
          }}
          _checkedSiblingAndBoxChild={{
            paddingBottom: 'space30',
          }}
          _checkedAndDisabledSibling={{
            width: 'sizeIcon50',
          }}
          _checkedAndActiveSibling={{
            height: 'sizeSquare110',
          }}
          _checkedAndFocusSibling={{
            minHeight: 'size110',
          }}
          _checkedAndInvalidSibling={{
            marginRight: 'space80',
          }}
          _checkedAndHoverSibling={{
            borderRadius: 'borderRadius10',
          }}
        >
          child
        </SiblingBox>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('width', '1.75rem');
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('color', 'rgb(18, 28, 45)', {
      target: 'input[type=checkbox]:active+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('padding', '0.125rem', {
      target: 'input[type=checkbox][aria-checked=mixed]+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('height', '2.5rem', {
      target: 'input[type=checkbox][aria-checked=mixed]:active+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('padding-bottom', '0.5rem', {
      target: 'input[type=checkbox][aria-checked=mixed]+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('width', '1.75rem', {
      target: 'input[type=checkbox][aria-checked=mixed]:disabled+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('min-height', '70.5rem', {
      target: 'input[type=checkbox][aria-checked=mixed]:focus+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('border-radius', '2px', {
      target: 'input[type=checkbox][aria-checked=mixed]:hover:not(:disabled)+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('margin-right', '1.75rem', {
      target: 'input[type=checkbox][aria-invalid=true]:checked+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('border-color', 'rgb(136, 145, 170)', {
      target: 'input[type=checkbox]:disabled+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('margin', '0.125rem', {
      target: 'input[type=checkbox]:focus+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('padding-left', '1rem', {
      target: 'input[type=checkbox]:hover:not(:disabled):not(:checked)+label',
    });
    expect(screen.getByTestId('sibling-box')).toHaveStyleRule('background-color', 'rgb(244, 244, 246)', {
      target: 'input[type=checkbox][aria-invalid=true]+label',
    });
  });

  describe('HTML attributes', () => {
    it('should set a default element data attribute', (): void => {
      render(<SiblingBox>siblingbox</SiblingBox>);
      expect(screen.getByText('siblingbox').getAttribute('data-paste-element')).toEqual('SIBLING_BOX');
    });
    it('should set a custom element data attribute', (): void => {
      render(<SiblingBox element="foo">siblingbox</SiblingBox>);
      expect(screen.getByText('siblingbox').getAttribute('data-paste-element')).toEqual('foo');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to a component provided as element styles on the customization provider', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ SIBLING_BOX: { color: 'colorTextWeak', textDecoration: 'underline' } }}
        >
          <SiblingBox data-testid="customized-sibling-box">Custom Box</SiblingBox>
        </CustomizationProvider>,
      );
      const renderedSiblingBox = screen.getByTestId('customized-sibling-box');
      expect(renderedSiblingBox).toHaveStyleRule('text-decoration', 'underline');
      expect(renderedSiblingBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add styles when given a custom name', (): void => {
      render(
        <CustomizationProvider baseTheme="default" elements={{ CUSTOM_SIBLING_BOX: { padding: 'space20' } }}>
          <SiblingBox element="CUSTOM_SIBLING_BOX" data-testid="customizable-sibling-box">
            Custom Box
          </SiblingBox>
        </CustomizationProvider>,
      );
      const renderedSiblingBox = screen.getByTestId('customizable-sibling-box');
      expect(renderedSiblingBox).toHaveStyleRule('padding', '0.25rem');
    });
  });
});
