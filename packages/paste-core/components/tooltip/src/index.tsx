import * as React from 'react';
import PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {StyledBase} from '@twilio-paste/theme';
import {Text} from '@twilio-paste/text';
import {useTooltipPrimitiveState, TooltipPrimitive, TooltipPrimitiveReference} from '@twilio-paste/tooltip-primitive';
import type {TooltipPrimitiveInitialState, TooltipPrimitiveStateReturn} from '@twilio-paste/tooltip-primitive';

import {TooltipArrow} from './TooltipArrow';

const StyledTooltip = React.forwardRef<HTMLDivElement, BoxProps>(({style, element, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBodyInverse"
      borderRadius="borderRadius30"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderInverseWeaker"
      element={element}
      maxWidth="size30"
      paddingX="space50"
      paddingY="space40"
      zIndex="zIndex90"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

StyledTooltip.displayName = 'StyledTooltip';

export interface TooltipStateReturn extends TooltipPrimitiveStateReturn {
  [key: string]: any;
}
export interface TooltipProps extends TooltipPrimitiveInitialState, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactElement>;
  state?: TooltipStateReturn;
  text: string;
}

/*
 *Tooltip's current structure does not allow for customization of its arrow.
 *TODO: refactor Tooltip so that the styling of its arrow can be customized
 *using Customization Provider.
 */

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({baseId, children, element = 'TOOLTIP', state, text, ...props}, ref) => {
    const tooltip = state || useTooltipPrimitiveState({baseId: `paste-tooltip-${useUID()}`, ...props});
    return (
      <>
        {React.Children.only(
          <TooltipPrimitiveReference {...tooltip} ref={ref} {...children.props}>
            {(referenceProps) => React.cloneElement(children, referenceProps)}
          </TooltipPrimitiveReference>
        )}
        <TooltipPrimitive element={element} {...tooltip} {...props} as={StyledTooltip}>
          {/* import Paste Theme Based Styles due to portal positioning. */}
          <StyledBase>
            <TooltipArrow {...tooltip} />
            <Text
              element={`${element}_TEXT`}
              as="span"
              color="colorTextInverse"
              fontSize="fontSize20"
              lineHeight="lineHeight10"
            >
              {text}
            </Text>
          </StyledBase>
        </TooltipPrimitive>
      </>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  Tooltip.propTypes = {
    children: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    element: PropTypes.string,
  };
}

Tooltip.displayName = 'Tooltip';
export {Tooltip};

export {useTooltipPrimitiveState as useTooltipState};
