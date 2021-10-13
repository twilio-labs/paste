import * as React from 'react';

import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Box} from '../src';
import {CustomizableBoxExample} from '../__fixtures__/CustomizableBox';

describe('Backgrounds', () => {
  it('should render single values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box backgroundColor="colorBackgroundPrimary" data-testid="box">
          background single
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(2,122,197)');
  });

  it('should render responsive values', () => {
    render(
      <Theme.Provider theme="console">
        <Box backgroundColor={['colorBackgroundPrimaryWeak', 'colorBackgroundPrimary']} data-testid="box">
          background responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(179,211,233)');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(2,122,197)', {
      media: 'screen and (min-width:25rem)',
    });
  });
});

describe('Color mappings', () => {
  it('should map single color values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box
          backgroundColor="colorBackgroundPrimary"
          borderColor="colorBorderStrong"
          borderBottomColor="colorBorderErrorStrong"
          borderLeftColor="colorBorderErrorStrong"
          borderRightColor="colorBorderInverse"
          borderTopColor="colorBorderInverse"
          color="colorText"
          data-testid="box"
        >
          background single
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(2,122,197)');
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(136,140,142)');
    expect(renderedBox).toHaveStyleRule('border-bottom-color', 'rgb(146,18,0)');
    expect(renderedBox).toHaveStyleRule('border-left-color', 'rgb(146,18,0)');
    expect(renderedBox).toHaveStyleRule('border-right-color', 'rgba(255,255,255,0.5)');
    expect(renderedBox).toHaveStyleRule('border-top-color', 'rgba(255,255,255,0.5)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(40,42,43)');
  });

  it('should map responsive color values', () => {
    render(
      <Theme.Provider theme="console">
        <Box
          backgroundColor={['colorBackgroundPrimaryWeak', 'colorBackgroundPrimary']}
          borderColor={['colorBorderStrong', 'colorBorderDestructiveStrong']}
          color={['colorText', 'colorTextBrandInverse']}
          data-testid="box"
        >
          background responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(179,211,233)');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(2,122,197)', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(136,140,142)');
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(146,18,0)', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('color', 'rgb(40,42,43)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(255,255,255)', {
      media: 'screen and (min-width:25rem)',
    });
  });

  it('should map pseudo selector color values', () => {
    render(
      <Theme.Provider theme="console">
        <Box
          _hover={{
            backgroundColor: 'colorBackground',
            borderColor: 'colorBorderDestructiveStrong',
            color: 'colorTextBrandInverse',
          }}
          data-testid="box"
        >
          background responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(248,248,249)', {target: ':hover'});
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(146,18,0)', {target: ':hover'});
    expect(renderedBox).toHaveStyleRule('color', 'rgb(255,255,255)', {target: ':hover'});
  });

  it('should map responsive pseudo selector color values', () => {
    render(
      <Theme.Provider theme="console">
        <Box
          _hover={{
            backgroundColor: ['colorBackground', 'colorBackgroundBody'],
            borderColor: ['colorBorderDestructiveStrong', 'colorBorderErrorStrong'],
            color: ['colorTextError', 'colorTextIconInverse'],
          }}
          data-testid="box"
        >
          background responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(248,248,249)', {target: ':hover'});
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(255,255,255)', {
      target: ':hover',
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(146,18,0)', {target: ':hover'});
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(146,18,0)', {
      target: ':hover',
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('color', 'rgb(226,37,37)', {target: ':hover'});
    expect(renderedBox).toHaveStyleRule('color', 'rgb(200,204,207)', {
      target: ':hover',
      media: 'screen and (min-width:25rem)',
    });
  });
});

