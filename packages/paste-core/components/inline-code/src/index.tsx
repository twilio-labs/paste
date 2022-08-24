import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface InlineCodeProps {
  children?: React.ReactNode;
}

const InlineCode = React.forwardRef<HTMLDivElement, InlineCodeProps>((props, ref) => {
  return (
    <div ref={ref}>
      {props.children}
    </div>
  );
});

InlineCode.displayName = 'InlineCode';

InlineCode.propTypes = {
  children: PropTypes.node,
};

export {InlineCode};
