import type {TextColorOptions, BackgroundColorOptions} from '@twilio-paste/style-props';

import type {BadgeVariants, BadgeProps} from './types';

export const hasValidButtonVariantProps = ({
  as,
  onClick,
}: {
  as?: BadgeProps['as'];
  onClick?: BadgeProps['onClick'];
}): boolean => {
  const clickHandlerIsValid = typeof onClick == 'function';
  const asPropIsValid = as === 'button';
  return clickHandlerIsValid && asPropIsValid;
};
export const hasValidAnchorVariantProps = ({as, href}: {as?: BadgeProps['as']; href?: BadgeProps['href']}): boolean => {
  const asPropIsValid = as === 'a';
  const hrefIsValid = typeof href === 'string';
  return asPropIsValid && hrefIsValid;
};

type Props = Record<string, any>;
export const safelySpreadProps = (props: Props, denylist: string[]): Partial<Props> =>
  Object.keys(props).reduce<Props>((resultProps, key: string) => {
    if (!denylist.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      resultProps[key] = props[key];
    }
    return resultProps;
  }, {});

export const getVariantStyles = (
  variant: BadgeVariants
): {
  color: TextColorOptions;
  backgroundColor: BackgroundColorOptions;
} => {
  switch (variant) {
    case 'success':
      return {
        backgroundColor: 'colorBackgroundSuccessWeakest',
        color: 'colorTextSuccess',
      };
    case 'error':
      return {
        backgroundColor: 'colorBackgroundErrorWeakest',
        color: 'colorTextError',
      };
    case 'warning':
      return {
        backgroundColor: 'colorBackgroundWarningWeakest',
        color: 'colorTextWarningStrong',
      };
    case 'new':
      return {
        backgroundColor: 'colorBackgroundNew',
        color: 'colorTextNew',
      };

    case 'info':
      return {
        backgroundColor: 'colorBackgroundNeutralWeakest',
        color: 'colorTextNeutral',
      };

    default:
      return {
        backgroundColor: 'colorBackground',
        color: 'colorTextWeak',
      };
  }
};
