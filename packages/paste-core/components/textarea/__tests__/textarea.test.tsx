import * as React from 'react';

import {render, screen, fireEvent} from '@testing-library/react';
import {useUID} from '@twilio-paste/uid-library';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Label} from '@twilio-paste/label';
import {Anchor} from '@twilio-paste/anchor';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {TextArea} from '../src';

const CustomizedTextarea: React.FC = () => {
  const uidTwo = useUID();
  const uidTwoVariant = useUID();
  const uidThree = useUID();
  const uidThreeVariant = useUID();
  return (
    <CustomizationProvider
      baseTheme="default"
      theme={TestTheme}
      elements={{
        TEXTAREA: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderPrimary',
        },
        TEXTAREA_ELEMENT: {
          color: 'colorTextLinkStronger',
          padding: 'space50',
          '::placeholder': {
            color: 'colorTextLink',
          },
        },
        TEXTAREA_PREFIX: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderTopLeftRadius: 'borderRadius30',
          borderBottomLeftRadius: 'borderRadius30',
          borderRightColor: 'colorBorderPrimary',
          padding: 'space50',
        },
        TEXTAREA_SUFFIX: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderTopRightRadius: 'borderRadius30',
          borderBottomRightRadius: 'borderRadius30',
          borderLeftColor: 'colorBorderPrimary',
          padding: 'space50',
        },
        TEXTAREA_VARIANT: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderPrimary',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
              borderColor: 'colorBorderDestructive',
            },
          },
        },
        TEXTAREA_VARIANT_ELEMENT: {
          color: 'colorTextLinkStronger',
          padding: 'space50',
          '::placeholder': {
            color: 'colorTextLink',
          },
          variants: {
            default: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
            },
          },
        },
        TEXTAREA_VARIANT_PREFIX: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderTopLeftRadius: 'borderRadius30',
          borderBottomLeftRadius: 'borderRadius30',
          borderRightColor: 'colorBorderPrimary',
          padding: 'space50',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderRightColor: 'colorBorderDestructive',
            },
            inverse: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
              borderRightColor: 'colorBorderDestructive',
            },
          },
        },
        TEXTAREA_VARIANT_SUFFIX: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderTopRightRadius: 'borderRadius30',
          borderBottomRightRadius: 'borderRadius30',
          borderLeftColor: 'colorBorderPrimary',
          padding: 'space50',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderLeftColor: 'colorBorderDestructive',
            },
            inverse: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
              borderLeftColor: 'colorBorderDestructive',
            },
          },
        },
        NEW_TEXTAREA: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth20',
          borderColor: 'colorBorderDestructive',
        },
        NEW_TEXTAREA_ELEMENT: {
          color: 'colorTextLinkDestructive',
          padding: 'space70',
          '::placeholder': {
            color: 'colorTextLinkDestructive',
          },
        },
        NEW_TEXTAREA_PREFIX: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderTopLeftRadius: 'borderRadius30',
          borderBottomLeftRadius: 'borderRadius30',
          borderRightColor: 'colorBorderDestructive',
          borderWidth: 'borderWidth20',
          padding: 'space70',
        },
        NEW_TEXTAREA_SUFFIX: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderTopRightRadius: 'borderRadius30',
          borderBottomRightRadius: 'borderRadius30',
          borderLeftColor: 'colorBorderDestructive',
          borderWidth: 'borderWidth20',
          padding: 'space70',
        },
        NEW_TEXTAREA_VARIANT: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth20',
          borderColor: 'colorBorderDestructive',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderColor: 'colorBorderPrimary',
            },
          },
        },
        NEW_TEXTAREA_VARIANT_ELEMENT: {
          color: 'colorTextLinkDestructive',
          padding: 'space70',
          '::placeholder': {
            color: 'colorTextLinkDestructive',
          },
          variants: {
            default: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderRadius: 'borderRadius30',
            },
          },
        },
        NEW_TEXTAREA_VARIANT_PREFIX: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderTopLeftRadius: 'borderRadius30',
          borderBottomLeftRadius: 'borderRadius30',
          borderRightColor: 'colorBorderDestructive',
          borderWidth: 'borderWidth20',
          padding: 'space70',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
              borderRightColor: 'colorBorderDestructive',
            },
            inverse: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderRightColor: 'colorBorderPrimary',
            },
          },
        },
        NEW_TEXTAREA_VARIANT_SUFFIX: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderTopRightRadius: 'borderRadius30',
          borderBottomRightRadius: 'borderRadius30',
          borderLeftColor: 'colorBorderDestructive',
          borderWidth: 'borderWidth20',
          padding: 'space70',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
              borderLeftColor: 'colorBorderDestructive',
            },
            inverse: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderLeftColor: 'colorBorderPrimary',
            },
          },
        },
      }}
    >
      <Stack orientation="vertical" spacing="space60">
        <Box>
          <Label htmlFor={uidTwo}>Label</Label>
          <TextArea
            id={uidTwo}
            data-testid="default-textarea"
            placeholder="Customized"
            insertBefore={
              <Text as="span" fontWeight="fontWeightSemibold">
                $10.99
              </Text>
            }
            insertAfter={
              <Anchor href="#" display="flex">
                <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
              </Anchor>
            }
          />
        </Box>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
          <Label variant="inverse" htmlFor={uidTwoVariant}>
            Label
          </Label>
          <TextArea
            id={uidTwoVariant}
            variant="inverse"
            placeholder="Customized"
            data-testid="inverse-textarea"
            element="TEXTAREA_VARIANT"
            insertBefore={
              <Text as="span" fontWeight="fontWeightSemibold">
                $10.99
              </Text>
            }
            insertAfter={
              <Anchor href="#" display="flex">
                <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
              </Anchor>
            }
          />
        </Box>
        <Box>
          <Label htmlFor={uidThree}>Label</Label>
          <TextArea
            id={uidThree}
            element="NEW_TEXTAREA"
            placeholder="Customized Element"
            data-testid="custom-default-textarea"
            insertBefore={
              <Text as="span" fontWeight="fontWeightSemibold">
                $10.99
              </Text>
            }
            insertAfter={
              <Anchor href="#" display="flex">
                <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
              </Anchor>
            }
          />
        </Box>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
          <Label variant="inverse" htmlFor={uidThreeVariant}>
            Label
          </Label>
          <TextArea
            id={uidThreeVariant}
            element="NEW_TEXTAREA_VARIANT"
            placeholder="Customized Element"
            data-testid="custom-inverse-textarea"
            variant="inverse"
            insertBefore={
              <Text as="span" fontWeight="fontWeightSemibold">
                $10.99
              </Text>
            }
            insertAfter={
              <Anchor href="#" display="flex">
                <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
              </Anchor>
            }
          />
        </Box>
      </Stack>
    </CustomizationProvider>
  );
};

