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
    .map(name => name.slice(0, 1))
    .reduce((previous, currentInitial, index, initials) => {
      if (index === 0 || index === initials.length - 1) {
        return `${previous}${currentInitial}`;
      }
      return previous;
    }, '');
};

export const getCorrespondingLineHeightFromSizeToken = (size: IconSizeOptions): LineHeightOptions =>
  size.replace('sizeIcon', 'lineHeight') as LineHeightOptions;

export const getCorrespondingFontSizeFromSizeToken = (size: IconSizeOptions): FontSizeOptions => {
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

export const getComputedTokenNames = (size: IconSize): {lineHeight: LineHeight; fontSize: FontSize} => {
  if (Array.isArray(size)) {
    return {
      lineHeight: size.map(s => {
        if (s != null) {
          return getCorrespondingLineHeightFromSizeToken(s);
        }
        return null;
      }),
      fontSize: size.map(s => {
        if (s != null) {
          return getCorrespondingFontSizeFromSizeToken(s);
        }
        return null;
      }),
    };
  }
  return {
    lineHeight: getCorrespondingLineHeightFromSizeToken(size as IconSizeOptions),
    fontSize: getCorrespondingFontSizeFromSizeToken(size as IconSizeOptions),
  };
};