describe('Borders', () => {
  it('should render single values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box
          borderStyle="solid"
          borderColor="colorBorderPrimaryStrong"
          borderWidth="borderWidth10"
          borderRadius="borderRadius20"
          data-testid="box"
        >
          border single
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('border-style', 'solid');
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(0,62,130)');
    expect(renderedBox).toHaveStyleRule('border-width', '1px');
    expect(renderedBox).toHaveStyleRule('border-radius', '4px');
  });

  it('should render responsive values', () => {
    render(
      <Theme.Provider theme="console">
        <Box
          borderStyle={['dashed', 'dotted', 'solid']}
          borderColor={['colorBorderPrimaryStrong', 'colorBorderPrimaryWeak']}
          borderWidth={['borderWidth10', 'borderWidth20']}
          borderRadius={['borderRadius0', 'borderRadius10']}
          data-testid="box"
        >
          border responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('border-style', 'dashed');
    expect(renderedBox).toHaveStyleRule('border-style', 'dotted', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('border-style', 'solid', {
      media: 'screen and (min-width:64rem)',
    });
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(0,62,130)');
    expect(renderedBox).toHaveStyleRule('border-color', 'rgb(179,211,233)', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('border-width', '1px');
    expect(renderedBox).toHaveStyleRule('border-width', '2px', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('border-radius', '0');
    expect(renderedBox).toHaveStyleRule('border-radius', '2px', {
      media: 'screen and (min-width:25rem)',
    });
  });
});

describe('Sizes', () => {
  it('should render single values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box
          width="size10"
          minWidth="size0"
          maxWidth="size20"
          height="size10"
          minHeight="size0"
          maxHeight="size20"
          data-testid="box"
        >
          size single
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('width', '5.5rem');
    expect(renderedBox).toHaveStyleRule('min-width', '0');
    expect(renderedBox).toHaveStyleRule('max-width', '12rem');
    expect(renderedBox).toHaveStyleRule('height', '5.5rem');
    expect(renderedBox).toHaveStyleRule('min-height', '0');
    expect(renderedBox).toHaveStyleRule('max-height', '12rem');
  });

  it('should render responsive values', () => {
    render(
      <Theme.Provider theme="console">
        <Box
          width={['size10', 'size20']}
          minWidth={['size0', 'size10']}
          maxWidth={['size20', 'size30']}
          height={['size10', 'size20']}
          minHeight={['size0', 'size10']}
          maxHeight={['size20', 'size30']}
          data-testid="box"
        >
          size responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('width', '5.5rem');
    expect(renderedBox).toHaveStyleRule('width', '12rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('min-width', '0');
    expect(renderedBox).toHaveStyleRule('min-width', '5.5rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('max-width', '12rem');
    expect(renderedBox).toHaveStyleRule('max-width', '18.5rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('height', '5.5rem');
    expect(renderedBox).toHaveStyleRule('height', '12rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('min-height', '0');
    expect(renderedBox).toHaveStyleRule('min-height', '5.5rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('max-height', '12rem');
    expect(renderedBox).toHaveStyleRule('max-height', '18.5rem', {
      media: 'screen and (min-width:25rem)',
    });
  });
});

describe('Spaces', () => {
  it('(A) it should render single values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box margin="space20" data-testid="box">
          space single 1
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('margin', '0.25rem');
  });

  it('(A) it should render responsive values', () => {
    render(
      <Theme.Provider theme="console">
        <Box margin={['space20', 'space30']} data-testid="box">
          space responsive 1
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('margin', '0.25rem');
    expect(renderedBox).toHaveStyleRule('margin', '0.5rem', {
      media: 'screen and (min-width:25rem)',
    });
  });

  it('(B) it should render single values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box marginTop="space20" marginRight="space20" marginBottom="space30" marginLeft="space30" data-testid="box">
          space single 2
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('margin-top', '0.25rem');
    expect(renderedBox).toHaveStyleRule('margin-right', '0.25rem');
    expect(renderedBox).toHaveStyleRule('margin-bottom', '0.5rem');
    expect(renderedBox).toHaveStyleRule('margin-left', '0.5rem');
  });

  it('(B)it should render responsive values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box
          marginTop={['space20', 'space30']}
          marginRight={['space20', 'space30']}
          marginBottom={['space30', 'space40']}
          marginLeft={['space30', 'space40']}
          data-testid="box"
        >
          space responsive 2
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('margin-top', '0.25rem');
    expect(renderedBox).toHaveStyleRule('margin-top', '0.5rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('margin-right', '0.25rem');
    expect(renderedBox).toHaveStyleRule('margin-right', '0.5rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('margin-bottom', '0.5rem');
    expect(renderedBox).toHaveStyleRule('margin-bottom', '0.75rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('margin-left', '0.5rem');
    expect(renderedBox).toHaveStyleRule('margin-left', '0.75rem', {
      media: 'screen and (min-width:25rem)',
    });
  });

  it('(C) it should render single values for column and row gap', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box display="flex" columnGap="space10" rowGap="space10" data-testid="box">
          space single 3
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('column-gap', '0.125rem');
    expect(renderedBox).toHaveStyleRule('row-gap', '0.125rem');
  });

  it('(C) it should render responsive values for column and row gap', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box display="flex" columnGap={['space20', 'space30']} rowGap={['space30', 'space40']} data-testid="box">
          space single 3
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('column-gap', '0.25rem');
    expect(renderedBox).toHaveStyleRule('row-gap', '0.5rem');

    expect(renderedBox).toHaveStyleRule('column-gap', '0.5rem', {
      media: 'screen and (min-width:25rem)',
    });
    expect(renderedBox).toHaveStyleRule('row-gap', '0.75rem', {
      media: 'screen and (min-width:25rem)',
    });
  });
});

describe('Shadows', () => {
  it('should render single values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box boxShadow="shadowCard" data-testid="box">
          shadow single
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('box-shadow', '0 2px 4px 0 rgba(40,42,43,0.3)');
  });

  it('should render responsive values', () => {
    render(
      <Theme.Provider theme="console">
        <Box boxShadow={['shadowCard', 'shadowFocus']} data-testid="box">
          shadow responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('box-shadow', '0 2px 4px 0 rgba(40,42,43,0.3)');
    expect(renderedBox).toHaveStyleRule('box-shadow', '0 0 0 4px rgba(2,122,197,0.8)', {
      media: 'screen and (min-width:25rem)',
    });
  });
});

describe('ZIndex', () => {
  it('should render single values', (): void => {
    render(
      <Theme.Provider theme="console">
        <Box zIndex="zIndex10" data-testid="box">
          z-index single
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('z-index', '2010');
  });

  it('should render responsive values', () => {
    render(
      <Theme.Provider theme="console">
        <Box zIndex={['zIndex10', 'zIndex20']} data-testid="box">
          z-index responsive
        </Box>
      </Theme.Provider>
    );
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toHaveStyleRule('z-index', '2010');
    expect(renderedBox).toHaveStyleRule('z-index', '2020', {
      media: 'screen and (min-width:25rem)',
    });
  });

  describe('Pseudo-class props', () => {
    it('should generate pseudo-class CSS', (): void => {
      render(
        <Theme.Provider theme="console">
          <Box
            _hover={{padding: 'space10'}}
            _active={{padding: 'space10'}}
            _focus={{padding: 'space10'}}
            _visited={{padding: 'space10'}}
            _even={{padding: 'space10'}}
            _odd={{padding: 'space10'}}
            _disabled={{padding: 'space10'}}
            _checked={{padding: 'space10'}}
            _mixed={{padding: 'space10'}}
            _selected={{padding: 'space10'}}
            _invalid={{padding: 'space10'}}
            _pressed={{padding: 'space10'}}
            _readOnly={{padding: 'space10'}}
            _first={{padding: 'space10'}}
            _last={{padding: 'space10'}}
            _expanded={{padding: 'space10'}}
            _grabbed={{padding: 'space10'}}
            _notFirst={{padding: 'space10'}}
            _notLast={{padding: 'space10'}}
            _groupHover={{padding: 'space10'}}
            _before={{padding: 'space10'}}
            _after={{padding: 'space10'}}
            _focusWithin={{padding: 'space10'}}
            _focusVisible={{padding: 'space10'}}
            _placeholder={{padding: 'space10'}}
            data-testid="box"
          >
            PseudoBox
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId('box');
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':hover'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':active'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':focus'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':visited'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':nth-of-type(even)'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':nth-of-type(odd)'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':disabled'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':checked'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':indeterminate'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: '[aria-selected=true]'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':invalid'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: '[aria-pressed=true]'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: '[readonly]'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':first-of-type'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':last-of-type'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: '[aria-expanded=true]'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: '[aria-grabbed=true]'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':not(:first-of-type)'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':not(:last-of-type)'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: '[role=group]:hover'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':before'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':after'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':focus-within'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: ':focus-visible'});
      expect(renderedBox).toHaveStyleRule('padding', '0.125rem', {target: '::placeholder'});
    });
  });
});

describe('HTML attributes', () => {
  it('should set a default element data attribute', () => {
    render(<Box>box</Box>);
    expect(screen.getByText('box').getAttribute('data-paste-element')).toEqual('BOX');
  });
  it('should set a custom element data attribute', () => {
    render(<Box element="foo">box</Box>);
    expect(screen.getByText('box').getAttribute('data-paste-element')).toEqual('foo');
  });
});

describe('Customization', () => {
  it('should add custom styles to a component provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{CUSTOM_BOX: {color: 'colorTextWeak', textDecoration: 'underline'}}}
      >
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('text-decoration', 'underline');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(96,107,133)');
    expect(renderedBox).toHaveStyleRule('padding', '0.75rem');
  });

  it('should override existing styles when provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{CUSTOM_BOX: {padding: 'space20'}}}>
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('padding', '0.25rem');
  });

  it('should add custom styles to pseudo selectors when provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{CUSTOM_BOX: {':hover': {color: 'colorTextSuccess'}}}}>
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(14,124,58)', {target: ':hover'});
  });

  it('should override existing pseudo selector styles when provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{CUSTOM_BOX: {':hover': {backgroundColor: 'colorBackground'}}}}
      >
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244,244,246)', {target: ':hover'});
  });

  it('should add custom styles to a component variant provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{CUSTOM_TEXT: {variants: {primary: {fontStyle: 'italic'}}}}}>
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('font-style', 'italic');
  });

  it('should override existing variant styles when provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{CUSTOM_TEXT: {variants: {primary: {backgroundColor: 'colorBackgroundWarning'}}}}}
      >
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244,124,34)');
  });

  it('should add custom styles to variant pseudo selectors when provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{CUSTOM_TEXT: {':hover': {margin: 'space30'}}}}>
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('margin', '0.5rem', {target: ':hover'});
  });

  it('should override existing variant pseudo selector styles when provided as element styles on the customization provider', (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{CUSTOM_TEXT: {':hover': {fontWeight: 'fontWeightMedium'}}}}>
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>
    );
    const renderedBox = screen.getByTestId('customizable-box');
    expect(renderedBox).toHaveStyleRule('font-weight', '500', {target: ':hover'});
  });
});
