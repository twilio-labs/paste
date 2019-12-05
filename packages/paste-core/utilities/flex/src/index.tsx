import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {FlexboxProps} from '@twilio-paste/types';

export type displayOptions = 'flex' | 'inline-flex';
export type vAlignOptions = 'top' | 'center' | 'bottom' | 'stretch';
export type hAlignOptions = 'left' | 'center' | 'right' | 'around' | 'between';

export interface FlexProps {
  display?: displayOptions;
  column?: boolean;
  vAlignContent?: vAlignOptions;
  hAlignContent?: hAlignOptions;
  grow?: boolean | number;
  shrink?: boolean | number;
  basis?: string | number;
  order?: number;
  wrap?: boolean;
}

function getGrow({grow}: FlexProps): number {
  if (typeof grow === 'number') {
    return grow;
  } else if (grow) {
    return 1;
  }

  return 0; // default
}

function getShrink({shrink, basis}: FlexProps): number {
  if (typeof shrink === 'number') {
    return shrink;
  } else if (shrink) {
    return 1;
  } else if (shrink === false) {
    return 0;
  }

  if (basis && basis !== 'auto') {
    return 0;
  }

  return 1; // default
}

function getBasis({basis}: FlexProps): string {
  if (basis) {
    const suffix = typeof basis === 'number' || String(parseInt(basis as string, 10)) === basis ? 'px' : '';
    return basis + suffix;
  }

  return 'auto'; // default
}

function alignPropToFlex(align: FlexProps['vAlignContent'] | FlexProps['hAlignContent']) {
  switch (align) {
    case 'top':
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'bottom':
    case 'right':
      return 'flex-end';
    case 'stretch':
      return 'stretch';
    case 'around':
      return 'space-around';
    case 'between':
      return 'space-between';
  }
}

function getFlexStyles(props: FlexProps): FlexboxProps {
  const {basis, column, grow, shrink, wrap, hAlignContent, vAlignContent} = props;
  const styles = {
    justifyContent: alignPropToFlex(column ? vAlignContent : hAlignContent),
    alignItems: alignPropToFlex(column ? hAlignContent : vAlignContent),
  };

  if (grow || shrink || basis) {
    styles.flex = `${getGrow(props)} ${getShrink(props)} ${getBasis(props)}`;
  }

  if (column) {
    styles.flexDirection = column ? 'column' : 'row';
  }

  if (wrap) {
    styles.flexWrap = wrap ? 'wrap' : 'nowrap';
  }

  return styles;
}

const Flex: React.FC<FlexProps> = props => {
  return (
    <Box {...getFlexStyles(props)} display={props.display} order={props.order}>
      {props.children}
    </Box>
  );
};

Flex.propTypes = {
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  column: PropTypes.bool,
  vAlignContent: PropTypes.oneOf(['top', 'center', 'bottom']),
  hAlignContent: PropTypes.oneOf(['left', 'center', 'right']),
  grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  order: PropTypes.number,
  wrap: PropTypes.bool,
};

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
export {Flex};
