import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import {
  getGrow,
  getShrink,
  getBasis,
  getSuffix,
  getVertical,
  getWrap,
  vAlignToProps,
  hAlignToProps,
} from '../src/helpers';
import { Flex } from '../src';
import type { FlexProps } from '../src/types';

describe('Flex Unit Tests', () => {
  it('should return grow: 1', (): void => {
    const mockGrow = {
      grow: 1,
    };
    expect(getGrow(mockGrow)).toStrictEqual(1);
  });

  it('should return grow: 1, 1, 0', (): void => {
    const mockGrow = {
      grow: [true, 1, 0],
    };
    expect(getGrow(mockGrow)).toStrictEqual([1, 1, 0]);
  });

  it('should return shrink: 1', (): void => {
    const mockShrink = {
      shrink: 1,
    };
    expect(getShrink(mockShrink)).toStrictEqual(1);
  });

  it('should return shrink: 1, 1, 0', (): void => {
    const mockShrink = {
      shrink: [true, 1, 0],
    };
    expect(getShrink(mockShrink)).toStrictEqual([1, 1, 0]);
  });

  it('should return basis: 400px', (): void => {
    const mockBasis = {
      basis: '400px',
    };
    expect(getBasis(mockBasis)).toStrictEqual('400px');
  });

  it('should return basis: 400px - number method', (): void => {
    const mockBasis = {
      basis: 400,
    };
    expect(getBasis(mockBasis)).toStrictEqual('400px');
  });

  it('should return basis: 400rem', (): void => {
    const mockBasis = {
      basis: '400rem',
    };
    expect(getBasis(mockBasis)).toStrictEqual('400rem');
  });

  it('should return basis: 100%', (): void => {
    const mockBasis = {
      basis: '100%',
    };
    expect(getBasis(mockBasis)).toStrictEqual('100%');
  });

  it('should return basis: 400px, 100%, 200rem', (): void => {
    const mockBasis = {
      basis: [400, '100%', '200rem'],
    };
    expect(getBasis(mockBasis)).toStrictEqual(['400px', '100%', '200rem']);
  });

  it('should return 400px (getSuffix)', (): void => {
    const mockValue = '400px';
    expect(getSuffix(mockValue)).toStrictEqual('400px');
  });

  it('should return 400px (getSuffix - number method)', (): void => {
    const mockValue = 400;
    expect(getSuffix(mockValue)).toStrictEqual('400px');
  });

  it('should return vertical: column', (): void => {
    const mockVertical = {
      vertical: true,
    };
    expect(getVertical(mockVertical)).toStrictEqual('column');
  });

  it('should return vertical: row', (): void => {
    const mockVertical = {
      vertical: false,
    };
    expect(getVertical(mockVertical)).toStrictEqual('row');
  });

  it('should return vertical: column, row, row', (): void => {
    const mockVertical = {
      vertical: [true, false, false],
    };
    expect(getVertical(mockVertical)).toStrictEqual(['column', 'row', 'row']);
  });

  it('should return wrap: wrap', (): void => {
    const mockWrap = {
      wrap: true,
    };
    expect(getWrap(mockWrap)).toStrictEqual('wrap');
  });

  it('should return wrap: nowrap', (): void => {
    const mockWrap = {
      wrap: false,
    };
    expect(getWrap(mockWrap)).toStrictEqual('nowrap');
  });

  it('should return wrap: nowrap, wrap, wrap', (): void => {
    const mockWrap = {
      wrap: [false, true, true],
    };
    expect(getWrap(mockWrap)).toStrictEqual(['nowrap', 'wrap', 'wrap']);
  });

  it('should return vAlignContent: flex-start', (): void => {
    const mockVerticalAlign: FlexProps = {
      vAlignContent: 'top',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('flex-start');
  });

  it('should return vAlignContent: center', (): void => {
    const mockVerticalAlign: FlexProps = {
      vAlignContent: 'center',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('center');
  });

  it('should return vAlignContent: flex-end', (): void => {
    const mockVerticalAlign: FlexProps = {
      vAlignContent: 'bottom',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('flex-end');
  });

  it('should return vAlignContent: stretch', (): void => {
    const mockVerticalAlign: FlexProps = {
      vAlignContent: 'stretch',
    };
    expect(vAlignToProps(mockVerticalAlign)).toStrictEqual('stretch');
  });

  it('should return hAlignContent: flex-start', (): void => {
    const mockHorizontalAlign: FlexProps = {
      hAlignContent: 'left',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('flex-start');
  });

  it('should return hAlignContent: center', (): void => {
    const mockHorizontalAlign: FlexProps = {
      hAlignContent: 'center',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('center');
  });

  it('should return hAlignContent: flex-end', (): void => {
    const mockHorizontalAlign: FlexProps = {
      hAlignContent: 'right',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('flex-end');
  });

  it('should return hAlignContent: space-around', (): void => {
    const mockHorizontalAlign: FlexProps = {
      hAlignContent: 'around',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('space-around');
  });

  it('should return hAlignContent: space-between', (): void => {
    const mockHorizontalAlign: FlexProps = {
      hAlignContent: 'between',
    };
    expect(hAlignToProps(mockHorizontalAlign)).toStrictEqual('space-between');
  });
});

describe('Flex Display', () => {
  it('should set a display: flex property', (): void => {
    render(<Flex data-testid="renderedFlexElement" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('display', 'flex');
  });

  it('should render as any HTML element', (): void => {
    render(
      <Flex data-testid="renderedFlexArticle" as="article">
        child
      </Flex>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexArticle');
    expect(renderedFlex.tagName).toEqual('ARTICLE');
  });
});

describe('Flex Options', () => {
  it('should set a flex-grow property', (): void => {
    render(<Flex data-testid="renderedFlexElement" grow />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-grow', '1');
  });

  it('should set a flex-shrink property', (): void => {
    render(<Flex data-testid="renderedFlexElement" grow shrink />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-shrink', '1');
  });

  it('should set a flex-basis property', (): void => {
    render(<Flex data-testid="renderedFlexElement" basis={400} />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-basis', '400px');
  });

  it('should set a responsive flex-grow property', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Flex data-testid="renderedFlexElement" grow={[true, false, 1]} />
      </CustomizationProvider>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-grow', '0', {
      media: 'screen and (min-width:400px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-grow', '1', {
      media: 'screen and (min-width:1024px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-grow', '1');
  });

  it('should set a responsive flex-shrink property', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Flex data-testid="renderedFlexElement" grow shrink={[true, false, 1]} />
      </CustomizationProvider>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-shrink', '0', {
      media: 'screen and (min-width:400px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-shrink', '1', {
      media: 'screen and (min-width:1024px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-shrink', '1');
  });

  it('should set a responsive flex-basis property', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Flex data-testid="renderedFlexElement" basis={[400, 100, 200]} />
      </CustomizationProvider>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-basis', '100px', {
      media: 'screen and (min-width:400px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-basis', '200px', {
      media: 'screen and (min-width:1024px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-basis', '400px');
  });
});

describe('Flex Row', () => {
  it('should not set a flex-direction property', (): void => {
    render(<Flex data-testid="renderedFlexElement" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).not.toHaveStyleRule('flex-direction', 'row');
  });

  it('should set a responsive flex-direction property', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Flex data-testid="renderedFlexElement" display="flex" vertical={[true, false, false]} />
      </CustomizationProvider>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-direction', 'row', {
      media: 'screen and (min-width:400px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-direction', 'row', {
      media: 'screen and (min-width:1024px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-direction', 'column');
  });
});

describe('Flex Wrap', () => {
  it('should not set a flex-wrap property', (): void => {
    render(<Flex data-testid="renderedFlexElement" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).not.toHaveStyleRule('flex-wrap', 'wrap');
  });

  it('should set a responsive flex-wrap property', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Flex data-testid="renderedFlexElement" wrap={[true, true, false]} />
      </CustomizationProvider>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('flex-wrap', 'wrap', {
      media: 'screen and (min-width:400px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-wrap', 'nowrap', {
      media: 'screen and (min-width:1024px)',
    });
    expect(renderedFlex).toHaveStyleRule('flex-wrap', 'wrap');
  });
});

describe('Vertical Alignment', () => {
  it('should set a align-items: flex-start property', (): void => {
    render(<Flex data-testid="renderedFlexElement" vAlignContent="top" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('align-items', 'flex-start');
  });

  it('should set a responsive align-items property', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Flex data-testid="renderedFlexElement" vAlignContent={['top', 'center', 'bottom']} />
      </CustomizationProvider>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('align-items', 'center', {
      media: 'screen and (min-width:400px)',
    });
    expect(renderedFlex).toHaveStyleRule('align-items', 'flex-end', {
      media: 'screen and (min-width:1024px)',
    });
    expect(renderedFlex).toHaveStyleRule('align-items', 'flex-start');
  });
});

describe('Horizontal Alignment', () => {
  it('should set a justify-content: flex-start property', (): void => {
    render(<Flex data-testid="renderedFlexElement" hAlignContent="left" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('justify-content', 'flex-start');
  });

  it('should set a responsive justify-content property', (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Flex data-testid="renderedFlexElement" hAlignContent={['left', 'center', 'right']} />
      </CustomizationProvider>,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('justify-content', 'center', {
      media: 'screen and (min-width:400px)',
    });
    expect(renderedFlex).toHaveStyleRule('justify-content', 'flex-end', {
      media: 'screen and (min-width:1024px)',
    });
    expect(renderedFlex).toHaveStyleRule('justify-content', 'flex-start');
  });
});
describe('Flex style props', () => {
  it('should set all available pass through style props', (): void => {
    render(
      <Flex
        data-testid="renderedFlexElement"
        margin="space20"
        padding="space30"
        maxWidth="size40"
        minWidth="size50"
        minHeight="size60"
        maxHeight="size70"
      />,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('margin', 'space20');
    expect(renderedFlex).toHaveStyleRule('padding', 'space30');
    expect(renderedFlex).toHaveStyleRule('max-width', 'size40');
    expect(renderedFlex).toHaveStyleRule('min-width', 'size50');
    expect(renderedFlex).toHaveStyleRule('min-height', 'size60');
    expect(renderedFlex).toHaveStyleRule('max-height', 'size70');
  });

  it('should set individual width and height style props', (): void => {
    render(<Flex data-testid="renderedFlexElement" width="size20" height="size30" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('width', 'size20');
    expect(renderedFlex).toHaveStyleRule('height', 'size30');
  });

  it('should set individual margin style props', (): void => {
    render(
      <Flex
        data-testid="renderedFlexElement"
        marginTop="space20"
        marginRight="space30"
        marginBottom="space40"
        marginLeft="space50"
      />,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('margin-top', 'space20');
    expect(renderedFlex).toHaveStyleRule('margin-right', 'space30');
    expect(renderedFlex).toHaveStyleRule('margin-bottom', 'space40');
    expect(renderedFlex).toHaveStyleRule('margin-left', 'space50');
  });

  it('should set individual padding style props', (): void => {
    render(
      <Flex
        data-testid="renderedFlexElement"
        paddingTop="space20"
        paddingRight="space30"
        paddingBottom="space40"
        paddingLeft="space50"
      />,
    );
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('padding-top', 'space20');
    expect(renderedFlex).toHaveStyleRule('padding-right', 'space30');
    expect(renderedFlex).toHaveStyleRule('padding-bottom', 'space40');
    expect(renderedFlex).toHaveStyleRule('padding-left', 'space50');
  });

  it('should set margin x style props', (): void => {
    render(<Flex data-testid="renderedFlexElement" marginX="space20" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('margin-right', 'space20');
    expect(renderedFlex).toHaveStyleRule('margin-left', 'space20');
  });

  it('should set margin y style props', (): void => {
    render(<Flex data-testid="renderedFlexElement" marginY="space20" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('margin-top', 'space20');
    expect(renderedFlex).toHaveStyleRule('margin-bottom', 'space20');
  });

  it('should set padding x style props', (): void => {
    render(<Flex data-testid="renderedFlexElement" paddingX="space20" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('padding-right', 'space20');
    expect(renderedFlex).toHaveStyleRule('padding-left', 'space20');
  });

  it('should set padding y style props', (): void => {
    render(<Flex data-testid="renderedFlexElement" paddingY="space20" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('padding-top', 'space20');
    expect(renderedFlex).toHaveStyleRule('padding-bottom', 'space20');
  });

  it('should set size style props', (): void => {
    render(<Flex data-testid="renderedFlexElement" size="size20" />);
    const renderedFlex = screen.getByTestId('renderedFlexElement');
    expect(renderedFlex).toHaveStyleRule('width', 'size20');
    expect(renderedFlex).toHaveStyleRule('height', 'size20');
  });
});

describe('HTML Attributes', () => {
  it('should set an element data attribute on Flex', (): void => {
    render(<Flex data-testid="renderedFlexElement" />);
    expect(screen.getByTestId('renderedFlexElement').getAttribute('data-paste-element')).toEqual('FLEX');
  });
  it('should set a custom element data attribute on Flex', (): void => {
    render(<Flex data-testid="renderedFlexElement" element="bar" />);
    expect(screen.getByTestId('renderedFlexElement').getAttribute('data-paste-element')).toEqual('bar');
  });
});

describe('Customization', () => {
  it('should add custom styles to Flex', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ FLEX: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
      >
        <Flex data-testid="renderedFlexElement" />
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId('renderedFlexElement');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });
  it('should add custom styles to Flex with custom element attributes', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ MY_FLEX: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
      >
        <Flex data-testid="renderedFlexElement" element="MY_FLEX" />
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId('renderedFlexElement');
    expect(renderedBox).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
    expect(renderedBox).toHaveStyleRule('color', 'rgb(96, 107, 133)');
  });
});
