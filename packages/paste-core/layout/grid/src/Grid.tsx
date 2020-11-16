import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MarginProps, Space, ResponsiveProp} from '@twilio-paste/style-props';
import {safelySpreadBoxProps} from '@twilio-paste/box';
import {Flex} from '@twilio-paste/flex';
import {GridProps} from './types';
import {getOuterGutterPull} from './utils';

const getGridStyles = (gutter?: Space): MarginProps => {
  const marginStyles: MarginProps = {
    marginLeft: getOuterGutterPull(gutter),
    marginRight: getOuterGutterPull(gutter),
  };

  return marginStyles;
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({as, children, gutter, marginTop, marginBottom, vertical, ...props}, ref) => {
    const GridColumns = React.useMemo(
      () =>
        React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child, {count: React.Children.count(children), gutter, vertical})
            : child
        ),
      [children]
    );

    const GridStyles = React.useMemo(() => getGridStyles(gutter), [gutter]);

    return (
      <Flex
        {...GridStyles}
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as={as}
        marginTop={marginTop}
        marginBottom={marginBottom}
        vertical={vertical}
        wrap
      >
        {GridColumns}
      </Flex>
    );
  }
);
Grid.displayName = 'Grid';

Grid.defaultProps = {
  vertical: false,
};

if (process.env.NODE_ENV === 'development') {
  Grid.propTypes = {
    as: PropTypes.string as any,
    children: PropTypes.node.isRequired,
    vertical: ResponsiveProp(PropTypes.bool),
  };
}

export {Grid};
