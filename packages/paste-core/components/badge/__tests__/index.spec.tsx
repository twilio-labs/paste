import * as React from 'react';
import { render, fireEvent, screen, renderHook } from '@testing-library/react';
import { InformationIcon } from '@twilio-paste/icons/esm/InformationIcon';

import { Badge } from '../src';
import { useResizeChildIcons } from '../src/hooks';

type NamedChild = React.ReactElement<Record<string, any>, React.NamedExoticComponent>;

describe('Badge', () => {
  describe('Hooks', () => {
    describe('useResizeChildIcons', () => {
      it('should return return no modifications when child icon size is default', () => {
        const { result } = renderHook(() => useResizeChildIcons(['test', <InformationIcon key={1} decorative />]));

        const icon = (result.current as ArrayLike<NamedChild>)[1];

        expect(icon.type.displayName).toEqual('InformationIcon');
        expect(icon.props.size).toEqual('sizeIcon10');
      });

      it('should return the correct modifications when child icon size is not the default', () => {
        const { result } = renderHook(() =>
          useResizeChildIcons(['test', <InformationIcon key={1} size="sizeIcon40" decorative />]),
        );

        const icon = (result.current as ArrayLike<NamedChild>)[1];

        expect(icon.type.displayName).toEqual('InformationIcon');
        expect(icon.props.size).toEqual('sizeIcon10');
      });
    });
  });

  describe('Refs', () => {
    it('should set ref to a span element when rendered as a "span"', () => {
      const badgeRef = React.createRef<HTMLElement>();
      render(
        <Badge as="span" variant="neutral" ref={badgeRef}>
          Neutral
        </Badge>,
      );
      expect(badgeRef?.current?.tagName).toEqual('SPAN');
    });
    it('should set ref to a button element when rendered as a "button"', () => {
      const badgeRef = React.createRef<HTMLElement>();
      render(
        <Badge as="button" onClick={() => {}} variant="neutral" ref={badgeRef}>
          Neutral
        </Badge>,
      );
      expect(badgeRef?.current?.tagName).toEqual('BUTTON');
    });
    it('should set ref to an anchor element when rendered as a "a"', () => {
      const badgeRef = React.createRef<HTMLElement>();
      render(
        <Badge as="a" href="#" variant="neutral" ref={badgeRef}>
          Neutral
        </Badge>,
      );
      expect(badgeRef?.current?.tagName).toEqual('A');
    });
  });

  describe('Badge as button', () => {
    describe('Event handlers', () => {
      it('should handle onclick event', () => {
        const onClickMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="button" onClick={onClickMock} variant="success">
            Button
          </Badge>,
        );

        const button = getByRole('button');

        fireEvent.click(button);

        expect(onClickMock).toBeCalledTimes(1);
      });

      it('should handle onmouseup event', () => {
        const onMouseUpMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="button" onClick={() => null} onMouseUp={onMouseUpMock} variant="success">
            Button
          </Badge>,
        );

        const button = getByRole('button');

        fireEvent.mouseUp(button);

        expect(onMouseUpMock).toBeCalledTimes(1);
      });
      it('should handle onmouseenter event', () => {
        const onMouseEnterMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="button" onClick={() => null} onMouseEnter={onMouseEnterMock} variant="success">
            Button
          </Badge>,
        );

        const button = getByRole('button');

        fireEvent.mouseEnter(button);

        expect(onMouseEnterMock).toBeCalledTimes(1);
      });

      it('should handle onmouseleave event', () => {
        const onMouseLeaveMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="button" onClick={() => null} onMouseLeave={onMouseLeaveMock} variant="success">
            Button
          </Badge>,
        );

        const button = getByRole('button');

        fireEvent.mouseLeave(button);

        expect(onMouseLeaveMock).toBeCalledTimes(1);
      });

      it('should handle onfocus event', () => {
        const onFocusMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="button" onClick={() => null} onFocus={onFocusMock} variant="success">
            Button
          </Badge>,
        );

        const button = getByRole('button');

        fireEvent.focus(button);

        expect(onFocusMock).toBeCalledTimes(1);
      });

      it('should handle onblur event', () => {
        const onBlurMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="button" onClick={() => null} onBlur={onBlurMock} variant="success">
            Button
          </Badge>,
        );

        const button = getByRole('button');

        fireEvent.blur(button);

        expect(onBlurMock).toBeCalledTimes(1);
      });

      it('should handle onmousedown event', () => {
        const onMouseDownMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="button" onClick={() => null} onMouseDown={onMouseDownMock} variant="success">
            Button
          </Badge>,
        );

        const button = getByRole('button');

        fireEvent.mouseDown(button);

        expect(onMouseDownMock).toBeCalledTimes(1);
      });
    });

    describe('Render', () => {
      it('should render badge as button if "as" is "button"', () => {
        const { getByRole } = render(
          <Badge as="button" onClick={() => null} variant="success">
            Button
          </Badge>,
        );
        expect(getByRole('button')).toBeInTheDocument();
      });

      it('should render badge as button with correct styles', () => {
        render(
          <Badge as="button" onClick={() => null} variant="success">
            Button
          </Badge>,
        );

        const badgeElement = screen.getByRole('button');

        expect(badgeElement).toHaveStyleRule('box-shadow', 'shadowFocus', { target: ':focus' });
        expect(badgeElement).toHaveStyleRule('box-shadow', 'none', { target: ':hover' });
      });
    });
  });

  describe('Badge as anchor', () => {
    describe('Event handlers', () => {
      it('should handle mouseup event', () => {
        const onMouseUpMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="a" href="#" onMouseUp={onMouseUpMock} variant="success">
            Anchor
          </Badge>,
        );

        const anchor = getByRole('link');

        fireEvent.mouseUp(anchor);

        expect(onMouseUpMock).toBeCalledTimes(1);
      });
      it('should handle mouseenter event', () => {
        const onMouseEnterMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="a" href="#" onMouseEnter={onMouseEnterMock} variant="success">
            Anchor
          </Badge>,
        );

        const anchor = getByRole('link');

        fireEvent.mouseEnter(anchor);

        expect(onMouseEnterMock).toBeCalledTimes(1);
      });

      it('should mouseleave event', () => {
        const onMouseLeaveMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="a" href="#" onMouseLeave={onMouseLeaveMock} variant="success">
            Anchor
          </Badge>,
        );

        const anchor = getByRole('link');

        fireEvent.mouseLeave(anchor);

        expect(onMouseLeaveMock).toBeCalledTimes(1);
      });

      it('should handle onblur event', () => {
        const onBlurMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="a" href="#" onBlur={onBlurMock} variant="success">
            Anchor
          </Badge>,
        );

        const anchor = getByRole('link');

        fireEvent.blur(anchor);

        expect(onBlurMock).toBeCalledTimes(1);
      });

      it('should handle onmousedown event', () => {
        const onMouseDownMock: jest.Mock = jest.fn();
        const { getByRole } = render(
          <Badge as="a" href="#" onMouseDown={onMouseDownMock} variant="success">
            Anchor
          </Badge>,
        );

        const anchor = getByRole('link');

        fireEvent.mouseDown(anchor);

        expect(onMouseDownMock).toBeCalledTimes(1);
      });
    });

    describe('Render', () => {
      it('should render badge as anchor if "as" is "anchor"', () => {
        const { getByRole } = render(
          <Badge as="a" href="#test" variant="success">
            Anchor
          </Badge>,
        );
        expect(getByRole('link')).toBeInTheDocument();
      });

      it('should render badge as anchor with correct styles', () => {
        render(
          <Badge href="#test" as="a" variant="success">
            Anchor
          </Badge>,
        );

        const badgeElement = screen.getByRole('link');

        expect(badgeElement).toHaveStyleRule('text-decoration', 'none', { target: ':hover' });
        expect(badgeElement).toHaveStyleRule('box-shadow', 'shadowFocus', { target: ':focus' });
        expect(badgeElement).toHaveStyleRule('text-decoration', 'none', { target: ':focus' });
      });
    });
  });

  describe('Badge as span', () => {
    describe('Render', () => {
      it('should render as a span element if as is "span"', () => {
        const { getByTestId } = render(
          <Badge as="span" variant="neutral" data-testid="badge-6">
            test
          </Badge>,
        );
        const badgeElement = getByTestId('badge-6');

        expect(badgeElement.tagName).toEqual('SPAN');
      });
    });
  });
});
