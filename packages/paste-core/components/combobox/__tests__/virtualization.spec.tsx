import * as React from 'react';
import {render, screen} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {matchers} from '@emotion/jest';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {useVirtual as UseVirtual, VirtualItem} from 'react-virtual/types';

import {Combobox} from '../src';

const mockMeasureRef = jest.fn();

jest.mock('react-virtual', () => {
  // mocking this to verify that the measure refs are being invoked --> they are being used
  // need to test this because it is essential that the virtualization ref is attached to the correct element for the virtual listbox to render correctly
  const {useVirtual} = jest.requireActual('react-virtual');

  return {
    useVirtual: (config: Parameters<typeof UseVirtual>) => {
      const {virtualItems, ...returnValue} = useVirtual(config);

      return {
        ...returnValue,
        virtualItems: virtualItems.map(({measureRef, ...virtualItem}: VirtualItem) => ({
          ...virtualItem,
          measureRef: mockMeasureRef.mockImplementation((element) => measureRef(element)),
        })),
      };
    },
  };
});

expect.extend(matchers);

const CustomizationWrapper: RenderOptions['wrapper'] = ({children}) => (
  <CustomizationProvider theme={TestTheme}>{children}</CustomizationProvider>
);

describe('Combobox - Virtualization', () => {
  describe('Without option template', () => {
    const items = ['a', 'b', 'c', 'd', 'e'];
    it('should apply the correct height to the virtualized list box', () => {
      render(<Combobox data-testid="test" items={items} labelText="Choose a letter:" />, {
        wrapper: CustomizationWrapper,
      });

      const resizedLiElement = screen.getAllByRole('presentation', {hidden: true})[1];

      expect(resizedLiElement.getAttribute('style')).toEqual('height: 152px;');
    });

    it('should apply the correct styles to the virtualized list box', () => {
      render(<Combobox items={items} labelText="Choose a letter:" />, {
        wrapper: CustomizationWrapper,
      });

      const optionElements = screen.getAllByRole('option', {hidden: true});

      expect(optionElements.length).toEqual(5);

      const [first, second, third, fourth, fifth] = optionElements;

      expect(first).toHaveStyleRule('transform', 'translateY(8px)');
      expect(first).toHaveAttribute('aria-setsize', '5');
      expect(first).toHaveAttribute('aria-posinset', '1');

      expect(second).toHaveStyleRule('transform', 'translateY(44px)');
      expect(second).toHaveAttribute('aria-setsize', '5');
      expect(second).toHaveAttribute('aria-posinset', '2');

      expect(third).toHaveStyleRule('transform', 'translateY(80px)');
      expect(third).toHaveAttribute('aria-setsize', '5');
      expect(third).toHaveAttribute('aria-posinset', '3');

      expect(fourth).toHaveStyleRule('transform', 'translateY(116px)');
      expect(fourth).toHaveAttribute('aria-setsize', '5');
      expect(fourth).toHaveAttribute('aria-posinset', '4');

      expect(fifth).toHaveStyleRule('transform', 'translateY(152px)');
      expect(fifth).toHaveAttribute('aria-setsize', '5');
      expect(fifth).toHaveAttribute('aria-posinset', '5');
    });

    it('should call the measure ref from virtualize when component is mounted', () => {
      render(<Combobox data-testid="test" items={items} labelText="Choose a letter:" />, {
        wrapper: CustomizationWrapper,
      });

      expect(mockMeasureRef).toHaveBeenCalled();
    });
  });

  describe('With option template', () => {
    const items = [
      {
        label: 'a',
        value: 'a-english',
      },
      {
        label: 'b',
        value: 'b-english',
      },
      {
        label: 'c',
        value: 'c-english',
      },
      {
        label: 'd',
        value: 'd-english',
      },
      {
        label: 'e',
        value: 'e-english',
      },
    ];

    it('should apply the correct height to the virtualized list box', () => {
      render(
        <Combobox
          data-testid="test"
          items={items}
          optionTemplate={({label}) => label}
          itemToString={({label}) => label}
          labelText="Choose a letter:"
        />,
        {
          wrapper: CustomizationWrapper,
        }
      );

      const resizedLiElement = screen.getAllByRole('presentation', {hidden: true})[1];

      expect(resizedLiElement.getAttribute('style')).toEqual('height: 152px;');
    });

    it('should apply the correct styles to the virtualized list box', () => {
      render(
        <Combobox
          items={items}
          optionTemplate={({label}) => label}
          itemToString={({label}) => label}
          labelText="Choose a letter:"
        />,
        {
          wrapper: CustomizationWrapper,
        }
      );

      const optionElements = screen.getAllByRole('option', {hidden: true});

      expect(optionElements.length).toEqual(5);

      const [first, second, third, fourth, fifth] = optionElements;

      expect(first).toHaveStyleRule('transform', 'translateY(8px)');
      expect(first).toHaveAttribute('aria-setsize', '5');
      expect(first).toHaveAttribute('aria-posinset', '1');

      expect(second).toHaveStyleRule('transform', 'translateY(44px)');
      expect(second).toHaveAttribute('aria-setsize', '5');
      expect(second).toHaveAttribute('aria-posinset', '2');

      expect(third).toHaveStyleRule('transform', 'translateY(80px)');
      expect(third).toHaveAttribute('aria-setsize', '5');
      expect(third).toHaveAttribute('aria-posinset', '3');

      expect(fourth).toHaveStyleRule('transform', 'translateY(116px)');
      expect(fourth).toHaveAttribute('aria-setsize', '5');
      expect(fourth).toHaveAttribute('aria-posinset', '4');

      expect(fifth).toHaveStyleRule('transform', 'translateY(152px)');
      expect(fifth).toHaveAttribute('aria-setsize', '5');
      expect(fifth).toHaveAttribute('aria-posinset', '5');
    });

    it('should call the measure ref from virtualize when component is mounted', () => {
      render(
        <Combobox
          data-testid="test"
          items={items}
          optionTemplate={({label}) => label}
          itemToString={({label}) => label}
          labelText="Choose a letter:"
        />,
        {
          wrapper: CustomizationWrapper,
        }
      );

      expect(mockMeasureRef).toHaveBeenCalled();
    });
  });
});
