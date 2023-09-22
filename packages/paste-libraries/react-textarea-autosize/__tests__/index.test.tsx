import { render, screen } from '@testing-library/react';
import * as React from 'react';

import TextareaAutosize from '../src';
import { calculateNodeHeight } from '../src/calculateNodeHeight';
import { forceHiddenStyles } from '../src/forceHiddenStyles';
import { getHeight } from '../src/getHeight';
import { getSizingData } from '../src/getSizingData';
import type { SizingData } from '../src/getSizingData';
import { useHiddenTextarea } from '../src/useHiddenTextarea';
import { useWindowResizeListener } from '../src/useWindowResizeListener';

const resizeMock: jest.Mock = jest.fn();

const SampleComponent: React.FunctionComponent = () => {
  useHiddenTextarea();
  useWindowResizeListener(resizeMock);
  return <></>;
};

describe('<TextareaAutosize />', () => {
  it('renders ok', () => {
    const { asFragment } = render(<TextareaAutosize />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders with initial height passed in style prop', () => {
    const props = {
      style: {
        height: 55,
      },
    };
    const { asFragment } = render(<TextareaAutosize {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('forceHiddenStyles', () => {
  it('puts the hidden styles on an HTML node', () => {
    const element = document.createElement('div');
    forceHiddenStyles(element);

    expect(element.style.minHeight).toEqual('0');
    expect(element.style.maxHeight).toEqual('none');
    expect(element.style.height).toEqual('0px');
    expect(element.style.visibility).toEqual('hidden');
    expect(element.style.overflow).toEqual('hidden');
    expect(element.style.position).toEqual('absolute');
    expect(element.style.zIndex).toEqual('-1000');
    expect(element.style.top).toEqual('0px');
    expect(element.style.right).toEqual('0px');
  });
});

describe('getSizingData', () => {
  it('returns the sizing styles on an HTML node', () => {
    const element = document.createElement('textarea');
    // need to set the box sizing property because the function returns null if it is not set
    element.style.setProperty('box-sizing', 'border-box');
    const sizingData = getSizingData(element);

    expect(sizingData).toEqual({
      borderSize: 2,
      paddingSize: 4,
      sizingStyle: {
        borderBottomWidth: '1px',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        borderTopWidth: '1px',
        boxSizing: 'border-box',
        fontFamily: '-webkit-small-control',
        fontSize: '',
        fontStyle: '',
        fontWeight: '',
        letterSpacing: 'normal',
        lineHeight: 'normal',
        paddingBottom: '2px',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingTop: '2px',
        tabSize: '',
        textIndent: '0',
        textRendering: 'auto',
        textTransform: 'none',
        width: '',
        wordBreak: '',
      },
    });
  });
});

describe('getHeight', () => {
  it('returns the height of an HTML node', () => {
    const element = document.createElement('textarea');
    // need to set the box sizing property because the function returns null if it is not set
    element.style.setProperty('box-sizing', 'border-box');
    // Jest/JSDOM doesn't set scrollHeight, so we need to fake it
    jest.spyOn(element, 'scrollHeight', 'get').mockImplementation(() => 100);
    const sizingData = getSizingData(element);
    // need to force sizingData type to not be null
    const elementHeight = getHeight(element, sizingData as SizingData);
    expect(elementHeight).toEqual(102);
  });
});

describe('calculateNodeHeight', () => {
  it('returns the height and rowHeight of an empty textarea', () => {
    const element = document.createElement('textarea');
    // need to set the box sizing property because the function returns null if it is not set
    element.style.setProperty('box-sizing', 'border-box');
    // Jest/JSDOM doesn't set scrollHeight, so we need to fake it
    jest.spyOn(element, 'scrollHeight', 'get').mockImplementation(() => 100);
    const sizingData = getSizingData(element);
    // need to force sizingData type to not be null
    const calculatedHeight = calculateNodeHeight(element, sizingData as SizingData, '');
    expect(calculatedHeight).toEqual([102, 96]);
  });
});

describe('useHiddenTextarea', () => {
  it('creates a visually hidden textarea', () => {
    render(<SampleComponent />);
    const hiddenTextarea = screen.getByRole('textbox', { hidden: true });
    expect(hiddenTextarea).toBeDefined();
  });

  it('removes the visually hidden textarea on unmount', () => {
    const { unmount } = render(<SampleComponent />);
    expect(screen.getByRole('textbox', { hidden: true })).toBeDefined();

    unmount();
    // queryByRole doesn't fail when the element isn't defined
    expect(screen.queryByRole('textbox', { hidden: true })).not.toBeInTheDocument();
  });
});

describe('useWindowResizeListener', () => {
  it('adds a resize listener to the window', () => {
    render(<SampleComponent />);
    window.dispatchEvent(new Event('resize'));
    expect(resizeMock).toHaveBeenCalledTimes(1);
  });
});