const NOOP = (): void => {};

const initialProps = {
  id: 'textarea',
  name: 'textarea',
  onChange: NOOP,
  placeholder: 'placeholder',
};

describe('TextArea render', () => {
  it('should render', () => {
    const {getByRole} = render(<TextArea {...initialProps} />);
    expect(getByRole('textbox')).not.toBeNull();
  });

  it('should render as readOnly', () => {
    const {getByRole} = render(<TextArea {...initialProps} readOnly />);
    expect(getByRole('textbox').getAttribute('aria-readOnly')).toBeTruthy();
  });

  it('should render as invalid', () => {
    const {getByRole} = render(<TextArea {...initialProps} hasError />);
    expect(getByRole('textbox').getAttribute('aria-invalid')).toBeTruthy();
  });

  it('should render as disabled', () => {
    const {getByRole} = render(<TextArea {...initialProps} disabled />);
    expect(getByRole('textbox').getAttribute('disabled')).toEqual('');
    expect(getByRole('textbox')).toHaveStyleRule('-webkit-text-fill-color', 'colorTextWeaker', {target: ':disabled'});
  });

  it('should render an id', () => {
    const {getByRole} = render(<TextArea {...initialProps} />);
    expect(getByRole('textbox').id).toBe('textarea');
  });

  it('should render a name', () => {
    const {getByRole} = render(<TextArea {...initialProps} />);
    expect(getByRole('textbox').getAttribute('name')).toBe('textarea');
  });

  it('should render a placeholder', () => {
    const {getByRole} = render(<TextArea {...initialProps} />);
    expect(getByRole('textbox').getAttribute('placeholder')).toBe('placeholder');
  });

  it('should render a prefix', () => {
    const {getByText} = render(<TextArea {...initialProps} insertBefore={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
  });

  it('should render a suffix', () => {
    const {getByText} = render(<TextArea {...initialProps} insertAfter={<div>$10.99</div>} />);
    expect(getByText('$10.99')).toBeDefined();
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

describe('Textarea customization', () => {
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
