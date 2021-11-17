import * as React from 'react';

import {render, screen, fireEvent} from '@testing-library/react';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {TextArea} from '../src';
import {CustomizedTextarea} from '../stories/textarea.stories';

const NOOP = (): void => {};

const initialProps = {
  id: 'textarea',
  name: 'textarea',
  onChange: NOOP,
  placeholder: 'placeholder',
};

describe('TextArea render', () => {
  it('should render', () => {
    render(<TextArea {...initialProps} />);
    expect(screen.getByRole('textbox')).not.toBeNull();
  });

  it('should render as readOnly', () => {
    render(<TextArea {...initialProps} readOnly />);
    expect(screen.getByRole('textbox').getAttribute('aria-readOnly')).toBeTruthy();
  });

  it('should render as invalid', () => {
    render(<TextArea {...initialProps} hasError />);
    expect(screen.getByRole('textbox').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should render as disabled', () => {
    render(<TextArea {...initialProps} disabled />);
    expect(screen.getByRole('textbox').getAttribute('disabled')).toEqual('');
    expect(screen.getByRole('textbox')).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', {
      target: ':disabled',
    });
  });

  it('should render an id', () => {
    render(<TextArea {...initialProps} />);
    expect(screen.getByRole('textbox').id).toBe('textarea');
  });

  it('should render a name', () => {
    render(<TextArea {...initialProps} />);
    expect(screen.getByRole('textbox').getAttribute('name')).toEqual('textarea');
  });

  it('should render a placeholder', () => {
    render(<TextArea {...initialProps} />);
    expect(screen.getByRole('textbox').getAttribute('placeholder')).toEqual('placeholder');
  });

  it('should render a prefix', () => {
    render(<TextArea {...initialProps} insertBefore={<div>$10.99</div>} />);
    expect(screen.getByText('$10.99')).toBeDefined();
  });

  it('should render a suffix', () => {
    render(<TextArea {...initialProps} insertAfter={<div>$10.99</div>} />);
    expect(screen.getByText('$10.99')).toBeDefined();
  });

  it('should not render size, width and height attributes on the textarea element', () => {
    // @ts-expect-error testing that these don't get added if you ignore types
    render(<TextArea {...initialProps} height="200" size="2000" width="20" />);
    expect(screen.getByRole('textbox').getAttribute('height')).toBeNull();
    expect(screen.getByRole('textbox').getAttribute('size')).toBeNull();
    expect(screen.getByRole('textbox').getAttribute('width')).toBeNull();
  });
});

