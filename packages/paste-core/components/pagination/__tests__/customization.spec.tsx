import { render } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import * as React from 'react';

import { NumbersAndLabel, WrapperAndArrows } from '../stories/customization.stories';

const paginationStyles = { fontSize: 'fontSize60', fontWeight: 'fontWeightBold' } as PasteCustomCSS;
const getCustomizedStyles = (prefix = 'PAGINATION'): { [key: string]: any } => ({
  [`${prefix}`]: { borderColor: 'colorBorder', borderStyle: 'solid', borderWidth: 'borderWidth10' },
  [`${prefix}_ITEMS`]: {
    borderColor: 'colorBorder',
    borderStyle: 'solid',
    borderWidth: 'borderWidth10',
    margin: 'space30',
  },
  [`${prefix}_ITEMS_ITEM`]: {
    borderColor: 'colorBorder',
    borderStyle: 'solid',
    borderWidth: 'borderWidth10',
    margin: 'space30',
  },
  [`${prefix}_ARROW_BUTTON`]: {
    backgroundColor: 'colorBackground',
    borderColor: 'colorBorder',
    borderStyle: 'solid',
    borderWidth: 'borderWidth10',
  },
  [`${prefix}_ARROW_ICON_WRAPPER`]: {
    padding: 'space40',
    size: 'size10',
  },
  [`${prefix}_ARROW_ICON`]: {
    size: 'size10',
  },
  [`${prefix}_ARROW_TEXT`]: {
    fontWeight: 'fontWeightBold',
    fontSize: 'fontSize50',
  },
  [`${prefix}_LABEL`]: paginationStyles,
  [`${prefix}_ELLIPSIS`]: paginationStyles,
  [`${prefix}_NUMBERS`]: paginationStyles,
  [`${prefix}_NUMBERS_ITEM`]: paginationStyles,
  [`${prefix}_NUMBER`]: paginationStyles,
  [`${prefix}_NUMBER_TEXT`]: paginationStyles,
});

describe('Customization for Pagination wrapper and arrows', () => {
  it('should set a element data attribute for the Pagination wrapper and arrows', () => {
    const { getByTestId } = render(<WrapperAndArrows />);
    const pagination = getByTestId('pagination');
    const paginationItems = getByTestId('pagination-items');
    const paginationBackArrow = getByTestId('pagination-back-arrow');

    expect(pagination.getAttribute('data-paste-element')).toEqual('PAGINATION');

    expect(paginationItems.getAttribute('data-paste-element')).toEqual('PAGINATION_ITEMS');
    expect((paginationItems.firstChild as HTMLElement).getAttribute('data-paste-element')).toEqual(
      'PAGINATION_ITEMS_ITEM',
    );

    expect(paginationBackArrow.getAttribute('data-paste-element')).toEqual('PAGINATION_ARROW_BUTTON');
    const backArrowChild = paginationBackArrow.firstChild as HTMLElement;
    expect(backArrowChild.getAttribute('data-paste-element')).toEqual('PAGINATION_ARROW_ICON_WRAPPER');
    const backArrowChildChild = backArrowChild.firstChild as HTMLElement;
    expect(backArrowChildChild.getAttribute('data-paste-element')).toEqual('PAGINATION_ARROW_ICON');
  });

  it('should set a custom element data attribute for Pagination wrapper and arrows', () => {
    const { getByTestId } = render(<WrapperAndArrows element="FOO" />);
    const pagination = getByTestId('pagination');
    const paginationItems = getByTestId('pagination-items');
    const paginationBackArrow = getByTestId('pagination-back-arrow');

    expect(pagination.getAttribute('data-paste-element')).toEqual('FOO');

    expect(paginationItems.getAttribute('data-paste-element')).toEqual('FOO_ITEMS');
    expect((paginationItems.firstChild as HTMLElement).getAttribute('data-paste-element')).toEqual('FOO_ITEMS_ITEM');

    expect(paginationBackArrow.getAttribute('data-paste-element')).toEqual('FOO_ARROW_BUTTON');
    const backArrowChild = paginationBackArrow.firstChild as HTMLElement;
    expect(backArrowChild.getAttribute('data-paste-element')).toEqual('FOO_ARROW_ICON_WRAPPER');
    const backArrowChildChild = backArrowChild.firstChild as HTMLElement;
    expect(backArrowChildChild.getAttribute('data-paste-element')).toEqual('FOO_ARROW_ICON');
  });

  it('should add custom styles to Pagination wrapper and arrows', (): void => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizedStyles()}>
        <WrapperAndArrows />
      </CustomizationProvider>,
    );

    const pagination = getByTestId('pagination');
    const paginationItems = getByTestId('pagination-items');
    const paginationBackArrow = getByTestId('pagination-back-arrow');

    expect(pagination).toHaveStyleRule('border-color', 'rgb(136, 145, 170)');
    expect(paginationItems).toHaveStyleRule('border-color', 'rgb(136, 145, 170)');
    expect(paginationBackArrow).toHaveStyleRule('border-color', 'rgb(136, 145, 170)');
  });

  it('should add custom styles to Pagination wrapper and arrows when a custom element data attribute is used', (): void => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizedStyles('FOO')}>
        <WrapperAndArrows element="FOO" />
      </CustomizationProvider>,
    );

    const pagination = getByTestId('pagination');
    const paginationItems = getByTestId('pagination-items');
    const paginationBackArrow = getByTestId('pagination-back-arrow');

    expect(pagination).toHaveStyleRule('border-color', 'rgb(136, 145, 170)');
    expect(paginationItems).toHaveStyleRule('border-color', 'rgb(136, 145, 170)');
    expect(paginationBackArrow).toHaveStyleRule('border-color', 'rgb(136, 145, 170)');
  });
});

