import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from 'react-uid';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {StyledBase} from '@twilio-paste/theme';
import {Text} from '@twilio-paste/text';
import {
  TooltipPrimitiveInitialState,
  useTooltipPrimitiveState,
  TooltipPrimitive,
  TooltipPrimitiveReference,
} from '@twilio-paste/tooltip-primitive';
import {TooltipArrow} from './TooltipArrow';

const StyledTooltip = React.forwardRef<HTMLDivElement, BoxProps>(({style, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBodyInverse"
      borderColor="colorBorderDark"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      boxShadow="shadow"
      maxWidth="size30"
      padding="space30"
      paddingBottom="space20"
      paddingTop="space20"
      zIndex="zIndex90"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

export interface TooltipProps extends TooltipPrimitiveInitialState {
  children: NonNullable<React.ReactElement>;
  text: string;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(({baseId, children, text, ...props}, ref) => {
  const tooltip = useTooltipPrimitiveState({baseId: `paste-tooltip-${useUID()}`, ...props});
  return (
    <>
      {React.Children.only(
        <TooltipPrimitiveReference {...tooltip} ref={ref}>
          {referenceProps => React.cloneElement(children, referenceProps)}
        </TooltipPrimitiveReference>
      )}
      <TooltipPrimitive {...tooltip} {...props} as={StyledTooltip}>
        {/* import Paste Theme Based Styles due to portal positioning. */}
        <StyledBase>
          <TooltipArrow {...tooltip} />
          <Text as="span" color="colorTextInverse">
            {text}
          </Text>
        </StyledBase>
      </TooltipPrimitive>
    </>
  );
});

if (process.env.NODE_ENV === 'development') {
  Tooltip.propTypes = {
    children: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
  };
}

Tooltip.displayName = 'Tooltip';
export {Tooltip};
