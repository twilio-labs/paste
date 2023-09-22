import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { PaginationArrow, PaginationNumber } from '../src';
import { ArrowsPageLabelExample, NumbersExample, NumbersPageLabelExample } from '../stories/index.stories';

describe('Pagination', () => {
  it('should render a list of pagination numbers with a page label', () => {
    const { getByText } = render(<NumbersPageLabelExample />);
    expect(getByText('Page 5 of 10')).toBeDefined();
  });

  it('should render pagination arrow with correct previous aria-label', () => {
    const { getByTitle } = render(<PaginationArrow label="Go to previous page" variant="back" />);
    expect(getByTitle('Go to previous page')).toBeDefined();
  });

  it('should render pagination arrow with correct next aria-label', () => {
    const { getByTitle } = render(<PaginationArrow variant="forward" label="Go to next page" />);
    expect(getByTitle('Go to next page')).toBeDefined();
  });

  it('should render pagination arrow with a hidden visible label', () => {
    const { getByText } = render(
      <PaginationArrow label="Go to previous page" variant="back" visibleLabel="Previous" />,
    );
    expect(getByText('Previous')).toBeDefined();
    expect(getByText('Previous').getAttribute('aria-hidden')).toBeTruthy();
  });

  it('should render a hidden pagination arrow', () => {
    const { getByRole } = render(<PaginationArrow label="Go to previous page" variant="back" disabled />);
    expect(getByRole('button', { hidden: true }).getAttribute('aria-hidden')).toBeTruthy();
    expect(getByRole('button', { hidden: true })).toHaveStyleRule('visibility', 'hidden');
    expect(getByRole('button', { hidden: true })).toHaveStyleRule('opacity', '0');
  });

  it('should render pagination arrow as a button', () => {
    const { getByRole } = render(<PaginationArrow label="Go to previous" variant="back" />);
    expect(getByRole('button')).toBeDefined();
  });

  it('should render pagination arrow as an anchor', () => {
    const { getByRole } = render(<PaginationArrow as="a" href="#" label="Go to previous" variant="back" />);
    expect(getByRole('link')).toBeDefined();
    expect(getByRole('link').getAttribute('href')).toEqual('#');
  });

  it('should render arrow pagination with correct aria-label', () => {
    const { getByRole } = render(<ArrowsPageLabelExample staticLabel="pagination navigation" />);
    expect(getByRole('navigation').getAttribute('aria-label')).toBe('pagination navigation');
  });

  it('should render pagination number as a button', () => {
    const { getByRole } = render(<PaginationNumber label="Go to page 10">10</PaginationNumber>);
    expect(getByRole('button')).toBeDefined();
  });

  it('should render pagination number as an anchor', () => {
    const { getByRole } = render(
      <PaginationNumber label="Go to page 10" as="a" href="#">
        10
      </PaginationNumber>,
    );
    expect(getByRole('link')).toBeDefined();
    expect(getByRole('link').getAttribute('href')).toEqual('#');
  });

  it('should render pagination number with correct aria-label', () => {
    const { getByRole } = render(<PaginationNumber label="Go to page 10">10</PaginationNumber>);
    expect(getByRole('button').getAttribute('aria-label')).toBe('Go to page 10');
  });

  it('should render pagination number with a hidden visible child', () => {
    const { getByText } = render(<PaginationNumber label="Go to page 10">10</PaginationNumber>);
    expect(getByText('10').getAttribute('aria-hidden')).toBeTruthy();
  });

  it('should render pagination number with correct aria-current', () => {
    const { getByRole } = render(
      <PaginationNumber label="Go to page 10" isCurrent>
        10
      </PaginationNumber>,
    );
    expect(getByRole('button').getAttribute('aria-current')).toBeTruthy();
  });

  describe('pagination arrow event handlers', () => {
    it('Should call the appropriate event handlers', () => {
      const onClickMock: jest.Mock = jest.fn();
      const onMouseDownMock: jest.Mock = jest.fn();
      const onMouseUpMock: jest.Mock = jest.fn();
      const onMouseEnterMock: jest.Mock = jest.fn();
      const onMouseLeaveMock: jest.Mock = jest.fn();
      const onFocusMock: jest.Mock = jest.fn();
      const onBlurMock: jest.Mock = jest.fn();

      const { getByTestId } = render(
        <PaginationArrow
          variant="forward"
          label="Go to next"
          data-testid="arrow-button"
          onClick={onClickMock}
          onMouseDown={onMouseDownMock}
          onMouseUp={onMouseUpMock}
          onMouseEnter={onMouseEnterMock}
          onMouseLeave={onMouseLeaveMock}
          onFocus={onFocusMock}
          onBlur={onBlurMock}
        >
          Previous
        </PaginationArrow>,
      );

      fireEvent.click(getByTestId('arrow-button'));
      expect(onClickMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseDown(getByTestId('arrow-button'));
      expect(onMouseDownMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseUp(getByTestId('arrow-button'));
      expect(onMouseUpMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseEnter(getByTestId('arrow-button'));
      expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseLeave(getByTestId('arrow-button'));
      expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
      fireEvent.focus(getByTestId('arrow-button'));
      expect(onFocusMock).toHaveBeenCalledTimes(1);
      fireEvent.blur(getByTestId('arrow-button'));
      expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('pagination number event handlers', () => {
    it('Should call the appropriate event handlers', () => {
      const onClickMock: jest.Mock = jest.fn();
      const onMouseDownMock: jest.Mock = jest.fn();
      const onMouseUpMock: jest.Mock = jest.fn();
      const onMouseEnterMock: jest.Mock = jest.fn();
      const onMouseLeaveMock: jest.Mock = jest.fn();
      const onFocusMock: jest.Mock = jest.fn();
      const onBlurMock: jest.Mock = jest.fn();

      const { getByTestId } = render(
        <PaginationNumber
          label="Go to page 1"
          data-testid="number-button"
          onClick={onClickMock}
          onMouseDown={onMouseDownMock}
          onMouseUp={onMouseUpMock}
          onMouseEnter={onMouseEnterMock}
          onMouseLeave={onMouseLeaveMock}
          onFocus={onFocusMock}
          onBlur={onBlurMock}
        >
          1
        </PaginationNumber>,
      );

      fireEvent.click(getByTestId('number-button'));
      expect(onClickMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseDown(getByTestId('number-button'));
      expect(onMouseDownMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseUp(getByTestId('number-button'));
      expect(onMouseUpMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseEnter(getByTestId('number-button'));
      expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseLeave(getByTestId('number-button'));
      expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
      fireEvent.focus(getByTestId('number-button'));
      expect(onFocusMock).toHaveBeenCalledTimes(1);
      fireEvent.blur(getByTestId('number-button'));
      expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
  });
});
