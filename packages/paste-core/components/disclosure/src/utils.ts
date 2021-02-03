import * as React from 'react';
import type {GenericThemeShape} from '@twilio-paste/theme';
import type {BoxStyleProps} from '@twilio-paste/box';
import type {HeadingProps} from '@twilio-paste/heading';

/**
 * Returns the styles needed for the icon color and transitions
 * @param {boolean} isHovered
 * @param {HeadingProps['variant']} variant
 * @param {boolean} ariaExapanded
 * @param {boolean} ariaDisabled If set to true, the function will return only a color style
 * @param {GenericThemeShape['space']} space
 * @returns {BoxStyleProps} Color style if ariaDisabled is false, or color, transform, and transition styles depending on variant if ariaDisabled is false
 */
export const getIconHoverStyles = (
  isHovered: boolean,
  variant: HeadingProps['variant'],
  ariaExpanded: boolean | 'true' | 'false' | undefined,
  ariaDisabled: boolean | 'true' | 'false' | undefined,
  space: GenericThemeShape['space']
): Pick<BoxStyleProps, 'color' | 'transform' | 'transition'> => {
  if (!ariaDisabled) {
    let slideDistance = space.space20;
    if (variant === 'heading40' || variant === 'heading50' || variant === 'heading60') {
      slideDistance = space.space10;
    }
    return {
      color: isHovered ? 'colorText' : 'colorTextIcon',
      transform: `${isHovered ? `translateX(${slideDistance})` : `translateX(0)`} ${
        ariaExpanded ? 'rotate(0deg)' : 'rotate(-90deg)'
      }`,
      transition: 'transform 200ms ease-out',
    };
  }
  return {
    color: 'colorTextIcon',
  };
};

/*
 TODO: Move this hook over to a Paste hook library
*/
export const useHover = <T extends HTMLElement = HTMLElement>(elementRef: React.RefObject<T>): boolean => {
  const [value, setValue] = React.useState(false);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);

  React.useEffect(() => {
    const node = elementRef?.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [elementRef]);

  return value;
};
