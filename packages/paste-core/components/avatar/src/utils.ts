import {
  IconSizeOptions,
  LineHeightOptions,
  FontSizeOptions,
  IconSize,
  LineHeight,
  FontSize,
} from '@twilio-paste/style-props';

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

export const getCorrespondingLineHeightFromSizeToken = (size: IconSizeOptions): LineHeightOptions =>
  size.replace('sizeIcon', 'lineHeight') as LineHeightOptions;

export const getCorrespondingFontSizeFromSizeToken = (size: IconSize): FontSizeOptions => {
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
};

export const getCorrespondingIconSizeFromSizeToken = (size: IconSize): IconSizeOptions => {
  switch (size) {
    case 'sizeIcon10':
    case 'sizeIcon20':
    case 'sizeIcon30':
    default:
      return 'sizeIcon10';
    case 'sizeIcon40':
    case 'sizeIcon60':
    case 'sizeIcon50':
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
};

// this function takes in a size and exports an object w/ lineheight and fontsize
export const getComputedTokenNames = (
  size: IconSize
): {lineHeight: LineHeight; fontSize: FontSize; iconSize: IconSize} => {
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

  // if it's a string, just put it into the correspondingSize function and specify its type
  return {
    lineHeight: getCorrespondingLineHeightFromSizeToken(size as IconSizeOptions),
    fontSize: getCorrespondingFontSizeFromSizeToken(size),
    iconSize: getCorrespondingIconSizeFromSizeToken(size),
  };
};
