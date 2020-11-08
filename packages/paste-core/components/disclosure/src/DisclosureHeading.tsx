import * as React from 'react';
import {Heading, HeadingProps, HeadingPropTypes} from '@twilio-paste/heading';
import {Box, BoxStyleProps} from '@twilio-paste/box';
import {ChevronDownIcon, ChevronDownIconProps} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {DisclosurePrimitive, DisclosurePrimitiveProps} from '@twilio-paste/disclosure-primitive';
import {DisclosureContext, Variants} from './Disclosure';

export interface DisclosureHeadingProps
  extends Omit<DisclosurePrimitiveProps, 'baseId' | 'toggle' | keyof BoxStyleProps> {
  children: NonNullable<React.ReactNode>;
  as: HeadingProps['as'];
  marginBottom?: HeadingProps['marginBottom'];
  variant: HeadingProps['variant'];
}

interface StyledDisclosureHeadingProps extends Omit<DisclosureHeadingProps, 'as'> {
  renderAs: HeadingProps['as'];
  customDisabled?: boolean;
  customFocusable?: boolean;
  disclosureVariant: Variants;
}

const getIconSize = (variant: HeadingProps['variant']): ChevronDownIconProps['size'] => {
  switch (variant) {
    case 'heading10':
      return 'sizeIcon90';
    case 'heading20':
      return 'sizeIcon70';
    case 'heading30':
      return 'sizeIcon60';
    case 'heading40':
      return 'sizeIcon40';
    case 'heading50':
      return 'sizeIcon30';
    case 'heading60':
    default:
      return 'sizeIcon20';
  }
};

const getVariantStyles = (variant: Variants): BoxStyleProps => {
  switch (variant) {
    case 'contained':
      return {
        paddingBottom: 'space50',
        paddingLeft: 'space40',
        paddingRight: 'space40',
        paddingTop: 'space50',
      };
    default:
      return {};
  }
};

const StyledDisclosureHeading = React.forwardRef<HTMLDivElement, StyledDisclosureHeadingProps>(
  ({children, marginBottom, renderAs, disclosureVariant, customDisabled, customFocusable, variant, ...props}, ref) => {
    return (
      <Heading
        as={renderAs}
        marginBottom={disclosureVariant === 'contained' ? 'space0' : marginBottom}
        variant={variant}
      >
        <Box
          as="div"
          alignItems="center"
          borderRadius="borderRadius20"
          cursor="pointer"
          display="flex"
          outline="none"
          position="relative"
          ref={ref}
          role="button"
          _hover={{
            textDecoration: 'underline',
          }}
          _focus={{
            boxShadow: 'shadowFocus',
          }}
          _disabled={{
            color: 'colorTextWeak',
            cursor: 'not-allowed',
          }}
          {...getVariantStyles(disclosureVariant)}
          {...props}
        >
          <Box
            as="span"
            display="flex"
            transform={props['aria-expanded'] ? 'rotate(0deg)' : 'rotate(-90deg)'}
            transition="transform 100ms ease-out"
          >
            <ChevronDownIcon decorative size={getIconSize(variant)} />
          </Box>
          <Box flexGrow={1}>{children}</Box>
        </Box>
      </Heading>
    );
  }
);

const DisclosureHeading: React.FC<DisclosureHeadingProps> = ({children, as, disabled, focusable, ...props}) => {
  const {disclosure, variant} = React.useContext(DisclosureContext);
  return (
    <DisclosurePrimitive
      {...disclosure}
      {...props}
      renderAs={as}
      as={StyledDisclosureHeading}
      disclosureVariant={variant}
      disabled={disabled}
      customDisabled={disabled}
      focusable={focusable}
      customFocusable={focusable}
    >
      {children}
    </DisclosurePrimitive>
  );
};
DisclosureHeading.displayName = 'DisclosureHeading';

if (process.env.NODE_ENV === 'development') {
  DisclosureHeading.propTypes = HeadingPropTypes;
}
export {DisclosureHeading};
