import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';

import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axe from '../../../../../.jest/axe-helper';
import {Badge} from '../src';
import type {NamedChild} from '../src/types';
import {isFocusableElement, getBadgeSpanProps} from '../src/utils';
import {useResizeChildIcons} from '../src/hooks';

describe('Badge', () => {
  describe('Utils', () => {
    describe('isFocusableElement', () => {
      it('should return true for a button', () => {
        expect(isFocusableElement({as: 'button'})).toBeTruthy();
      });
      it('should return true for an anchor', () => {
        expect(isFocusableElement({as: 'a'})).toBeTruthy();
      });
      it('should return false for a span', () => {
        expect(isFocusableElement({as: 'span'})).toBeFalsy();
      });
    });

    describe('getBadgeSpanProps', () => {
      it('should return safe props to spread on the badge span when it is a span element', () => {
        expect(
          // @ts-expect-error can't pass style props in typescript but you can in JS and we need to prove they get removed
          getBadgeSpanProps({as: 'span', 'aria-labelledby': 'some-id', backgroundColor: 'colorBackgroundSuccess'})
        ).toEqual({
          'aria-labelledby': 'some-id',
          as: 'span',
        });
      });
      it('should return no props to spread on the badge span when it is a button or anchor element as they should be spread on the parent', () => {
        expect(
          // @ts-expect-error can't pass style props in typescript but you can in JS and we need to prove they get removed
          getBadgeSpanProps({as: 'button', 'aria-labelledby': 'some-id', backgroundColor: 'colorBackgroundSuccess'})
        ).toEqual({});
        expect(
          // @ts-expect-error can't pass style props in typescript but you can in JS and we need to prove they get removed
          getBadgeSpanProps({as: 'a', 'aria-labelledby': 'some-id', backgroundColor: 'colorBackgroundSuccess'})
        ).toEqual({});
      });
    });
  });

  describe('Hooks', () => {
    describe('useResizeChildIcons', () => {
      it('should return return no modifications when child icon size is default', () => {
        const {result} = renderHook(() => useResizeChildIcons(['test', <InformationIcon decorative />]));

        const icon = (result.current as ArrayLike<NamedChild>)[1];

        expect(icon.type.displayName).toEqual('InformationIcon');
        expect(icon.props.size).toEqual('sizeIcon10');
      });

      it('should return the correct modifications when child icon size is not the default', () => {
        const {result} = renderHook(() =>
          useResizeChildIcons(['test', <InformationIcon size="sizeIcon40" decorative />])
        );

        const icon = result.current[1];

        expect(icon.type.displayName).toEqual('InformationIcon');
        expect(icon.props.size).toEqual('sizeIcon10');
      });
    });
  });

  describe('Badge as button', () => {
    describe('Event handlers', () => {
      it('should handle onclick event', () => {
        const onClickMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="button" onClick={onClickMock} variant="success">
            Button
          </Badge>
        );

        const button = getByRole('button');

        fireEvent.click(button);

        expect(onClickMock).toBeCalledTimes(1);
      });

      it('should handle onmouseup event', () => {
        const onMouseUpMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="button" onClick={() => null} onMouseUp={onMouseUpMock} variant="success">
            Button
          </Badge>
        );

        const button = getByRole('button');

        fireEvent.mouseUp(button);

        expect(onMouseUpMock).toBeCalledTimes(1);
      });
      it('should handle onmouseenter event', () => {
        const onMouseEnterMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="button" onClick={() => null} onMouseEnter={onMouseEnterMock} variant="success">
            Button
          </Badge>
        );

        const button = getByRole('button');

        fireEvent.mouseEnter(button);

        expect(onMouseEnterMock).toBeCalledTimes(1);
      });

      it('should handle onmouseleave event', () => {
        const onMouseLeaveMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="button" onClick={() => null} onMouseLeave={onMouseLeaveMock} variant="success">
            Button
          </Badge>
        );

        const button = getByRole('button');

        fireEvent.mouseLeave(button);

        expect(onMouseLeaveMock).toBeCalledTimes(1);
      });

      it('should handle onfocus event', () => {
        const onFocusMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="button" onClick={() => null} onFocus={onFocusMock} variant="success">
            Button
          </Badge>
        );

        const button = getByRole('button');

        fireEvent.focus(button);

        expect(onFocusMock).toBeCalledTimes(1);
      });

      it('should handle onblur event', () => {
        const onBlurMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="button" onClick={() => null} onBlur={onBlurMock} variant="success">
            Button
          </Badge>
        );

        const button = getByRole('button');

        fireEvent.blur(button);

        expect(onBlurMock).toBeCalledTimes(1);
      });

      it('should handle onmousedown event', () => {
        const onMouseDownMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="button" onClick={() => null} onMouseDown={onMouseDownMock} variant="success">
            Button
          </Badge>
        );

        const button = getByRole('button');

        fireEvent.mouseDown(button);

        expect(onMouseDownMock).toBeCalledTimes(1);
      });
    });

    describe('Render', () => {
      it('should render badge as button if "as" is "button"', () => {
        const {getByRole} = render(
          <Badge as="button" onClick={() => null} variant="success">
            Button
          </Badge>
        );
        expect(getByRole('button')).toBeInTheDocument();
      });

      it('should render badge as button with correct styles', () => {
        const {container} = render(
          <Badge as="button" onClick={() => null} variant="success">
            Button
          </Badge>
        );

        const badgeElement = container.querySelector(':nth-child(1) > span > span');

        // @TODO make sure all the style rules are accounted for here.
        expect(badgeElement).toHaveStyleRule('color', 'colorTextSuccess');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackgroundSuccessWeakest');
        expect(badgeElement).toHaveStyleRule('text-decoration', 'underline');
        expect(badgeElement).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});
        expect(badgeElement).toHaveStyleRule('box-shadow', 'shadowFocus', {target: ':focus'});
        expect(badgeElement).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
      });
    });
  });

  describe('Badge as anchor', () => {
    describe('Event handlers', () => {
      it('should handle mouseup event', () => {
        const onMouseUpMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="a" href="#" onMouseUp={onMouseUpMock} variant="success">
            Anchor
          </Badge>
        );

        const anchor = getByRole('link');

        fireEvent.mouseUp(anchor);

        expect(onMouseUpMock).toBeCalledTimes(1);
      });
      it('should handle mouseenter event', () => {
        const onMouseEnterMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="a" href="#" onMouseEnter={onMouseEnterMock} variant="success">
            Anchor
          </Badge>
        );

        const anchor = getByRole('link');

        fireEvent.mouseEnter(anchor);

        expect(onMouseEnterMock).toBeCalledTimes(1);
      });

      it('should mouseleave event', () => {
        const onMouseLeaveMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="a" href="#" onMouseLeave={onMouseLeaveMock} variant="success">
            Anchor
          </Badge>
        );

        const anchor = getByRole('link');

        fireEvent.mouseLeave(anchor);

        expect(onMouseLeaveMock).toBeCalledTimes(1);
      });

      it('should handle onblur event', () => {
        const onBlurMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="a" href="#" onBlur={onBlurMock} variant="success">
            Anchor
          </Badge>
        );

        const anchor = getByRole('link');

        fireEvent.blur(anchor);

        expect(onBlurMock).toBeCalledTimes(1);
      });

      it('should handle onmousedown event', () => {
        const onMouseDownMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="a" href="#" onMouseDown={onMouseDownMock} variant="success">
            Anchor
          </Badge>
        );

        const anchor = getByRole('link');

        fireEvent.mouseDown(anchor);

        expect(onMouseDownMock).toBeCalledTimes(1);
      });
    });

    describe('Render', () => {
      it('should render badge as anchor if "as" is "anchor"', () => {
        const {getByRole} = render(
          <Badge as="a" href="#test" variant="success">
            Anchor
          </Badge>
        );
        expect(getByRole('link')).toBeInTheDocument();
      });

      it('should render badge as anchor with correct styles', () => {
        const {container} = render(
          <Badge href="#test" as="a" variant="success">
            Not anchor
          </Badge>
        );

        const badgeElement = container.querySelector(':nth-child(1) > span > span');

        expect(badgeElement).toHaveStyleRule('color', 'colorTextSuccess');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackgroundSuccessWeakest');
        expect(badgeElement).toHaveStyleRule('text-decoration', 'underline');
        expect(badgeElement).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});
        expect(badgeElement).toHaveStyleRule('box-shadow', 'shadowFocus', {target: ':focus'});
        expect(badgeElement).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
      });
    });
  });

  describe('Badge as span', () => {
    describe('Render', () => {
      it('should render as a span element if as is "span"', () => {
        const {getByTestId} = render(
          <Badge as="span" variant="default" data-testid="badge-6">
            test
          </Badge>
        );
        const badgeElement = getByTestId('badge-6');

        expect(badgeElement.tagName).toEqual('SPAN');
      });
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <>
          <Badge as="span" data-testid="badge-1" variant="default">
            test
          </Badge>
          <Badge as="span" data-testid="badge-1" variant="success">
            test
          </Badge>
          <Badge as="span" data-testid="badge-1" variant="warning">
            test
          </Badge>
          <Badge as="span" data-testid="badge-1" variant="error">
            test
          </Badge>
          <Badge as="span" data-testid="badge-1" variant="info">
            test
          </Badge>
          <Badge as="span" data-testid="badge-1" variant="new">
            test
          </Badge>

          <Badge as="a" href="#" data-testid="badge-1" variant="default">
            test
          </Badge>
          <Badge as="a" href="#" data-testid="badge-1" variant="success">
            test
          </Badge>
          <Badge as="a" href="#" data-testid="badge-1" variant="warning">
            test
          </Badge>
          <Badge as="a" href="#" data-testid="badge-1" variant="error">
            test
          </Badge>
          <Badge as="a" href="#" data-testid="badge-1" variant="info">
            test
          </Badge>
          <Badge as="a" href="#" data-testid="badge-1" variant="new">
            test
          </Badge>

          <Badge as="button" onClick={() => null} data-testid="badge-1" variant="default">
            test
          </Badge>
          <Badge as="button" onClick={() => null} data-testid="badge-1" variant="success">
            test
          </Badge>
          <Badge as="button" onClick={() => null} data-testid="badge-1" variant="warning">
            test
          </Badge>
          <Badge as="button" onClick={() => null} data-testid="badge-1" variant="error">
            test
          </Badge>
          <Badge as="button" onClick={() => null} data-testid="badge-1" variant="info">
            test
          </Badge>
          <Badge as="button" onClick={() => null} data-testid="badge-1" variant="new">
            test
          </Badge>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
