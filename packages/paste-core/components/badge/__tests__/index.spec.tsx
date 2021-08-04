import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import {matchers} from 'jest-emotion';

import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Badge} from '../src';
import {getVariantStyles, hasValidButtonVariantProps, hasValidAnchorVariantProps} from '../src/utils';
import {useFocusableVariants, useResizeChildIcons} from '../src/hooks';

expect.extend(matchers);

describe('Badge', () => {
  describe('Utils', () => {
    describe('getVariantStyles', () => {
      it('should return the correct tokens when variant is "success"', () => {
        expect(getVariantStyles('success')).toEqual({
          backgroundColor: 'colorBackgroundSuccessWeakest',
          color: 'colorTextSuccess',
        });
      });

      it('should return the correct tokens when variant is "info"', () => {
        expect(getVariantStyles('info')).toEqual({
          backgroundColor: 'colorBackgroundNeutralWeakest',
          color: 'colorTextNeutral',
        });
      });

      it('should return the correct tokens when variant is "error"', () => {
        expect(getVariantStyles('error')).toEqual({
          backgroundColor: 'colorBackgroundErrorWeakest',
          color: 'colorTextError',
        });
      });

      it('should return the correct tokens when variant is "warning"', () => {
        expect(getVariantStyles('warning')).toEqual({
          backgroundColor: 'colorBackgroundWarningWeakest',
          color: 'colorTextWarningStrong',
        });
      });

      it('should return the correct tokens when variant is "new"', () => {
        expect(getVariantStyles('new')).toEqual({
          backgroundColor: 'colorBackgroundNew',
          color: 'colorTextNew',
        });
      });

      it('should return the correct tokens when variant is "default"', () => {
        expect(getVariantStyles('default')).toEqual({
          backgroundColor: 'colorBackground',
          color: 'colorTextWeak',
        });
      });
    });

    describe('hasValidButtonVariantProps', () => {
      it('should return "true" if props.as is "button" and the props.onClick is a function', () => {
        expect(hasValidButtonVariantProps({as: 'button', onClick: () => null})).toBe(true);
      });
      it('should return "false" if props.as is not "button" and the props.onClick is a function', () => {
        expect(hasValidButtonVariantProps({as: 'a', onClick: () => null})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidButtonVariantProps({as: true, onClick: () => null})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidButtonVariantProps({as: 10, onClick: () => null})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidButtonVariantProps({as: 'div', onClick: () => null})).toBe(false);
      });
      it('should return "false" if props.as is "button" and the props.onClick is not a function', () => {
        expect(hasValidButtonVariantProps({as: 'button', onClick: true})).toBe(false);
        expect(hasValidButtonVariantProps({as: 'button', onClick: undefined})).toBe(false);
        expect(hasValidButtonVariantProps({as: 'button', onClick: null})).toBe(false);
        expect(hasValidButtonVariantProps({as: 'button', onClick: {}})).toBe(false);
        expect(hasValidButtonVariantProps({as: 'button', onClick: 'test'})).toBe(false);
      });
      it('should return "false" if props.as is not "button" and the props.onClick is not a function', () => {
        expect(hasValidButtonVariantProps({as: 'a', onClick: true})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidButtonVariantProps({as: true, onClick: undefined})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidButtonVariantProps({as: 10, onClick: null})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidButtonVariantProps({as: 'div', onClick: {}})).toBe(false);
        expect(hasValidButtonVariantProps({as: null, onClick: 'test'})).toBe(false);
      });
    });

    describe('hasValidAnchorVariantProps', () => {
      it('should return "true" if props.as is "a" and the props.href is a string', () => {
        expect(hasValidAnchorVariantProps({as: 'a', href: '#test'})).toBe(true);
      });
      it('should return "false" if props.as is not "a" and the props.href is a string', () => {
        expect(hasValidAnchorVariantProps({as: 'button', href: '#test'})).toBe(false);
        expect(hasValidAnchorVariantProps({as: undefined, href: '#test'})).toBe(false);
        expect(hasValidAnchorVariantProps({as: null, href: '#test'})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidAnchorVariantProps({as: true, href: '#test'})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidAnchorVariantProps({as: 10, href: '#test'})).toBe(false);
      });
      it('should return "false" if props.as is "a" and the props.href is not a string', () => {
        expect(hasValidAnchorVariantProps({as: 'a', href: undefined})).toBe(false);
        expect(hasValidAnchorVariantProps({as: 'a', href: null})).toBe(false);
        expect(hasValidAnchorVariantProps({as: 'a', href: () => null})).toBe(false);
        expect(hasValidAnchorVariantProps({as: 'a', href: true})).toBe(false);
      });
      it('should return "false" if props.as is not "a" and the props.href is not a string', () => {
        expect(hasValidAnchorVariantProps({as: 'button', href: undefined})).toBe(false);
        expect(hasValidAnchorVariantProps({as: undefined, href: undefined})).toBe(false);
        expect(hasValidAnchorVariantProps({as: null, href: undefined})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidAnchorVariantProps({as: true, href: undefined})).toBe(false);
        // @ts-expect-error test case
        expect(hasValidAnchorVariantProps({as: 10, href: undefined})).toBe(false);
      });
    });
  });

  describe('Hooks', () => {
    describe('useFocusableVariants', () => {
      it('should return the focusable variant style props, no span props, and a button wrapper when "as" is "button" and "onClick" is a function', () => {
        const {result} = renderHook(() => useFocusableVariants({as: 'button', onClick: () => null}));

        const {wrapper: Wrapper, ...rest} = result.current;
        expect(rest).toEqual({
          styleProps: {
            textDecoration: 'underline',
            cursor: 'pointer',
            _hover: {textDecoration: 'none'},
            _focus: {boxShadow: 'shadowFocus', textDecoration: 'none'},
          },
          spanProps: {},
        });

        const {getByRole, getByText} = render(<Wrapper>Test</Wrapper>);
        expect(getByRole('button')).toBeInTheDocument();
        expect(getByText('Test')).toBeInTheDocument();
      });

      it('should return the focusable variant style props, no span props, and an anchor wrapper when "as" is "a" and "href" is a string', () => {
        const {result} = renderHook(() => useFocusableVariants({as: 'a', href: '#test', onClick: () => null}));

        const {wrapper: Wrapper, ...rest} = result.current;
        expect(rest).toEqual({
          styleProps: {
            textDecoration: 'underline',
            cursor: 'pointer',
            _hover: {textDecoration: 'none'},
            _focus: {boxShadow: 'shadowFocus', textDecoration: 'none'},
          },
          spanProps: {},
        });

        const {getByRole, getByText} = render(<Wrapper>Test</Wrapper>);

        expect(getByRole('link')).toBeInTheDocument();
        expect(getByText('Test')).toBeInTheDocument();
      });

      it('should return an props as span props, an empty style props object, and an react fragment wrapper by default', () => {
        const {result} = renderHook(() => useFocusableVariants({'data-testid': 'test'}));

        const {wrapper: Wrapper, ...rest} = result.current;
        expect(rest).toEqual({
          styleProps: {},
          spanProps: {
            'data-testid': 'test',
          },
        });

        const {queryByRole, getByText} = render(<Wrapper>Test</Wrapper>);

        expect(queryByRole('link')).not.toBeInTheDocument();
        expect(queryByRole('a')).not.toBeInTheDocument();
        expect(getByText('Test')).toBeInTheDocument();
      });
    });

    describe('useResizeChildIcons', () => {
      it('should return return no modifications when child icon size is default', () => {
        const {result} = renderHook(() => useResizeChildIcons(['test', <InformationIcon decorative />]));

        const icon = result.current[1];

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
      it('should not render badge as button if "as" is equal to "button", but "onClick" is "undefined"', () => {
        const {queryByRole} = render(
          <Badge as="button" variant="success">
            Not button
          </Badge>
        );
        const buttonQueryResult = queryByRole('button');

        expect(buttonQueryResult).not.toBeInTheDocument();
      });

      it('should not render badge as button if "onClick" is defined as a function, but "as" is not equal to "button"', () => {
        const {queryByRole} = render(
          <Badge onClick={() => null} variant="success">
            Not button
          </Badge>
        );
        const buttonQueryResult = queryByRole('button');

        expect(buttonQueryResult).not.toBeInTheDocument();
      });

      it('should render badge as button only if "onClick" is defined as a function and "as" is "button"', () => {
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
      it('should handle onclick event', () => {
        const onClickMock: jest.Mock = jest.fn();
        const {getByRole} = render(
          <Badge as="a" href="#" onClick={onClickMock} variant="success">
            Anchor
          </Badge>
        );

        const anchor = getByRole('link');

        fireEvent.click(anchor);

        expect(onClickMock).toBeCalledTimes(1);
      });

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
      it('should not render badge as anchor if "as" is "a" but "href" is not present', () => {
        const {queryByRole} = render(
          <Badge as="a" data-testid="invalid-anchor-1" variant="success">
            Not anchor
          </Badge>
        );
        const anchorQueryResult = queryByRole('link');

        expect(anchorQueryResult).not.toBeInTheDocument();
      });

      it('should not render badge as anchor if "href" is present but "as" is not "a"', () => {
        const {queryByRole} = render(
          <Badge href="#test" variant="success">
            Not anchor
          </Badge>
        );
        const anchorQueryResult = queryByRole('link');

        expect(anchorQueryResult).not.toBeInTheDocument();
      });

      it('should render badge as anchor only "href" is a string and "as" is "anchor"', () => {
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
      it('should render correctly when variant is "default"', () => {
        const {getByTestId} = render(
          <Badge data-testid="badge-1" variant="default">
            test
          </Badge>
        );
        const badgeElement = getByTestId('badge-1');

        expect(badgeElement).toHaveStyleRule('color', 'colorTextWeak');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackground');
      });

      it('should render correctly when variant is "new"', () => {
        const {getByTestId} = render(
          <Badge data-testid="badge-2" variant="new">
            test
          </Badge>
        );
        const badgeElement = getByTestId('badge-2');

        expect(badgeElement).toHaveStyleRule('color', 'colorTextNew');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackgroundNew');
      });

      it('should render correctly when variant is "info"', () => {
        const {getByTestId} = render(
          <Badge data-testid="badge-3" variant="info">
            test
          </Badge>
        );
        const badgeElement = getByTestId('badge-3');

        expect(badgeElement).toHaveStyleRule('color', 'colorTextNeutral');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackgroundNeutralWeakest');
      });

      it('should render correctly when variant is "warning"', () => {
        const {getByTestId} = render(
          <Badge data-testid="badge-4" variant="warning">
            test
          </Badge>
        );
        const badgeElement = getByTestId('badge-4');

        expect(badgeElement).toHaveStyleRule('color', 'colorTextWarningStrong');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackgroundWarningWeakest');
      });

      it('should render correctly when variant is "error"', () => {
        const {getByTestId} = render(
          <Badge data-testid="badge-5" variant="error">
            test
          </Badge>
        );
        const badgeElement = getByTestId('badge-5');

        expect(badgeElement).toHaveStyleRule('color', 'colorTextError');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackgroundErrorWeakest');
      });

      it('should render correctly when variant is "success"', () => {
        const {getByTestId} = render(
          <Badge data-testid="badge-6" variant="success">
            test
          </Badge>
        );
        const badgeElement = getByTestId('badge-6');

        expect(badgeElement).toHaveStyleRule('color', 'colorTextSuccess');
        expect(badgeElement).toHaveStyleRule('background-color', 'colorBackgroundSuccessWeakest');
      });
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Badge data-testid="badge-1" variant="default">
          test
        </Badge>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
