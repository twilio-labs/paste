import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {FlexboxProps} from '@twilio-paste/types';

export type displayOptions = 'flex' | 'inline-flex';
export type vAlignOptions = 'top' | 'center' | 'bottom';
export type hAlignOptions = 'left' | 'center' | 'right';

interface Flex {
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

function getGrow(props: Flex): number {
  const {grow} = props;
  if (typeof grow === 'number') {
    return grow;
  } else if (grow) {
    return 1;
  }

  return 0; // default
}

function getShrink(props: Flex): number {
  const {shrink, basis} = props;
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

function getBasis(props: Flex): string {
  const {basis} = props;
  if (basis) {
    const suffix = typeof basis === 'number' || String(parseInt(basis as string, 10)) === basis ? 'px' : '';
    return basis + suffix;
  }

  return 'auto'; // default
}

function getFlexStyles(props: Flex): FlexboxProps {
  const {column, wrap, vAlignContent, hAlignContent} = props;

  function alignPropToFlex(align: Flex['vAlignContent'] | Flex['hAlignContent']) {
    switch (align) {
      case 'top':
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'bottom':
      case 'right':
        return 'flex-end';
    }
  }

  return {
    flex: `${getGrow(props)} ${getShrink(props)} ${getBasis(props)}`,
    flexDirection: column ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: alignPropToFlex(column ? vAlignContent : hAlignContent),
    alignItems: alignPropToFlex(column ? hAlignContent : vAlignContent),
  };
}

const Flex: React.FC<Flex> = props => {
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
