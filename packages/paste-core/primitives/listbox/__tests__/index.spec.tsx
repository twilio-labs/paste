import * as React from 'react';
import {render, screen} from '@testing-library/react';

import {useListboxPrimitiveState, ListboxPrimitive, ListboxPrimitiveItem} from '../src';

const ListboxMock: React.FC = () => {
  const listbox = useListboxPrimitiveState({baseId: 'listbox-example'});
  return (
    <>
      <ListboxPrimitive {...listbox} aria-label="Code">
        <ListboxPrimitiveItem {...listbox} data-testid="example-listbox-item">
          Item 1
        </ListboxPrimitiveItem>
        <ListboxPrimitiveItem {...listbox} />
      </ListboxPrimitive>
    </>
  );
};

describe('Listbox Primitive', () => {
  describe('Render', () => {
    it('should render', () => {
      const {asFragment} = render(<ListboxMock />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render a listbox', () => {
      render(<ListboxMock />);
      const renderedMenu = screen.getByLabelText('Code');
      expect(renderedMenu.getAttribute('role')).toEqual('menu');
      expect(renderedMenu.getAttribute('aria-orientation')).toEqual('vertical');
    });
  });
});
