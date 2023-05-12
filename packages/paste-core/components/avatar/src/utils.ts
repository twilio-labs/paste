import type {
  IconSizeOptions,
  LineHeightOptions,
  FontSizeOptions,
  IconSize,
  LineHeight,
  FontSize,
  SpaceOptions,
} from '@twilio-paste/style-props';

import type {AvatarVariants} from './types';

export const getInitialsFromName = (fullname: string): string => {
  return fullname
    .split(' ')
    .map((name) => name.slice(0, 1))
    .reduce((previous, currentInitial, index, initials) => {
      if (index === 0 || index === initials.length - 1) {
        return `${previous}${currentInitial}`;
      }
      return previous;
    }, '');
};

export const getCorrespondingLineHeightFromSizeToken = (size: IconSizeOptions): LineHeightOptions => {
  if (typeof size === 'string' && size.includes('sizeIcon')) {
    return size.replace('sizeIcon', 'lineHeight') as LineHeightOptions;
  }
  throw new Error('[Avatar]: size must be of type IconSizeOptions.');
};

export const getCorrespondingFontSizeFromSizeToken = (size: IconSizeOptions): FontSizeOptions => {
  if (typeof size === 'string' && size.includes('sizeIcon')) {
    switch (size) {
      case 'sizeIcon10':
      case 'sizeIcon20':
      case 'sizeIcon30':
      case 'sizeIcon40':
      case 'sizeIcon50':
      case 'sizeIcon60':
      default:
        return 'fontSize10';
      case 'sizeIcon70':
        return 'fontSize20';
      case 'sizeIcon80':
        return 'fontSize30';
      case 'sizeIcon90':
        return 'fontSize40';
      case 'sizeIcon100':
        return 'fontSize60';
      case 'sizeIcon110':
        return 'fontSize70';
    }
  }
  throw new Error('[Avatar]: size must be of type IconSizeOptions.');
};

/**
 * Uses IconSizeOptions to return a smaller IconSize
 */
export const getCorrespondingIconSizeFromSizeToken = (size: IconSizeOptions): IconSizeOptions => {
  if (typeof size === 'string' && size.includes('sizeIcon')) {
    switch (size) {
      case 'sizeIcon10':
      case 'sizeIcon20':
      case 'sizeIcon30':
      case 'sizeIcon40':
      default:
        return 'sizeIcon10';
      case 'sizeIcon50':
      case 'sizeIcon60':
        return 'sizeIcon20';
      case 'sizeIcon70':
        return 'sizeIcon30';
      case 'sizeIcon80':
        return 'sizeIcon40';
      case 'sizeIcon90':
        return 'sizeIcon50';
      case 'sizeIcon100':
        return 'sizeIcon70';
      case 'sizeIcon110':
        return 'sizeIcon80';
    }
  }
  throw new Error('[Avatar]: size must be of type IconSizeOptions.');
};

// this function takes in a size and exports an object w/ lineheight and fontsize and iconsize
export const getComputedTokenNames = (
  size: IconSize
): {lineHeight: LineHeight; fontSize: FontSize; iconSize: IconSize} => {
  if (typeof size === 'string') {
    // if size is a string, put it into the correspondingSize function
    return {
      lineHeight: getCorrespondingLineHeightFromSizeToken(size),
      fontSize: getCorrespondingFontSizeFromSizeToken(size),
      iconSize: getCorrespondingIconSizeFromSizeToken(size),
    };
  }
  // check to see if size is an array, map over it if it is
  if (Array.isArray(size)) {
    return {
      lineHeight: size.map((s) => {
        if (s != null) {
          return getCorrespondingLineHeightFromSizeToken(s);
        }
        return null;
      }),
      fontSize: size.map((s) => {
        if (s != null) {
          return getCorrespondingFontSizeFromSizeToken(s);
        }
        return null;
      }),
      iconSize: size.map((s) => {
        if (s != null) {
          return getCorrespondingIconSizeFromSizeToken(s);
        }
        return null;
      }),
    };
  }
  throw new Error('[Avatar]: size must be a string or an array');
};

/*
 * Spacing for Avatar Group
 */

export const getGroupSpacing = (size: IconSize, variant: AvatarVariants): SpaceOptions => {
  if (variant === 'user') {
    switch (size) {
      case 'sizeIcon10':
      case 'sizeIcon20':
      case 'sizeIcon30':
        return 'spaceNegative10';
      case 'sizeIcon40':
      case 'sizeIcon50':
      case 'sizeIcon60':
      case 'sizeIcon70':
        return 'spaceNegative20';
      case 'sizeIcon80':
      case 'sizeIcon90':
        return 'spaceNegative30';
      case 'sizeIcon100':
        return 'spaceNegative40';
      case 'sizeIcon110':
        return 'spaceNegative50';
    }
  }
  switch (size) {
    case 'sizeIcon10':
    case 'sizeIcon20':
    case 'sizeIcon30':
      return 'spaceNegative10';
    case 'sizeIcon40':
    case 'sizeIcon50':
    case 'sizeIcon60':
    case 'sizeIcon70':
    case 'sizeIcon80':
    case 'sizeIcon90':
    case 'sizeIcon100':
    case 'sizeIcon110':
      return 'spaceNegative20';
    default:
      return 'spaceNegative20';
  }
};