describe('Textarea event handlers', () => {
  it('Should call the appropriate event handlers', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const onFocusMock: jest.Mock = jest.fn();
    const onBlurMock: jest.Mock = jest.fn();

    const {getByTestId} = render(
      <TextArea
        data-testid="textarea"
        id="textarea"
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      />
    );

    fireEvent.focus(getByTestId('textarea'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
    fireEvent.blur(getByTestId('textarea'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});

describe.skip('Textarea customization', () => {
  it('should set the dom attributes', () => {
    const {container} = render(<CustomizedTextarea />);
    expect(container.querySelector('[data-paste-element="TEXTAREA"]')).toBeInTheDocument();
    expect(screen.getByTestId('default-textarea').getAttribute('data-paste-element')).toEqual('TEXTAREA_ELEMENT');
    expect(container.querySelector('[data-paste-element="TEXTAREA_PREFIX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="TEXTAREA_SUFFIX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="NEW_TEXTAREA"]')).toBeInTheDocument();
    expect(screen.getByTestId('custom-default-textarea').getAttribute('data-paste-element')).toEqual(
      'NEW_TEXTAREA_ELEMENT'
    );
    expect(container.querySelector('[data-paste-element="NEW_TEXTAREA_PREFIX"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="NEW_TEXTAREA_SUFFIX"]')).toBeInTheDocument();
  });

  it('should set custom CSS for customized textarea', () => {
    const {container} = render(<CustomizedTextarea />);
    const renderedTextArea = container.querySelector('[data-paste-element="TEXTAREA"]');
    const renderedTextAreaElement = container.querySelector('[data-paste-element="TEXTAREA_ELEMENT"]');
    const renderedTextAreaPrefix = container.querySelector('[data-paste-element="TEXTAREA_PREFIX"]');
    const renderedTextAreaSuffix = container.querySelector('[data-paste-element="TEXTAREA_SUFFIX"]');
    expect(renderedTextArea).toHaveStyleRule('background-color', 'rgb(235,244,255)');
    expect(renderedTextAreaElement).toHaveStyleRule('color', 'rgb(3,11,93)');
    expect(renderedTextAreaPrefix).toHaveStyleRule('padding', '1rem');
    expect(renderedTextAreaSuffix).toHaveStyleRule('border-left-color', 'rgb(2,99,224)');
  });

  it('should set custom CSS for customized textarea variant', () => {
    const {container} = render(<CustomizedTextarea />);
    const renderedTextArea = container.querySelector('[data-paste-element="TEXTAREA_VARIANT"]');
    const renderedTextAreaElement = container.querySelector('[data-paste-element="TEXTAREA_VARIANT_ELEMENT"]');
    const renderedTextAreaPrefix = container.querySelector('[data-paste-element="TEXTAREA_VARIANT_PREFIX"]');
    const renderedTextAreaSuffix = container.querySelector('[data-paste-element="TEXTAREA_VARIANT_SUFFIX"]');
    expect(renderedTextArea).toHaveStyleRule('background-color', 'rgb(254,236,236)');
    expect(renderedTextAreaElement).toHaveStyleRule('background-color', 'rgb(254,236,236)');
    expect(renderedTextAreaPrefix).toHaveStyleRule('background-color', 'rgb(254,236,236)');
    expect(renderedTextAreaSuffix).toHaveStyleRule('background-color', 'rgb(254,236,236)');
  });

  it('should set custom CSS for custom textarea', () => {
    const {container} = render(<CustomizedTextarea />);
    const renderedTextArea = container.querySelector('[data-paste-element="NEW_TEXTAREA"]');
    const renderedTextAreaElement = container.querySelector('[data-paste-element="NEW_TEXTAREA_ELEMENT"]');
    const renderedTextAreaPrefix = container.querySelector('[data-paste-element="NEW_TEXTAREA_PREFIX"]');
    const renderedTextAreaSuffix = container.querySelector('[data-paste-element="NEW_TEXTAREA_SUFFIX"]');
    expect(renderedTextArea).toHaveStyleRule('background-color', 'rgb(254,236,236)');
    expect(renderedTextAreaElement).toHaveStyleRule('color', 'rgb(214,31,31)');
    expect(renderedTextAreaPrefix).toHaveStyleRule('padding', '1.5rem');
    expect(renderedTextAreaSuffix).toHaveStyleRule('border-left-color', 'rgb(214,31,31)');
  });

  it('should set custom CSS for custom textarea variant', () => {
    const {container} = render(<CustomizedTextarea />);
    const renderedTextArea = container.querySelector('[data-paste-element="NEW_TEXTAREA_VARIANT"]');
    const renderedTextAreaElement = container.querySelector('[data-paste-element="NEW_TEXTAREA_VARIANT_ELEMENT"]');
    const renderedTextAreaPrefix = container.querySelector('[data-paste-element="NEW_TEXTAREA_VARIANT_PREFIX"]');
    const renderedTextAreaSuffix = container.querySelector('[data-paste-element="NEW_TEXTAREA_VARIANT_SUFFIX"]');
    expect(renderedTextArea).toHaveStyleRule('background-color', 'rgb(235,244,255)');
    expect(renderedTextAreaElement).toHaveStyleRule('background-color', 'rgb(235,244,255)');
    expect(renderedTextAreaPrefix).toHaveStyleRule('background-color', 'rgb(235,244,255)');
    expect(renderedTextAreaSuffix).toHaveStyleRule('background-color', 'rgb(235,244,255)');
  });
});

describe('Textarea Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = render(
      <>
        <Label htmlFor="foo">Foo</Label>
        <TextArea id="foo" onChange={NOOP} />
      </>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('disabled has no accessibility violations', async () => {
    const {container} = render(
      <>
        <Label htmlFor="foo-disabled" disabled>
          Foo
        </Label>
        <TextArea id="foo-disabled" onChange={NOOP} disabled />
      </>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('hasError has no accessibility violations', async () => {
    const {container} = render(
      <>
        <Label htmlFor="foo-error">Foo</Label>
        <TextArea id="foo-error" onChange={NOOP} hasError />
        <HelpText variant="error">Error info. Explains why the input has an error.</HelpText>
      </>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
