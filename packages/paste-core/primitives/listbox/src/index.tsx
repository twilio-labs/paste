import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';

export interface ListboxProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const Listbox = React.forwardRef<HTMLDivElement, ListboxProps>(({element = "LISTBOX", ...props}, ref) => {
  return (
    <div ref={ref}>
      {props.children}
    </div>
  );
});

Listbox.displayName = 'Listbox';

Listbox.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {Listbox};
