import * as React from 'react';

import {act, renderHook} from '@testing-library/react-hooks';
import {render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useUIDSeed} from '@twilio-paste/uid-library';

import type {FireObject} from '@testing-library/react';
import type {
  UseMultipleSelectionGetSelectedItemPropsOptions,
  UseMultipleSelectionGetDropdownProps,
} from '@twilio-paste/dropdown-library';

import {useMultiSelectPrimitive, useComboboxPrimitive} from '../src';
import type {UseComboboxPrimitiveProps, UseMultiSelectPrimitiveProps} from '../src';

const {stateChangeTypes} = useMultiSelectPrimitive;

jest.mock('@twilio-paste/dropdown-library', () => {
  const {default: all, ...rest} = jest.requireActual('@twilio-paste/dropdown-library');

  return {
    ...rest,
    default: {
      ...all,
      generateId: () => 'test-id',
      useGetterPropsCalledChecker: () => all.noop,
    },
  };
});

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

const dataTestIds = {
  selectedItemPrefix: 'selected-item-id',
  selectedItem: (index: number) => `selected-item-id-${index}`,
  input: 'input-id',
  menu: 'menu-id',
  combobox: 'combobox-id',
  label: 'label-id',
};

type DropdownMultipleComboboxProps = {
  multipleSelectionProps?: Partial<UseMultiSelectPrimitiveProps<string>>;
  comboboxProps?: Partial<UseComboboxPrimitiveProps<string>>;
};

const DropdownMultipleCombobox: React.FC<DropdownMultipleComboboxProps> = ({
  multipleSelectionProps = {},
  comboboxProps = {},
}) => {
  const {getSelectedItemProps, getDropdownProps, selectedItems} = useMultiSelectPrimitive(multipleSelectionProps);
  const {getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps} = useComboboxPrimitive({
    items,
    ...comboboxProps,
  });
  const seed = useUIDSeed();

  return (
    <div>
      <label htmlFor={dataTestIds.input} data-testid={dataTestIds.label} {...getLabelProps()}>
        Choose a component:
      </label>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {selectedItems.map((selectedItem, index) => (
          <span
            key={seed(`selected-item-${index}`)}
            data-testid={dataTestIds.selectedItem(index)}
            {...getSelectedItemProps({selectedItem, index})}
          >
            {selectedItem}
          </span>
        ))}
        <div data-testid={dataTestIds.combobox} {...getComboboxProps()}>
          <input
            aria-labelledby={dataTestIds.label}
            id={dataTestIds.input}
            data-testid={dataTestIds.input}
            {...getInputProps(getDropdownProps())}
          />
          <button type="button" {...getToggleButtonProps()}>
            Toggle
          </button>
        </div>
      </div>
      <ul data-testid={dataTestIds.menu} {...getMenuProps()} />
    </div>
  );
};

const renderMultipleCombobox = (
  props: DropdownMultipleComboboxProps
): {
  label: HTMLElement;
  menu: HTMLElement;
  rerender: (props: DropdownMultipleComboboxProps) => void;
  getSelectedItemAtIndex: (index: number) => HTMLSpanElement;
  keyDownOnSelectedItemAtIndex: (
    index: number,
    key: string,
    options?: Record<string, any>
  ) => ReturnType<FireObject['keyDown']>;
  focusSelectedItemAtIndex: (index: number) => void;
  getSelectedItems: () => HTMLSpanElement[];
  getA11yStatusContainer: () => HTMLElement | null;
  input: HTMLInputElement;
  keyDownOnInput: (key: string, options?: Record<string, any>) => void;
} => {
  const utils = render(<DropdownMultipleCombobox {...props} />);

  const label = screen.getByText(/choose a component/i);
  const menu = screen.getByRole('listbox');
  const input = screen.getByTestId(dataTestIds.input) as HTMLInputElement;
  const rerender = (newProps: DropdownMultipleComboboxProps): void =>
    utils.rerender(<DropdownMultipleCombobox {...newProps} />);
  const getSelectedItemAtIndex = (index: number): HTMLElement => screen.getByTestId(dataTestIds.selectedItem(index));
  const getSelectedItems = (): HTMLElement[] => screen.queryAllByTestId(new RegExp(dataTestIds.selectedItemPrefix));

  const keyDownOnSelectedItemAtIndex = (index: number, key: string, options = {}): ReturnType<FireObject['keyDown']> =>
    fireEvent.keyDown(getSelectedItemAtIndex(index), {key, ...options});

  const focusSelectedItemAtIndex = (index: number): void => {
    getSelectedItemAtIndex(index).focus();
  };
  const getA11yStatusContainer = (): HTMLElement | null => screen.queryByRole('status');
  const keyDownOnInput = (key: string, options = {}): void => {
    if (document.activeElement !== input) {
      input.focus();
    }

    fireEvent.keyDown(input, {key, ...options});
  };

  return {
    ...utils,
    label,
    menu,
    rerender,
    getSelectedItemAtIndex,
    keyDownOnSelectedItemAtIndex,
    focusSelectedItemAtIndex,
    getSelectedItems,
    getA11yStatusContainer,
    input,
    keyDownOnInput,
  };
};