describe('Customization for Pagination numbers and label', () => {
  it('should set a element data attribute for the Pagination numbers and label', () => {
    const { getByTestId } = render(<NumbersAndLabel />);
    const paginationNumbers = getByTestId('pagination-numbers');
    const paginationNumber = getByTestId('pagination-number');
    const paginationEllipsis = getByTestId('pagination-ellipsis');
    const paginationLabel = getByTestId('pagination-label');

    expect(paginationNumbers.getAttribute('data-paste-element')).toEqual('PAGINATION_NUMBERS');
    const numbersChild = paginationNumbers.firstChild as HTMLElement;
    expect(numbersChild.getAttribute('data-paste-element')).toEqual('PAGINATION_NUMBERS_ITEM');

    expect(paginationNumber.getAttribute('data-paste-element')).toEqual('PAGINATION_NUMBER');
    const numberChild = paginationNumber.firstChild as HTMLElement;
    expect(numberChild.getAttribute('data-paste-element')).toEqual('PAGINATION_NUMBER_TEXT');

    expect(paginationEllipsis.getAttribute('data-paste-element')).toEqual('PAGINATION_ELLIPSIS');
    expect(paginationLabel.getAttribute('data-paste-element')).toEqual('PAGINATION_LABEL');
  });

  it('should set a custom element data attribute for the Pagination numbers and label', () => {
    const { getByTestId } = render(<NumbersAndLabel element="FOO" />);
    const paginationNumbers = getByTestId('pagination-numbers');
    const paginationNumber = getByTestId('pagination-number');
    const paginationEllipsis = getByTestId('pagination-ellipsis');
    const paginationLabel = getByTestId('pagination-label');

    expect(paginationNumbers.getAttribute('data-paste-element')).toEqual('FOO_NUMBERS');
    const numbersChild = paginationNumbers.firstChild as HTMLElement;
    expect(numbersChild.getAttribute('data-paste-element')).toEqual('FOO_NUMBERS_ITEM');

    expect(paginationNumber.getAttribute('data-paste-element')).toEqual('FOO_NUMBER');
    const numberChild = paginationNumber.firstChild as HTMLElement;
    expect(numberChild.getAttribute('data-paste-element')).toEqual('FOO_NUMBER_TEXT');

    expect(paginationEllipsis.getAttribute('data-paste-element')).toEqual('FOO_ELLIPSIS');
    expect(paginationLabel.getAttribute('data-paste-element')).toEqual('FOO_LABEL');
  });

  it('should add custom styles to Pagination numbers and label', (): void => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizedStyles()}>
        <NumbersAndLabel />
      </CustomizationProvider>,
    );

    const paginationNumbers = getByTestId('pagination-numbers');
    const paginationNumber = getByTestId('pagination-number');
    const paginationEllipsis = getByTestId('pagination-ellipsis');
    const paginationLabel = getByTestId('pagination-label');

    expect(paginationNumbers).toHaveStyleRule('font-size', '1.25rem');
    expect(paginationNumber).toHaveStyleRule('font-size', '1.25rem');
    expect(paginationEllipsis).toHaveStyleRule('font-size', '1.25rem');
    expect(paginationLabel).toHaveStyleRule('font-size', '1.25rem');
  });

  it('should add custom styles to Pagination numbers and label when a custom element data attribute is used', (): void => {
    const { getByTestId } = render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizedStyles('FOO')}>
        <NumbersAndLabel element="FOO" />
      </CustomizationProvider>,
    );

    const paginationNumbers = getByTestId('pagination-numbers');
    const paginationNumber = getByTestId('pagination-number');
    const paginationEllipsis = getByTestId('pagination-ellipsis');
    const paginationLabel = getByTestId('pagination-label');

    expect(paginationNumbers).toHaveStyleRule('font-size', '1.25rem');
    expect(paginationNumber).toHaveStyleRule('font-size', '1.25rem');
    expect(paginationEllipsis).toHaveStyleRule('font-size', '1.25rem');
    expect(paginationLabel).toHaveStyleRule('font-size', '1.25rem');
  });
});
