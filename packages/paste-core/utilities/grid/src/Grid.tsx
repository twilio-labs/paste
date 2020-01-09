import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useTheme} from '@twilio-paste/theme';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {Margin, MarginProps, Space, SpaceOptions, SpaceProps} from '@twilio-paste/style-props';
import {safelySpreadBoxProps} from '@twilio-paste/box';
import {Flex, Vertical} from '@twilio-paste/flex';

export interface GridProps extends SpaceProps {
  children: NonNullable<React.ReactNode>;
  gutter?: Space;
  vertical?: Vertical;
}

const getNegativeMargin = (theme: ThemeShape, gutter?: Space): Margin => {
  if (Array.isArray(gutter)) {
    return (gutter as SpaceOptions[]).map((value: SpaceOptions) => {
      return `-${theme.space[value]}` as SpaceOptions;
    });
  }

  if (gutter) {
    return `-${theme.space[gutter as SpaceOptions]}` as SpaceOptions;
  }

  return 'auto';
};

const getGridStyles = (theme: ThemeShape, gutter?: Space): MarginProps => {
  const marginStyles: MarginProps = {
    marginLeft: getNegativeMargin(theme, gutter),
    marginRight: getNegativeMargin(theme, gutter),
  };

  return marginStyles;
};

const Grid: React.FC<GridProps> = ({children, gutter, marginTop, marginBottom, vertical, ...props}) => {
  const GridColumns = React.useMemo(
    () =>
      React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, {count: React.Children.count(children), gutter, vertical})
          : child
      ),
    [children]
  );

  const GridStyles = React.useMemo(() => getGridStyles(useTheme(), gutter), [gutter]);

  return (
    <Flex
      {...GridStyles}
      {...safelySpreadBoxProps(props)}
      marginTop={marginTop}
      marginBottom={marginBottom}
      vertical={vertical}
    >
      {GridColumns}
    </Flex>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.bool]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])),
  ] as any),
};

Grid.defaultProps = {
  vertical: false,
};

Grid.displayName = 'Grid';

export {Grid};