describe('useMultiSelectPrimitive', () => {
  jest.useFakeTimers();
  beforeEach(jest.resetAllMocks);

  afterAll(jest.restoreAllMocks);
  describe('props', () => {
    test('if falsy then no prop types error is thrown', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {});

      renderHook(() => {
        const {getDropdownProps} = useMultiSelectPrimitive({});
        getDropdownProps({}, {suppressRefError: true});
      });

      // eslint-disable-next-line no-console
      expect(console.error).not.toHaveBeenCalled();
    });

    describe('selectedItems', () => {
      afterEach(() => {
        act(() => {
          jest.runAllTimers();
        });
      });

      test('passed as objects should work with custom itemToString', () => {
        const {keyDownOnSelectedItemAtIndex, getA11yStatusContainer} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            initialActiveIndex: 0,
          },
        });

        keyDownOnSelectedItemAtIndex(0, 'Delete');

        expect(getA11yStatusContainer()).toHaveTextContent('Alert has been removed');
      });

      test('controls the state property if passed', () => {
        const inputItems = [items[0], items[1]];
        const {keyDownOnSelectedItemAtIndex, getSelectedItems} = renderMultipleCombobox({
          multipleSelectionProps: {
            selectedItems: inputItems,
            initialActiveIndex: 0,
          },
        });

        keyDownOnSelectedItemAtIndex(0, 'Delete');

        expect(getSelectedItems()).toHaveLength(2);
      });
    });

    describe('getA11yRemovalMessage', () => {
      afterEach(() => {
        act(() => {
          jest.runAllTimers();
        });
      });

      test('is called with object that contains specific props', () => {
        const getA11yRemovalMessage = jest.fn();

        const initialSelectedItems = [items[0], items[1]];
        const {keyDownOnSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems,
            initialActiveIndex: 0,
            getA11yRemovalMessage,
            activeIndex: 0,
          },
        });

        keyDownOnSelectedItemAtIndex(0, 'Delete');

        expect(getA11yRemovalMessage).toHaveBeenCalledWith(
          expect.objectContaining({
            resultCount: 1,
            removedSelectedItem: initialSelectedItems[0],
            activeIndex: 0,
            activeSelectedItem: initialSelectedItems[1],
          })
        );
      });

      test('is replaced with the user provided one', () => {
        const initialSelectedItems = [items[0], items[1]];
        const {keyDownOnSelectedItemAtIndex, getA11yStatusContainer} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems,
            initialActiveIndex: 0,
            getA11yRemovalMessage: () => 'custom message',
          },
        });

        keyDownOnSelectedItemAtIndex(0, 'Delete');

        expect(getA11yStatusContainer()).toHaveTextContent('custom message');
      });
    });

    describe('activeIndex', () => {
      test('controls the state property if passed', () => {
        const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, focusSelectedItemAtIndex} = renderMultipleCombobox(
          {
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
              activeIndex: 1,
            },
          }
        );

        focusSelectedItemAtIndex(1);

        expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');
        expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
        expect(getSelectedItemAtIndex(1)).toHaveFocus();

        keyDownOnSelectedItemAtIndex(1, 'ArrowLeft');

        expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');
        expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
        expect(getSelectedItemAtIndex(1)).toHaveFocus();

        keyDownOnSelectedItemAtIndex(1, 'ArrowRight');

        expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');
        expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
        expect(getSelectedItemAtIndex(1)).toHaveFocus();
      });
    });

    describe('stateReducer', () => {
      test('is called at each state change with the function change type', () => {
        const stateReducer = jest.fn((_s, a) => a.changes);
        const {result} = renderHook(() => useMultiSelectPrimitive({stateReducer}));

        act(() => {
          result.current.addSelectedItem(items[0]);
        });

        expect(stateReducer).toHaveBeenCalledTimes(1);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([]),
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              selectedItems: expect.arrayContaining([items[0]]),
            }),
            type: stateChangeTypes.FunctionAddSelectedItem,
          })
        );

        act(() => {
          result.current.removeSelectedItem(items[0]);
        });

        expect(stateReducer).toHaveBeenCalledTimes(2);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([items[0]]),
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              selectedItems: expect.arrayContaining([]),
            }),
            type: stateChangeTypes.FunctionRemoveSelectedItem,
          })
        );

        act(() => {
          result.current.setSelectedItems([items[0], items[1]]);
        });

        expect(stateReducer).toHaveBeenCalledTimes(3);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([]),
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              selectedItems: expect.arrayContaining([items[0], items[1]]),
            }),
            type: stateChangeTypes.FunctionSetSelectedItems,
          })
        );

        act(() => {
          result.current.setActiveIndex(1);
        });

        expect(stateReducer).toHaveBeenCalledTimes(4);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            activeIndex: -1,
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              activeIndex: 1,
            }),
            type: stateChangeTypes.FunctionSetActiveIndex,
          })
        );

        act(() => {
          result.current.reset();
        });

        expect(stateReducer).toHaveBeenCalledTimes(5);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([items[0], items[1]]),
            activeIndex: 1,
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              selectedItems: expect.arrayContaining([]),
              activeIndex: -1,
            }),
            type: stateChangeTypes.FunctionReset,
          })
        );
      });

      test('is called at each state change with the appropriate change type', async () => {
        const stateReducer = jest.fn((_s, {changes}) => {
          return changes;
        });
        const {keyDownOnSelectedItemAtIndex, keyDownOnInput, input, getSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1], items[2]],
            stateReducer,
          },
        });

        input.focus();
        keyDownOnInput('Backspace');

        expect(stateReducer).toHaveBeenCalledTimes(1);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([items[0], items[1], items[2]]),
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              selectedItems: expect.arrayContaining([items[0], items[1]]),
            }),
            type: stateChangeTypes.DropdownKeyDownBackspace,
          })
        );

        keyDownOnInput('ArrowLeft');

        expect(stateReducer).toHaveBeenCalledTimes(2);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({activeIndex: -1}),
          expect.objectContaining({
            changes: expect.objectContaining({
              activeIndex: 1,
            }),
            type: stateChangeTypes.DropdownKeyDownNavigationPrevious,
          })
        );

        keyDownOnSelectedItemAtIndex(1, 'ArrowLeft');

        expect(stateReducer).toHaveBeenCalledTimes(3);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({activeIndex: 1}),
          expect.objectContaining({
            changes: expect.objectContaining({
              activeIndex: 0,
            }),
            type: stateChangeTypes.SelectedItemKeyDownNavigationPrevious,
          })
        );

        keyDownOnSelectedItemAtIndex(0, 'ArrowRight');

        expect(stateReducer).toHaveBeenCalledTimes(4);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({activeIndex: 0}),
          expect.objectContaining({
            changes: expect.objectContaining({
              activeIndex: 1,
            }),
            type: stateChangeTypes.SelectedItemKeyDownNavigationNext,
          })
        );

        input.click();

        expect(stateReducer).toHaveBeenCalledTimes(5);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({activeIndex: 1}),
          expect.objectContaining({
            changes: expect.objectContaining({
              activeIndex: -1,
            }),
            type: stateChangeTypes.DropdownClick,
          })
        );

        await userEvent.click(getSelectedItemAtIndex(0));

        expect(stateReducer).toHaveBeenCalledTimes(6);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({activeIndex: -1}),
          expect.objectContaining({
            changes: expect.objectContaining({
              activeIndex: 0,
            }),
            type: stateChangeTypes.SelectedItemClick,
          })
        );

        keyDownOnSelectedItemAtIndex(0, 'Delete');

        expect(stateReducer).toHaveBeenCalledTimes(7);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([items[0], items[1]]),
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              selectedItems: expect.arrayContaining([items[1]]),
            }),
            type: stateChangeTypes.SelectedItemKeyDownDelete,
          })
        );

        keyDownOnSelectedItemAtIndex(0, 'Backspace');

        expect(stateReducer).toHaveBeenCalledTimes(8);
        expect(stateReducer).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([items[1]]),
          }),
          expect.objectContaining({
            changes: expect.objectContaining({
              selectedItems: expect.arrayContaining([]),
            }),
            type: stateChangeTypes.SelectedItemKeyDownBackspace,
          })
        );
      });

      test('replaces prop values with user defined', () => {
        const stateReducer = jest.fn((_s, {changes}) => {
          const shallowClone = {...changes};
          shallowClone.activeIndex = 0;
          return shallowClone;
        });

        const {getSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            stateReducer,
          },
        });

        userEvent.click(getSelectedItemAtIndex(0));

        expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');
        expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
        expect(getSelectedItemAtIndex(0)).toHaveFocus();
      });

      test('receives state, changes and type', () => {
        const stateReducer = jest.fn((s, a) => {
          expect(a.type).not.toBeUndefined();
          expect(a.type).not.toBeNull();

          expect(s).not.toBeUndefined();
          expect(s).not.toBeNull();

          expect(a.changes).not.toBeUndefined();
          expect(a.changes).not.toBeNull();

          return a.changes;
        });
        const {getSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            stateReducer,
          },
        });

        userEvent.click(getSelectedItemAtIndex(0));
      });

      test('changes are visible in onChange handlers', () => {
        const activeIndex = 0;
        const stateReducer = jest.fn(() => ({
          activeIndex,
          selectedItems: [],
        }));
        const onSelectedItemsChange = jest.fn();
        const onActiveIndexChange = jest.fn();
        const onStateChange = jest.fn();
        const {keyDownOnInput} = renderMultipleCombobox({
          multipleSelectionProps: {
            stateReducer,
            onStateChange,
            onActiveIndexChange,
            onSelectedItemsChange,
            selectedItems: [items[0], items[2]],
          },
        });

        keyDownOnInput('ArrowLeft');

        expect(onActiveIndexChange).toHaveBeenCalledTimes(1);
        expect(onActiveIndexChange).toHaveBeenCalledWith(
          expect.objectContaining({
            activeIndex,
          })
        );
        expect(onSelectedItemsChange).toHaveBeenCalledTimes(1);
        expect(onSelectedItemsChange).toHaveBeenCalledWith(
          expect.objectContaining({
            selectedItems: [],
          })
        );
        expect(onStateChange).toHaveBeenCalledTimes(1);
        expect(onStateChange).toHaveBeenCalledWith(
          expect.objectContaining({
            activeIndex,
            selectedItems: [],
            type: stateChangeTypes.DropdownKeyDownNavigationPrevious,
          })
        );
      });
    });

    describe('onActiveIndexChange', () => {
      test('is called at activeIndex change', () => {
        const onActiveIndexChange = jest.fn();
        const {getSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            onActiveIndexChange,
            initialActiveIndex: 0,
          },
        });

        fireEvent.click(getSelectedItemAtIndex(1));

        expect(onActiveIndexChange).toHaveBeenCalledTimes(1);

        expect(onActiveIndexChange).toHaveBeenCalledWith(
          expect.objectContaining({
            activeIndex: 1,
          })
        );
      });

      test('is not called at if selectedItem is the same', () => {
        const onActiveIndexChange = jest.fn();
        const {getSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            onActiveIndexChange,
            initialActiveIndex: 1,
          },
        });

        userEvent.click(getSelectedItemAtIndex(1));

        expect(onActiveIndexChange).not.toHaveBeenCalled();
      });

      test('works correctly with the corresponding control prop', () => {
        let activeIndex = 3;
        const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, rerender} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: items,
            activeIndex,
            onActiveIndexChange: (changes) => {
              activeIndex = changes.activeIndex as number;
            },
          },
        });

        keyDownOnSelectedItemAtIndex(3, 'ArrowLeft');
        rerender({multipleSelectionProps: {activeIndex}});

        expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '0');
      });

      test('can have downshift actions executed', () => {
        const {result} = renderHook(() =>
          useMultiSelectPrimitive({
            onActiveIndexChange: () => {
              result.current.setSelectedItems([items[0]]);
            },
          })
        );

        act(() => {
          result.current
            .getSelectedItemProps({
              index: 3,
            } as UseMultipleSelectionGetSelectedItemPropsOptions<string>)
            .onClick({});
        });

        expect(result.current.selectedItems).toEqual([items[0]]);
      });
    });

    describe('onSelectedItemsChange', () => {
      test('is called at items change', () => {
        const onSelectedItemsChange = jest.fn();
        const {keyDownOnSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            onSelectedItemsChange,
            initialActiveIndex: 1,
          },
        });

        keyDownOnSelectedItemAtIndex(1, 'Delete');

        expect(onSelectedItemsChange).toHaveBeenCalledTimes(1);
        expect(onSelectedItemsChange).toHaveBeenCalledWith(
          expect.objectContaining({
            selectedItems: [items[0]],
          })
        );
      });

      test('is not called at if items is the same', () => {
        const onSelectedItemsChange = jest.fn();
        const {getSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            onSelectedItemsChange,
            initialActiveIndex: 1,
          },
        });

        userEvent.click(getSelectedItemAtIndex(0));

        expect(onSelectedItemsChange).not.toHaveBeenCalled();
      });

      test('works correctly with the corresponding control prop', () => {
        let selectedItems = [items[0], items[1]];
        const {keyDownOnSelectedItemAtIndex, getSelectedItems, rerender} = renderMultipleCombobox({
          multipleSelectionProps: {
            selectedItems,
            initialActiveIndex: 0,
            onSelectedItemsChange: (changes) => {
              selectedItems = changes.selectedItems as string[];
            },
          },
        });

        keyDownOnSelectedItemAtIndex(0, 'Delete');
        rerender({multipleSelectionProps: {selectedItems}});

        expect(getSelectedItems()).toHaveLength(1);
      });

      test('can have downshift actions executed', () => {
        const {result} = renderHook(() =>
          useMultiSelectPrimitive({
            onSelectedItemsChange: () => {
              result.current.setActiveIndex(1);
            },
            initialSelectedItems: items,
          })
        );

        act(() => {
          result.current
            .getSelectedItemProps({index: 3} as UseMultipleSelectionGetSelectedItemPropsOptions<string>)
            .onKeyDown({key: 'Backspace'});
        });

        expect(result.current.activeIndex).toEqual(1);
      });
    });

    describe('onStateChange', () => {
      test('is called at each state property change', () => {
        const onStateChange = jest.fn();
        const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, keyDownOnInput, input} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1], items[2]],
            onStateChange,
          },
        });

        input.focus();
        keyDownOnInput('Backspace');

        expect(onStateChange).toHaveBeenCalledTimes(1);
        expect(onStateChange).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([items[0], items[1]]),
            type: stateChangeTypes.DropdownKeyDownBackspace,
          })
        );

        keyDownOnInput('ArrowLeft');

        expect(onStateChange).toHaveBeenCalledTimes(2);
        expect(onStateChange).toHaveBeenLastCalledWith(
          expect.objectContaining({
            activeIndex: 1,
            type: stateChangeTypes.DropdownKeyDownNavigationPrevious,
          })
        );

        keyDownOnSelectedItemAtIndex(1, 'ArrowLeft');

        expect(onStateChange).toHaveBeenCalledTimes(3);
        expect(onStateChange).toHaveBeenLastCalledWith(
          expect.objectContaining({
            activeIndex: 0,
            type: stateChangeTypes.SelectedItemKeyDownNavigationPrevious,
          })
        );

        keyDownOnSelectedItemAtIndex(0, 'ArrowRight');

        expect(onStateChange).toHaveBeenCalledTimes(4);
        expect(onStateChange).toHaveBeenLastCalledWith(
          expect.objectContaining({
            activeIndex: 1,
            type: stateChangeTypes.SelectedItemKeyDownNavigationNext,
          })
        );

        fireEvent.click(getSelectedItemAtIndex(0));

        expect(onStateChange).toHaveBeenCalledTimes(5);
        expect(onStateChange).toHaveBeenLastCalledWith(
          expect.objectContaining({
            activeIndex: 0,
            type: stateChangeTypes.SelectedItemClick,
          })
        );

        keyDownOnSelectedItemAtIndex(0, 'Delete');

        expect(onStateChange).toHaveBeenCalledTimes(6);
        expect(onStateChange).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([items[1]]),
            type: stateChangeTypes.SelectedItemKeyDownDelete,
          })
        );

        keyDownOnSelectedItemAtIndex(0, 'Backspace');

        expect(onStateChange).toHaveBeenCalledTimes(7);
        expect(onStateChange).toHaveBeenLastCalledWith(
          expect.objectContaining({
            selectedItems: expect.arrayContaining([]),
            type: stateChangeTypes.SelectedItemKeyDownBackspace,
          })
        );
      });
    });

    test('overrides navigation previous and next keys correctly', () => {
      const {keyDownOnInput, getSelectedItemAtIndex, keyDownOnSelectedItemAtIndex, input} = renderMultipleCombobox({
        multipleSelectionProps: {
          keyNavigationPrevious: 'ArrowUp',
          keyNavigationNext: 'ArrowDown',
          initialSelectedItems: [items[0], items[1]],
        },
      });

      keyDownOnInput('ArrowUp');

      expect(getSelectedItemAtIndex(1)).toHaveFocus();

      keyDownOnSelectedItemAtIndex(1, 'ArrowUp');

      expect(getSelectedItemAtIndex(0)).toHaveFocus();

      keyDownOnSelectedItemAtIndex(0, 'ArrowDown');

      expect(getSelectedItemAtIndex(1)).toHaveFocus();

      keyDownOnSelectedItemAtIndex(1, 'ArrowDown');

      expect(input).toHaveFocus();
    });

    test('can have downshift actions executed', () => {
      const {result} = renderHook(() =>
        useMultiSelectPrimitive({
          initialSelectedItems: items,
          onStateChange: () => {
            result.current.setActiveIndex(4);
          },
        })
      );

      act(() => {
        result.current
          .getSelectedItemProps({index: 2} as UseMultipleSelectionGetSelectedItemPropsOptions<string>)
          .onClick({});
      });

      expect(result.current.activeIndex).toEqual(4);
    });
  });

  describe('returnProps', () => {
    test('should have stateChangeTypes attached to hook', () => {
      expect(useMultiSelectPrimitive).toHaveProperty('stateChangeTypes', stateChangeTypes);
    });

    describe('prop getters', () => {
      test('are returned as functions', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));

        expect(result.current.getDropdownProps).toBeInstanceOf(Function);
        expect(result.current.getSelectedItemProps).toBeInstanceOf(Function);
      });
    });

    describe('actions', () => {
      test('addSelectedItem adds an item to the selected array', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));

        act(() => {
          result.current.addSelectedItem('test');
        });

        expect(result.current.selectedItems).toStrictEqual(['test']);
      });

      test('removeSelectedItem removes an item from the selected array and keeps active index if not last item', () => {
        const {result} = renderHook(() =>
          useMultiSelectPrimitive({
            initialSelectedItems: ['test', 'more test'],
            initialActiveIndex: 0,
          })
        );

        act(() => {
          result.current.removeSelectedItem('test');
        });

        expect(result.current.selectedItems).toStrictEqual(['more test']);
        expect(result.current.activeIndex).toEqual(0);
      });

      test('removeSelectedItem removes an item from the selected array and decreases active index if last item', () => {
        const {result} = renderHook(() =>
          useMultiSelectPrimitive({
            initialSelectedItems: ['test', 'more test'],
            initialActiveIndex: 1,
          })
        );

        act(() => {
          result.current.removeSelectedItem('more test');
        });

        expect(result.current.selectedItems).toStrictEqual(['test']);
        expect(result.current.activeIndex).toEqual(0);
      });

      test('setActiveIndex sets activeIndex', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));

        act(() => {
          result.current.setActiveIndex(3);
        });

        expect(result.current.activeIndex).toBe(3);
      });

      test('setSelectedItems sets selectedItems', () => {
        const inputItems = [1, 2, 3];
        const {result} = renderHook(() => useMultiSelectPrimitive({}));

        act(() => {
          result.current.setSelectedItems(inputItems);
        });

        expect(result.current.selectedItems).toBe(inputItems);
      });

      test('reset sets the state to default values', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));

        act(() => {
          result.current.setSelectedItems([1, 2, 3]);
          result.current.setActiveIndex(5);
          result.current.reset();
        });

        expect(result.current.activeIndex).toBe(-1);
        expect(result.current.selectedItems).toStrictEqual([]);
      });

      test('reset sets the state to default prop values passed by user', () => {
        const {result} = renderHook(() =>
          useMultiSelectPrimitive({
            defaultSelectedItems: [3, 4],
            defaultActiveIndex: 0,
          })
        );

        act(() => {
          result.current.setSelectedItems([1, 2]);
          result.current.setActiveIndex(1);
          result.current.reset();
        });

        expect(result.current.activeIndex).toBe(0);
        expect(result.current.selectedItems).toStrictEqual([3, 4]);
      });
    });

    describe('state and props', () => {
      test('activeIndex is returned', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({activeIndex: 4}));

        expect(result.current.activeIndex).toBe(4);
      });

      test('selectedItems is returned', () => {
        const itemsInput = [1, 2, 3];
        const {result} = renderHook(() => useMultiSelectPrimitive({selectedItems: itemsInput}));

        expect(result.current.selectedItems).toBe(itemsInput);
      });
    });
  });

  describe('test memoization', () => {
    test('functions are memoized', () => {
      const {result, rerender} = renderHook(() => useMultiSelectPrimitive({}));
      const firstRenderResult = result.current;
      rerender();
      const secondRenderResult = result.current;
      expect(firstRenderResult).toEqual(secondRenderResult);
    });
  });

  describe('getSelectedItemProps', () => {
    test('throws error if no index or item has been passed', () => {
      const {result} = renderHook(() => useMultiSelectPrimitive({}));

      expect(result.current.getSelectedItemProps).toThrowError(
        'Pass either selectedItem or index in getSelectedItemProps!'
      );
    });

    describe('hook props', () => {
      test("assign '-1' to tabindex for a non-active item", () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));
        const itemProps = result.current.getSelectedItemProps({
          index: 0,
          selectedItem: items[0],
        });

        expect(itemProps.tabIndex).toEqual(-1);
      });

      test("assign '0' to tabindex for an active item", () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({activeIndex: 0}));

        const itemProps = result.current.getSelectedItemProps({
          index: 0,
          selectedItem: items[0],
        });

        expect(itemProps.tabIndex).toEqual(0);
      });
    });

    describe('user props', () => {
      test('are passed down', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));

        expect(
          result.current.getSelectedItemProps({
            index: 1,
            selectedItem: items[1],
            foo: 'bar',
          } as UseMultipleSelectionGetSelectedItemPropsOptions<string>)
        ).toHaveProperty('foo', 'bar');
      });

      test('custom ref passed by the user is used', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));
        const refFn = jest.fn();
        const itemNode = {};

        act(() => {
          const {ref} = result.current.getSelectedItemProps({
            index: 1,
            selectedItem: items[1],
            ref: refFn,
          });

          ref(itemNode);
        });

        expect(refFn).toHaveBeenCalledTimes(1);
        expect(refFn).toHaveBeenCalledWith(itemNode);
      });

      test('custom ref with custom name passed by the user is used', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));
        const refFn = jest.fn();
        const itemNode = {};

        act(() => {
          const {blablaRef} = result.current.getSelectedItemProps({
            index: 1,
            selectedItem: items[1],
            refKey: 'blablaRef',
            blablaRef: refFn,
          } as UseMultipleSelectionGetSelectedItemPropsOptions<string>);

          blablaRef(itemNode);
        });

        expect(refFn).toHaveBeenCalledTimes(1);
        expect(refFn).toHaveBeenCalledWith(itemNode);
      });

      test('event handler onClick is called along with downshift handler', () => {
        const userOnClick = jest.fn();
        const {result} = renderHook(() => useMultiSelectPrimitive({initialSelectedItems: [items[0], items[1]]}));

        act(() => {
          const {onClick} = result.current.getSelectedItemProps({
            index: 1,
            selectedItem: items[1],
            onClick: userOnClick,
          });

          onClick({});
        });

        expect(userOnClick).toHaveBeenCalledTimes(1);
        expect(result.current.activeIndex).toBe(1);
      });

      test("event handler onClick is called without downshift handler if 'preventDownshiftDefault' is passed in user event", () => {
        const userOnClick = jest.fn((event) => {
          // eslint-disable-next-line no-param-reassign
          event.preventDownshiftDefault = true;
        });
        const {result} = renderHook(() => useMultiSelectPrimitive({initialSelectedItems: [items[0], items[1]]}));

        act(() => {
          const {onClick} = result.current.getSelectedItemProps({
            index: 1,
            selectedItem: items[1],
            onClick: userOnClick,
          });

          onClick({});
        });

        expect(userOnClick).toHaveBeenCalledTimes(1);
        expect(result.current.activeIndex).toBe(-1);
      });

      test('event handler onKeyDown is called along with downshift handler', () => {
        const userOnKeyDown = jest.fn();
        const {result} = renderHook(() => useMultiSelectPrimitive({initialSelectedItems: [items[0], items[1]]}));

        act(() => {
          const {onKeyDown} = result.current.getSelectedItemProps({
            index: 1,
            selectedItem: items[1],
            onKeyDown: userOnKeyDown,
          });

          onKeyDown({key: 'ArrowLeft'});
        });

        expect(userOnKeyDown).toHaveBeenCalledTimes(1);
        expect(result.current.activeIndex).toBe(0);
      });

      test("event handler onKeyDown is called without downshift handler if 'preventDownshiftDefault' is passed in user event", () => {
        const userOnKeyDown = jest.fn((event) => {
          // eslint-disable-next-line no-param-reassign
          event.preventDownshiftDefault = true;
        });
        const {result} = renderHook(() => useMultiSelectPrimitive({initialSelectedItems: [items[0], items[1]]}));

        act(() => {
          const {onKeyDown} = result.current.getSelectedItemProps({
            index: 1,
            selectedItem: items[1],
            onKeyDown: userOnKeyDown,
          });

          onKeyDown({key: 'ArrowLeft'});
        });

        expect(userOnKeyDown).toHaveBeenCalledTimes(1);
        expect(result.current.activeIndex).toBe(-1);
      });
    });

    describe('event handlers', () => {
      describe('on click', () => {
        test('sets tabindex to "0"', () => {
          const {getSelectedItemAtIndex} = renderMultipleCombobox({
            multipleSelectionProps: {initialSelectedItems: [items[0], items[1]]},
          });

          userEvent.click(getSelectedItemAtIndex(0));

          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(0)).toHaveFocus();
          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');
        });

        test('keeps tabindex "0" to an already active item', () => {
          const {getSelectedItemAtIndex, focusSelectedItemAtIndex} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
              initialActiveIndex: 0,
            },
          });

          focusSelectedItemAtIndex(0);
          userEvent.click(getSelectedItemAtIndex(0));

          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(0)).toHaveFocus();
        });
      });

      describe('on key down', () => {
        test('arrow left should change active item in a descending order', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
              initialActiveIndex: 1,
            },
          });

          keyDownOnSelectedItemAtIndex(1, 'ArrowLeft');

          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(0)).toHaveFocus();
        });

        test(`arrow left should not change active item if it's the first one added`, () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, focusSelectedItemAtIndex} =
            renderMultipleCombobox({
              multipleSelectionProps: {
                initialSelectedItems: [items[0], items[1]],
                initialActiveIndex: 0,
              },
            });

          focusSelectedItemAtIndex(0);
          keyDownOnSelectedItemAtIndex(0, 'ArrowLeft');

          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(0)).toHaveFocus();
        });

        test('arrow right should change active item ascendently', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
              initialActiveIndex: 0,
            },
          });

          keyDownOnSelectedItemAtIndex(0, 'ArrowRight');

          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(1)).toHaveFocus();
        });

        test(`arrow right should make no item active if it's on last one added`, () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, input} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
              initialActiveIndex: 1,
            },
          });

          keyDownOnSelectedItemAtIndex(1, 'ArrowRight');

          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');
          expect(input).toHaveFocus();
        });

        test('arrow navigation moves focus back and forth', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1], items[2]],
              initialActiveIndex: 2,
            },
          });

          keyDownOnSelectedItemAtIndex(2, 'ArrowLeft');

          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');

          keyDownOnSelectedItemAtIndex(1, 'ArrowLeft');

          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');

          keyDownOnSelectedItemAtIndex(0, 'ArrowRight');

          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');

          keyDownOnSelectedItemAtIndex(2, 'ArrowRight');

          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');
        });

        test('backspace removes item and moves focus to next item if any', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, getSelectedItems, focusSelectedItemAtIndex} =
            renderMultipleCombobox({
              multipleSelectionProps: {
                initialSelectedItems: [items[0], items[1], items[2]],
                initialActiveIndex: 1,
              },
            });

          focusSelectedItemAtIndex(1);
          keyDownOnSelectedItemAtIndex(1, 'Backspace');

          expect(getSelectedItems()).toHaveLength(2);
          expect(getSelectedItemAtIndex(1)).toHaveFocus();
          expect(getSelectedItemAtIndex(1)).toHaveTextContent(items[2]);
        });

        test('backspace removes item and moves focus to input if no items left', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItems, focusSelectedItemAtIndex, input} =
            renderMultipleCombobox({
              multipleSelectionProps: {
                initialSelectedItems: [items[0]],
                initialActiveIndex: 0,
              },
            });

          focusSelectedItemAtIndex(0);
          keyDownOnSelectedItemAtIndex(0, 'Backspace');

          expect(getSelectedItems()).toHaveLength(0);
          expect(input).toHaveFocus();
        });

        test('backspace removes item and moves focus to previous item if it was the last in the array', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, getSelectedItems, focusSelectedItemAtIndex} =
            renderMultipleCombobox({
              multipleSelectionProps: {
                initialSelectedItems: [items[0], items[1], items[2]],
                initialActiveIndex: 2,
              },
            });

          focusSelectedItemAtIndex(2);
          keyDownOnSelectedItemAtIndex(2, 'Backspace');

          expect(getSelectedItems()).toHaveLength(2);
          expect(getSelectedItemAtIndex(1)).toHaveFocus();
          expect(getSelectedItemAtIndex(1)).toHaveTextContent(items[1]);
        });

        test('delete removes item and moves focus to next item if any', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, getSelectedItems, focusSelectedItemAtIndex} =
            renderMultipleCombobox({
              multipleSelectionProps: {
                initialSelectedItems: [items[0], items[1], items[2]],
                initialActiveIndex: 1,
              },
            });

          focusSelectedItemAtIndex(1);
          keyDownOnSelectedItemAtIndex(1, 'Delete');

          expect(getSelectedItems()).toHaveLength(2);
          expect(getSelectedItemAtIndex(1)).toHaveFocus();
          expect(getSelectedItemAtIndex(1)).toHaveTextContent(items[2]);
        });

        test('delete removes item and moves focus to input if no items left', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItems, focusSelectedItemAtIndex, input} =
            renderMultipleCombobox({
              multipleSelectionProps: {
                initialSelectedItems: [items[0]],
                initialActiveIndex: 0,
              },
            });

          focusSelectedItemAtIndex(0);
          keyDownOnSelectedItemAtIndex(0, 'Delete');

          expect(getSelectedItems()).toHaveLength(0);
          expect(input).toHaveFocus();
        });

        test('delete removes item and moves focus to previous item if it was the last in the array', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex, getSelectedItems, focusSelectedItemAtIndex} =
            renderMultipleCombobox({
              multipleSelectionProps: {
                initialSelectedItems: [items[0], items[1], items[2]],
                initialActiveIndex: 2,
              },
            });

          focusSelectedItemAtIndex(2);
          keyDownOnSelectedItemAtIndex(2, 'Delete');

          expect(getSelectedItems()).toHaveLength(2);
          expect(getSelectedItemAtIndex(1)).toHaveFocus();
          expect(getSelectedItemAtIndex(1)).toHaveTextContent(items[1]);
        });

        test('navigation works correctly with both click and arrow keys', () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItemAtIndex} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1], items[2]],
            },
          });

          userEvent.click(getSelectedItemAtIndex(1));

          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '-1');

          keyDownOnSelectedItemAtIndex(1, 'ArrowLeft');

          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');

          userEvent.click(getSelectedItemAtIndex(1));

          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');

          keyDownOnSelectedItemAtIndex(2, 'ArrowRight');

          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '-1');
        });

        test("other than the ones supported don't affect anything", () => {
          const {keyDownOnSelectedItemAtIndex, getSelectedItems, getSelectedItemAtIndex, focusSelectedItemAtIndex} =
            renderMultipleCombobox({
              multipleSelectionProps: {initialSelectedItems: [items[0], items[1]]},
            });

          focusSelectedItemAtIndex(1);
          keyDownOnSelectedItemAtIndex(1, 'Alt');
          keyDownOnSelectedItemAtIndex(1, 'Control');
          keyDownOnSelectedItemAtIndex(1, 'ArrowUp');
          keyDownOnSelectedItemAtIndex(1, 'ArrowDown');
          keyDownOnSelectedItemAtIndex(1, 'Enter');

          expect(getSelectedItems()).toHaveLength(2);
          expect(getSelectedItemAtIndex(1)).toHaveFocus();
        });
      });

      describe('on focus', () => {
        test('keeps tabindex "0" when focusing input by tab/click so user can return via tab', () => {
          const {getSelectedItemAtIndex, focusSelectedItemAtIndex, input} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1], items[2]],
              initialActiveIndex: 0,
            },
          });

          focusSelectedItemAtIndex(0);
          input.focus();

          expect(getSelectedItemAtIndex(0)).toHaveAttribute('tabindex', '0');
          expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');
          expect(getSelectedItemAtIndex(2)).toHaveAttribute('tabindex', '-1');
          expect(input).toHaveFocus();
        });
      });
    });
  });

  describe('getDropdownProps', () => {
    test('returns no keydown events if preventKeyAction is true', () => {
      const {result} = renderHook(() => useMultiSelectPrimitive({}));
      const dropdownProps = result.current.getDropdownProps({
        preventKeyAction: true,
      });

      expect(dropdownProps.onKeyDown).toBeUndefined();
    });

    describe('user props', () => {
      test('are passed down', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));

        expect(result.current.getDropdownProps({foo: 'bar'} as UseMultipleSelectionGetDropdownProps)).toHaveProperty(
          'foo',
          'bar'
        );
      });

      test('custom ref passed by the user is used', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));
        const refFn = jest.fn();
        const dropdownNode = {};

        act(() => {
          const {ref} = result.current.getDropdownProps({
            ref: refFn,
          });

          ref(dropdownNode);
        });

        expect(refFn).toHaveBeenCalledTimes(1);
        expect(refFn).toHaveBeenCalledWith(dropdownNode);
      });

      test('custom ref with custom name passed by the user is used', () => {
        const {result} = renderHook(() => useMultiSelectPrimitive({}));
        const refFn = jest.fn();
        const dropdownNode = {};

        act(() => {
          const {blablaRef} = result.current.getDropdownProps({
            refKey: 'blablaRef',
            blablaRef: refFn,
          } as UseMultipleSelectionGetDropdownProps);

          blablaRef(dropdownNode);
        });

        expect(refFn).toHaveBeenCalledTimes(1);
        expect(refFn).toHaveBeenCalledWith(dropdownNode);
      });

      test('event handler onKeyDown is called along with downshift handler', () => {
        const userOnKeyDown = jest.fn();
        const {result} = renderHook(() =>
          useMultiSelectPrimitive({
            initialSelectedItems: [items[0]],
          })
        );

        act(() => {
          const {onKeyDown} = result.current.getDropdownProps({
            onKeyDown: userOnKeyDown,
          });

          onKeyDown({key: 'ArrowLeft'});
        });

        expect(userOnKeyDown).toHaveBeenCalledTimes(1);
        expect(result.current.activeIndex).toBe(0);
      });

      test("event handler onKeyDown is called without downshift handler if 'preventDownshiftDefault' is passed in user event", () => {
        const userOnKeyDown = jest.fn((event) => {
          // eslint-disable-next-line no-param-reassign
          event.preventDownshiftDefault = true;
        });
        const {result} = renderHook(() =>
          useMultiSelectPrimitive({
            initialSelectedItems: [items[0]],
          })
        );

        act(() => {
          const {onKeyDown} = result.current.getDropdownProps({
            onKeyDown: userOnKeyDown,
          });

          onKeyDown({key: 'ArrowLeft'});
        });

        expect(userOnKeyDown).toHaveBeenCalledTimes(1);
        expect(result.current.activeIndex).toBe(-1);
      });
    });

    describe('event handlers', () => {
      describe('on keydown', () => {
        test('arrow left should make first selected item active', () => {
          const {keyDownOnInput, getSelectedItemAtIndex} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
            },
          });

          keyDownOnInput('ArrowLeft');

          expect(getSelectedItemAtIndex(1)).toHaveFocus();
        });

        test('arrow left should not work if pressed with modifier keys', () => {
          const {keyDownOnInput, getSelectedItems} = renderMultipleCombobox({
            multipleSelectionProps: {initialSelectedItems: [items[0], items[1]]},
          });

          keyDownOnInput('ArrowLeft', {shiftKey: true});

          expect(getSelectedItems()).toHaveLength(2);

          keyDownOnInput('ArrowLeft', {altKey: true});

          expect(getSelectedItems()).toHaveLength(2);

          keyDownOnInput('ArrowLeft', {metaKey: true});

          expect(getSelectedItems()).toHaveLength(2);

          keyDownOnInput('ArrowLeft', {ctrlKey: true});

          expect(getSelectedItems()).toHaveLength(2);
        });

        test('backspace should remove the first selected item', () => {
          const {keyDownOnInput, getSelectedItems} = renderMultipleCombobox({
            multipleSelectionProps: {initialSelectedItems: [items[0], items[1]]},
          });

          keyDownOnInput('Backspace');

          expect(getSelectedItems()).toHaveLength(1);
        });

        test('backspace should not work if pressed with modifier keys', () => {
          const {keyDownOnInput, getSelectedItems} = renderMultipleCombobox({
            multipleSelectionProps: {initialSelectedItems: [items[0], items[1]]},
          });

          keyDownOnInput('Backspace', {shiftKey: true});

          expect(getSelectedItems()).toHaveLength(2);

          keyDownOnInput('Backspace', {altKey: true});

          expect(getSelectedItems()).toHaveLength(2);

          keyDownOnInput('Backspace', {metaKey: true});

          expect(getSelectedItems()).toHaveLength(2);

          keyDownOnInput('Backspace', {ctrlKey: true});

          expect(getSelectedItems()).toHaveLength(2);
        });

        test('backspace should not work if pressed with cursor not on first position', () => {
          const {keyDownOnInput, getSelectedItems, input} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
            },
            comboboxProps: {initialInputValue: 'test'},
          });

          input.selectionStart = 1;
          input.selectionEnd = 1;
          keyDownOnInput('Backspace');

          expect(getSelectedItems()).toHaveLength(2);
        });

        test('backspace should not work if pressed with cursor highlighting text', () => {
          const {keyDownOnInput, getSelectedItems, input} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
            },
            comboboxProps: {initialInputValue: 'test'},
          });

          input.selectionStart = 0;
          input.selectionEnd = 3;
          keyDownOnInput('Backspace');

          expect(getSelectedItems()).toHaveLength(2);
        });

        test("other than the ones supported don't affect anything", () => {
          const {keyDownOnInput, getSelectedItems, input} = renderMultipleCombobox({
            multipleSelectionProps: {
              initialSelectedItems: [items[0], items[1]],
            },
          });

          keyDownOnInput('Alt');
          keyDownOnInput('Control');

          expect(getSelectedItems()).toHaveLength(2);
          expect(input).toHaveFocus();
        });
      });

      test('on click it should remove active status from item if any', () => {
        const {keyDownOnInput, getSelectedItemAtIndex, input, focusSelectedItemAtIndex} = renderMultipleCombobox({
          multipleSelectionProps: {
            initialSelectedItems: [items[0], items[1]],
            initialActiveIndex: 1,
          },
        });

        focusSelectedItemAtIndex(1);
        userEvent.click(input);

        expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '-1');

        keyDownOnInput('ArrowLeft');

        expect(getSelectedItemAtIndex(1)).toHaveFocus();
        expect(getSelectedItemAtIndex(1)).toHaveAttribute('tabindex', '0');
      });
    });
  });
});
