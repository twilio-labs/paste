import type {BoxStyleProps} from '@twilio-paste/box';
import type {HeadingProps} from '@twilio-paste/heading';
import type {
  DisclosurePrimitiveInitialState,
  DisclosurePrimitveStateReturn,
  DisclosurePrimitiveProps,
  DisclosurePrimitiveContentProps,
} from '@twilio-paste/disclosure-primitive';

export type DisclosureVariants = 'contained' | 'default';

export interface DisclosureContextProps {
  disclosure: DisclosurePrimitveStateReturn;
  variant: DisclosureVariants;
}

export interface DisclosureStateReturn extends DisclosurePrimitveStateReturn {
  [key: string]: any;
}

export type {DisclosurePrimitiveInitialState as DisclosureInitialState};

export interface DisclosureProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  state?: DisclosureStateReturn;
  variant?: DisclosureVariants;
}

export interface DisclosureHeadingProps
  extends Omit<DisclosurePrimitiveProps, 'baseId' | 'toggle' | keyof BoxStyleProps> {
  children: NonNullable<React.ReactNode>;
  as: HeadingProps['as'];
  marginBottom?: HeadingProps['marginBottom'];
  variant: HeadingProps['variant'];
}

export interface StyledDisclosureHeadingProps extends Omit<DisclosureHeadingProps, 'as'> {
  renderAs: HeadingProps['as'];
  customDisabled?: boolean;
  customFocusable?: boolean;
  disclosureVariant: DisclosureVariants;
}

export interface DisclosureContentProps extends Omit<DisclosurePrimitiveContentProps, keyof BoxStyleProps> {
  children: NonNullable<React.ReactNode>;
}
