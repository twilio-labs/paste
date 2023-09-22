import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useListboxPrimitiveState, ListboxPrimitive, ListboxPrimitiveItem } from '../src';

const FIRST_ITEM = 'first-listbox-item';
const SECOND_ITEM = 'second-listbox-item';

const ListboxMock: React.FC = () => {
  const [selected, setSelected] = React.useState<number>();
  const listbox = useListboxPrimitiveState({ baseId: 'listbox-example' });
  return (
    <ListboxPrimitive {...listbox} aria-label="Code">
      <ListboxPrimitiveItem
        {...listbox}
        data-testid={FIRST_ITEM}
        selected={selected === 1}
        onSelect={() => {
          setSelected(1);
        }}
      >
        Item 1
      </ListboxPrimitiveItem>
      <ListboxPrimitiveItem
        {...listbox}
        data-testid={SECOND_ITEM}
        selected={selected === 2}
        onSelect={() => {
          setSelected(2);
        }}
      />
    </ListboxPrimitive>
  );
};

const ListboxHorizontalMock: React.FC = () => {
  const listbox = useListboxPrimitiveState({ baseId: 'listbox-horizontal-example', orientation: 'horizontal' });
  return (
    <ListboxPrimitive {...listbox} aria-label="Code">
      <ListboxPrimitiveItem {...listbox} data-testid={FIRST_ITEM}>
        Item 1
      </ListboxPrimitiveItem>
      <ListboxPrimitiveItem {...listbox} data-testid={SECOND_ITEM} />
    </ListboxPrimitive>
  );
};

const ListboxMultipleMock: React.FC = () => {
  const [selectedSet, updateSelectedSet] = React.useState<Set<number>>(new Set());
  const listbox = useListboxPrimitiveState({ baseId: 'listbox-multi-example' });
  const updateSelection = (item: number): void => {
    const newSelectedSet = new Set(selectedSet);
    if (newSelectedSet.has(item)) {
      newSelectedSet.delete(item);
    } else {
      newSelectedSet.add(item);
    }
    updateSelectedSet(newSelectedSet);
  };
  return (
    <ListboxPrimitive {...listbox} aria-label="Code" variant="multiple">
      <ListboxPrimitiveItem {...listbox} selected={selectedSet.has(1)} onSelect={() => updateSelection(1)}>
        Item 1
      </ListboxPrimitiveItem>
      <ListboxPrimitiveItem {...listbox} selected={selectedSet.has(2)} onSelect={() => updateSelection(2)} />
    </ListboxPrimitive>
  );
};

describe('Listbox Primitive', () => {
  describe('Render', () => {
    it('should render', () => {
      render(<ListboxMock />);
      expect(screen.getByRole('listbox')).toBeVisible();
    });

    it('should render a listbox', () => {
      render(<ListboxMock />);
      const renderedListbox = screen.getByLabelText('Code');
      expect(renderedListbox.getAttribute('role')).toEqual('listbox');
      expect(renderedListbox.getAttribute('aria-orientation')).toEqual('vertical');
    });

    it('should render a horizontal listbox', () => {
      render(<ListboxHorizontalMock />);
      const renderedListbox = screen.getByLabelText('Code');
      expect(renderedListbox.getAttribute('aria-orientation')).toEqual('horizontal');
    });

    it('should render a listbox item', () => {
      render(<ListboxMock />);
      const renderedListboxItem = screen.getByTestId(FIRST_ITEM);
      expect(renderedListboxItem.getAttribute('role')).toEqual('option');
    });

    it('should render a multiselect listbox', () => {
      render(<ListboxMultipleMock />);
      const renderedListbox = screen.getByLabelText('Code');
      expect(renderedListbox.getAttribute('aria-multiselectable')).toEqual('true');
    });
  });

  describe('Interaction', () => {
    it('should move focus to the second item when down arrow is pressed', () => {
      render(<ListboxMock />);
      userEvent.tab();
      userEvent.keyboard('{arrowdown}');
      expect(screen.getByTestId(SECOND_ITEM)).toHaveFocus();
    });

    it('should move focus to the first item when down and up is pressed', () => {
      render(<ListboxMock />);
      userEvent.tab();
      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{arrowup}');
      expect(screen.getByTestId(FIRST_ITEM)).toHaveFocus();
    });

    it('should move focus to the second item when right arrow is pressed for horizontal', () => {
      render(<ListboxHorizontalMock />);
      userEvent.tab();
      userEvent.keyboard('{arrowright}');
      expect(screen.getByTestId(SECOND_ITEM)).toHaveFocus();
    });

    it('should move focus to the first item when right and left is pressed for horizontal', () => {
      render(<ListboxHorizontalMock />);
      userEvent.tab();
      userEvent.keyboard('{arrowright}');
      userEvent.keyboard('{arrowleft}');
      expect(screen.getByTestId(FIRST_ITEM)).toHaveFocus();
    });

    it('should loop focus to the first item when right and right is pressed for horizontal', () => {
      render(<ListboxHorizontalMock />);
      userEvent.tab();
      userEvent.keyboard('{arrowright}');
      userEvent.keyboard('{arrowright}');
      expect(screen.getByTestId(FIRST_ITEM)).toHaveFocus();
    });

    it('should select the first item when enter is pressed', () => {
      render(<ListboxMock />);
      userEvent.tab();
      userEvent.keyboard('{enter}');

      const firstListboxItem = screen.getByTestId(FIRST_ITEM);
      expect(firstListboxItem.getAttribute('aria-selected')).toEqual('true');
      const secondListboxItem = screen.getByTestId(SECOND_ITEM);
      expect(secondListboxItem.getAttribute('aria-selected')).toEqual('false');
    });

    it('should select both items for a multiselect listbox', () => {
      render(<ListboxMultipleMock />);
      userEvent.tab();
      userEvent.keyboard('{enter}');
      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{enter}');

      const options = screen.getAllByRole('option');
      expect(options[0].getAttribute('aria-selected')).toEqual('true');
      expect(options[1].getAttribute('aria-selected')).toEqual('true');
    });
  });
});
